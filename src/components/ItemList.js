import React, { useEffect, useState } from 'react'
import Item from './Item/Item'
import dataProd from './data/dataProd'
import './ItemList.css'

function getProds(){
    return new Promise( (resolve) =>{
        setTimeout( () => resolve(dataProd), 2000)
    })
}

function ItemList() {
    const [data, setData] = useState([])

    useEffect(()=>{
        getProds().then((resp) =>{
            setData(resp)
        })
    }, [])

  return (
    <div className='itemList'>
       {
        data.map( (prod) => 
        <Item 
        key={prod.id} 
        title={prod.title} 
        description={prod.description} 
        price={prod.price} 
        imgurl={prod.imgurl}/>
        )
       }
    </div>
  )
}
 {/* <Item title={data.title} description={data.description} price={data.price} imgurl={data.imgurl}/> */}
export default ItemList