import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList";
import dataProd from './data/dataProd'
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {
  const [data, setData] = useState([])
  const idCategory = useParams().idCategory;
  
  function getProds(){
    return new Promise( (resolve) =>{
      setTimeout( ()=> {
      if(idCategory === undefined) resolve(dataProd);
      let filterCat = dataProd.filter((element) => element.category === idCategory)
      resolve(filterCat)
     } , 1000)
    })
  }

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