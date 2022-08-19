import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList";
import dataProd from './data/dataProd'
import { useParams } from 'react-router-dom'

function getProds(){
  return new Promise( (resolve) =>{
    setTimeout( ()=> {
     resolve(dataProd);
   } , 1000)
  })
}

function ItemListContainer(props) {
  const [data, setData] = useState([])
  const {category} = useParams();
  
  useEffect(()=>{
      getProds().then((resp) =>{
        let filterCat = resp.filter((element) => element.category === category)

        if(category === undefined) setData(resp);
        else setData(filterCat)
        console.log(filterCat)
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