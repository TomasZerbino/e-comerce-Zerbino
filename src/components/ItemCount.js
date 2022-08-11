import React, { useState } from 'react'

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
    const onAdd = () =>{
        alert('Añadido al carrito')
    }

  return (
    <div className='itemCountContainer'>
        <div className='itemCount'>
            <button onClick={ decrement }>-</button>
            <span>{cont}</span>
            <button onClick={ increment }>+</button>
        </div>
        <button className='buyBtn' onClick={ onAdd }>Comprar</button>
    </div>
  )
}

export default ItemCount