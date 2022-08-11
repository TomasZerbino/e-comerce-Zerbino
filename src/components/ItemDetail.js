import React from 'react'

function ItemDetail(props) {
  return (
    <div className='detailContainer'>
        
        <div className='detailImg'>
            <img src={props.itemSelected.imgurl}/>
        </div>
        <div className='detailDescriptionContainer'>
            <div className='detailTitel'>
                <h3>{props.itemSelected.title}</h3>
            </div>
            <div className='detailDescription'>
                <p>{props.itemSelected.description}</p>
            </div>
            <div className='detailButton'>
                <button>Comprar</button>
                <span>{props.itemSelected.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail