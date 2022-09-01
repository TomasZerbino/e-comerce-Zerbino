import React, {useContext} from 'react'
import {cartContext} from '../store/cartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';
import UserForm from './UserForm';


function CartView() {
    const {cart, removeItem} = useContext(cartContext)

  return (
    <>
            {cart.length === 0
            ? <div><h2>The cart is empty</h2> <Link to={'/'}>Back to homepage </Link></div>
            
            :
       
           <div className="main container mx-auto mt-5">
        <h1>Tu Carrito</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remover</th>
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
      </div>}
      <div></div>
      <UserForm cart={cart}/>
    </> 
  )
}
export default CartView