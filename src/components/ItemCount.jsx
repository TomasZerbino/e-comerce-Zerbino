import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";

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
    const count = () =>{
       
    }


  return (
    <div className='itemCountContainer'>
        <p>Quantity:</p>
        <div className='itemCount'>
            <button onClick={ decrement }><FontAwesomeIcon icon={ iconList.faMinusSquare } /></button>
            <span>{cont}</span>
            <button onClick={ increment }  ><FontAwesomeIcon icon={ iconList.faPlusSquare } /></button>
        </div>
        <button onClick={ () => props.onAdd(cont) }  >Confirm Quantity</button>
    </div>
  )
}

export default ItemCount