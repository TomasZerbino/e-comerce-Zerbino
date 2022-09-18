import React, {useContext} from 'react'
import {cartContext} from '../store/cartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';

function CartView() {
    const {cart, removeItem, total, clear} = useContext(cartContext)
    
  return (
    <>
            {cart.length === 0
            ? <div><h2>The cart is empty</h2> <Link to={'/'}>Back to homepage </Link></div>
            
            :
       
      <div className='cartContainer'>
        <h1>Cart</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => {
              return (
                <CartItem
                  key={prod.id}
                  title={prod.title}
                  price={prod.price}
                  total={prod.price * prod.quantity}
                  img={prod.imgurl}
                  quantity={prod.quantity}
                  removeItem={()=> removeItem(prod.id)}
                />
              );
            })}
          </tbody>
        </table>
        <div className='totalPrice'>
          <button  onClick={ ()=> clear()}>Clear cart</button>
          <span>Total: {(total).toFixed(2)}</span>
        </div>
        <div className='checkOutDiv'>
        <Link className='checkOutBtn' to={'/checkout'}>Check-Out</Link>
        </div>   	
      </div>}
    </> 
  )
}
export default CartView