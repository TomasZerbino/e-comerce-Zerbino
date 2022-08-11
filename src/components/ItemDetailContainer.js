import React, { useEffect, useState } from 'react'
import dataProd from './data/dataProd'
import ItemDetail from './ItemDetail'

function getProd(){
    return new Promise( (resolve) =>{
        setTimeout( () => resolve(dataProd[0]), 2000)
    })
  }

function ItemDetailContainer() {
    const [data, setData] = useState([])

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