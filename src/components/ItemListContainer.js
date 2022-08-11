import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList";
import dataProd from './data/dataProd'

function getProds(){
  return new Promise( (resolve) =>{
      setTimeout( () => resolve(dataProd), 2000)
  })
}

function ItemListContainer(props) {
  const [data, setData] = useState([])

  useEffect(()=>{
      getProds().then((resp) =>{
          setData(resp)
      })
  }, [])

    return (
    <div className="cont">
        <h2>{props.greeting} Pords</h2>
        <ItemList array={ data }/>
    </div>
  )
}

export default ItemListContainer