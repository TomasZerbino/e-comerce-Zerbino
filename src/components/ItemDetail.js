import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function ItemDetail(props) {
    const [actualCount, setActualCount] = useState(0)

    function countNum(cont){
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
                
            </div>
            <div className='detailDescription'>
                <h4>Description:</h4>
                <p>{props.itemSelected.description}</p>
            </div>
            <div className='detailButton'>
                <h4>Total price: <span>${actualCount * props.itemSelected.price}</span></h4>
                { estado === 0 ?<ItemCount initial={1} stock={props.itemSelected.stock} onAdd={countNum}/>
                :<Link to={`/cart`}><FontAwesomeIcon icon={ iconList.faShoppingCart } />  Add to Cart</Link>}
            </div>
        </div>
    </div>
  )
}

export default ItemDetail