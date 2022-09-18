import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {cartContext} from '../store/cartContext'

function ItemDetail(props) {
    const [actualCount, setActualCount] = useState(0)
    const {addToCart} = useContext(cartContext)

    function countNum(cont){
        addToCart(props.itemSelected, cont)
        setActualCount(cont)
    }
    let estado = actualCount; 

  
  return (
    <div className='detailContainer'>
        
        <div className='detailImg'>
            <img src={props.itemSelected.imgurl}/>
        </div>
        <div className='detailDescriptionContainer'>
            <div className='detailTitle'>
                <h3>{props.itemSelected.title}</h3>
                <p>{props.itemSelected.category}</p>
            </div>
            <div className='detailAmount'>
                <div className='detPrice'>
                    <p>Price:</p>
                    <span>${props.itemSelected.price}</span>
                </div> 
                <div className='detPrice'>  
                    <p>Total price:</p> 
                    <span className='totalPrice'>${(actualCount * props.itemSelected.price).toFixed(2)}</span>
                </div> 
                
            </div>
            <div className='detailDescription'>
                <h4>Description:</h4>
                <p>{props.itemSelected.description}</p>
            </div>
            {(props.itemSelected.stock === 0)? <div><span>Out Of Stock</span></div>
            :
            <div className='detailButton'>
                { estado === 0 ?<ItemCount initial={1} stock={props.itemSelected.stock} onAdd={countNum}/>
                :<Link to={`/cart`}> {`Proceed to checkout (${estado} items)`} </Link>}
            </div>}
        </div>
    </div>
  )
}

export default ItemDetail