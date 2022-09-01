import React, { useState, useContext } from 'react'
import {cartContext} from '../store/cartContext'
import fsDatabase from '../services/firebase'
import { getDocs, collection, query, addDoc } from 'firebase/firestore'

function UserForm({cart}) {
    
    const [userInfo, setUserInfo] = useState({
        name:'',
        email:'',
        phone:''
    })
    let total = 0;
    cart.forEach((item) => {
    total += item.price * item.quantity;
  });
    const buyOrder ={
        buyer: {...userInfo},
        items:[...cart],
        total:total,
        date: new Date()
    }

    async function handleSubmit(evt){
        evt.preventDefault();

        const collectionRef = collection(fsDatabase, 'orders');
        const docRef = await addDoc(collectionRef, buyOrder);
        console.log(docRef);
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
    
    <div>
        <form onReset={handleReset} onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="name">Name: </label>
                <input value={userInfo.name} onChange={inputChangeHandler} type="text" name='name' placeholder='Name' />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input value={userInfo.email} onChange={inputChangeHandler} type="email" name="email" placeholder='Email' />
            </div>
            <div>
                <label htmlFor="phone">Phone: </label>
                <input value={userInfo.phone} onChange={inputChangeHandler} type="text" name="phone" placeholder='Phone' />
            </div>
            <div>
                <button type='submit'>Submit</button>
                <button type='reset'>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default UserForm