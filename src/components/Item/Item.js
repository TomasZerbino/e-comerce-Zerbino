import React from 'react'
import "./Item.css"

function Item({title, description, imgurl, price}) {
  return (
    <div className='itemContainer'>
        <div className='itemImg'>
            <img src={imgurl}/>
        </div>
        <div className='itemTitel'>
            <h3>{title}</h3>
        </div>
        <div className='itemDescription'>
            <p>{description}</p>
        </div>
        <div className='ItemButton'>
            <button>Comprar</button>
            <span>{price}</span>
        </div>

    </div>
  )
}

export default Item