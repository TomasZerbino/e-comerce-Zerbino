import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'

function Item({category, id, title, description, imgurl, price}) {
  return (
    <div className='itemContainer'>
        <div className='itemImg'>
            <img src={imgurl}/>
        </div>
        <div className='itemTitle'>
            <h3>{title}</h3>
        </div>
        <div className='itemDescription'>
            <p>{description}</p>
        </div>
        <div className='itemButton'>
            <Link to={`/detail/${id}`}><p className='eye'><FontAwesomeIcon icon={ iconList.faEye }/></p> See More</Link>
            <span>${price}</span>
        </div>
    </div>
  )
}

export default Item