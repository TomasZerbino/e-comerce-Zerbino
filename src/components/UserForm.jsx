import React, { useState, useContext } from 'react'
import {cartContext} from '../store/cartContext'
import fsDatabase from '../services/firebase'
import { getDocs, collection, query, addDoc, where, documentId, writeBatch } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function UserForm() {
    const {cart, total, clear} = useContext(cartContext)
    const [userInfo, setUserInfo] = useState({
        name:'',
        email:'',
        phone:''
    })

    const buyOrder ={
        buyer: {...userInfo},
        items:[...cart],
        total:(total).toFixed(2),
        date: new Date()
    }

    async function handleSubmit(evt){
        evt.preventDefault();

        const collectionRef = collection(fsDatabase, 'orders');
        const docRef = await addDoc(collectionRef, buyOrder);
        console.log(docRef);

        const prodsCollection = collection(fsDatabase, "products");
        const cartIds = cart.map((item) => item.id);
        const q = query(prodsCollection, where(documentId(), 'in', cartIds));

        let batch = writeBatch(fsDatabase)

        getDocs(q).then((resp) =>{
            resp.docs.forEach((doc) =>{
                const itemUpdate = cart.find((prod) => prod.id == doc.id);

                if(doc.data().stock >= itemUpdate.quantity){
                    batch.update(doc.ref,{
                        stock: doc.data().stock - itemUpdate.quantity
                    });
                }
                batch.commit();
            })
        })

        handleReset()
        clear()

    }

    function inputChangeHandler(evt){
        const input = evt.target;

        const value = input.value;
        const inputName = input.name;

        let userInfoCopy = {...userInfo}
        userInfoCopy[inputName] = value;
        setUserInfo(userInfoCopy)
    }

    function handleReset(){
        setUserInfo({
            name:'',
            email:'',
            phone:''
        })
    }

    return (
    <>
    <h1 className='formH1'>Check-Out</h1>
    
    <div className='formCont'>
        <form onReset={handleReset} onSubmit={handleSubmit}> 
            <div className='formInput'>
                <label htmlFor="name">Name: </label>
                <input value={userInfo.name} onChange={inputChangeHandler} type="text" name='name' placeholder='Name' />
            </div>
            <div className='formInput'>
                <label htmlFor="email">Email: </label>
                <input value={userInfo.email} onChange={inputChangeHandler} type="email" name="email" placeholder='Email' />
            </div>
            <div className='formInput'>
                <label htmlFor="phone">Phone: </label>
                <input value={userInfo.phone} onChange={inputChangeHandler} type="text" name="phone" placeholder='Phone' />
            </div>
            <div className='btnsForm'>
                <Link className='backBtn' to={'/cart'}><FontAwesomeIcon icon={ iconList.faArrowLeft }></FontAwesomeIcon> Back</Link>
                <button className='resetBtn' type="reset">Reset</button>
                <Link className='submitBtn'to={'/thanks'}><button  type='submit'>Submit</button></Link>
            </div>
        </form>
    </div>
    </>
  )
}

export default UserForm