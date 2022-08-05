import React, { useState } from 'react'
import "./ItemCount.css"
function ItemCount(props) {

    const [cont, setCont] = useState(props.initial);

    const decrement = () =>{
        if (cont <= props.initial) {
            cont = props.initial
        }
        setCont(cont - 1)
    }
    const increment = () =>{
        if(cont >= props.stock){
           cont = props.stock  
        }
        setCont(cont + 1)
    }

  return (
    <div className='ItemCount'>
        <button onClick={ decrement}>-</button>
        <span>{cont}</span>
        <button onClick={ increment }>+</button>
    </div>
  )
}

export default ItemCount