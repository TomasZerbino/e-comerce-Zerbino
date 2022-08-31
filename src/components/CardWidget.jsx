import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import React, {useContext} from 'react'
import {cartContext} from '../store/cartContext'


function CardWidget() {
  const {cart} = useContext(cartContext)

  let cartCount = 0
  cart.forEach(elem => cartCount += elem.quantity)
  

  return (
    <div className="cardWidget">
        <button> <Link to={'/cart'}><FontAwesomeIcon icon={ iconList.faShoppingCart } /></Link> </button>
        {(cartCount === 0)? <div><span><FontAwesomeIcon icon={ iconList.faPlus } /></span></div>
        :
        <div>{cartCount}</div>
        }
    </div>
  )
}

export default CardWidget