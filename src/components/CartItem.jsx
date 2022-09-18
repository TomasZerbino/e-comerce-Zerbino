import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartItem({ price, img, title, removeItem, quantity, id  }) {
  return (
    <tr>
      <td>
        <img src={img} alt={title} />
      </td>
      <td>{title}</td>
      <td>{quantity}</td>
      <td>$ {price}</td>
      <td><button onClick={ ()=> removeItem(id) }><FontAwesomeIcon icon={ iconList.faTrash }></FontAwesomeIcon></button></td>
    </tr>
  )
}

export default CartItem