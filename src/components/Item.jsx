import React from 'react'
import { Link } from 'react-router-dom'

function Item({id, title, description, imgurl, price, stock}) {

  return (
    <div className='itemContainer'>
        <div className='itemImg'>
            <img src={imgurl} alt={title}/>
        </div>
        <div className='itemTitle'>
            <h3>{title}</h3>
        </div>
        <div className='itemDescription'>
            <p>{description}</p>
        </div>
        <div className='itemButton'>
            <Link to={`/detail/${id}`}>See more</Link>
            <span>${price}</span>
        </div>
    </div>
  )
}

export default Item