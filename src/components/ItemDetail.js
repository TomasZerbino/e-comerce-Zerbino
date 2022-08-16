import React from 'react'
import ItemCount from './ItemCount'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function ItemDetail(props) {
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
                    <span>{props.itemSelected.price}</span>
                </div>
                <ItemCount initial={1} stock={10}/>
            </div>
            <div className='detailDescription'>
                <h4>Description:</h4>
                <p>{props.itemSelected.description}</p>
            </div>
            <div className='detailButton'>
                <h4>Total price: <span>$</span></h4>
                <button><FontAwesomeIcon icon={ iconList.faShoppingCart } />  Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail