import React, {useContext} from 'react'
import {cartContext} from '../store/cartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'


function Cart() {
    const {cart, removeItem} = useContext(cartContext)

  return (
    

    <div>
        {
            cart.length === 0
            ? <div><h2>The cart is empty</h2> <Link to={'/'}>Back to homepage </Link></div>
            
            :
        cart.map((prod) => 
        <div>
            <div>{prod.title}</div>
            <div>{prod.quantity}</div>
            <div>{prod.price}</div>
            <div><button onClick={ ()=> removeItem(prod.id) }><FontAwesomeIcon icon={ iconList.faTrash }></FontAwesomeIcon></button></div>
        </div>
        )}
    </div>
  )
}

export default Cart