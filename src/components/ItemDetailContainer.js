import React, { useEffect, useState } from 'react'
import dataProd from './data/dataProd'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'



function ItemDetailContainer() {
  const [data, setData] = useState([])
  const idUrl = useParams().id;

  function getProd(){
    return new Promise( (resolve) =>{
        let itemRequest = dataProd.find( element => element.id == idUrl)
        resolve(itemRequest)
    })
  }
  
  useEffect(()=>{
      getProd().then((resp) =>{
          setData(resp)
      })
  }, [])

  return (
    <div>
        <ItemDetail itemSelected={data}/>
    </div>
  )
}

export default ItemDetailContainer 