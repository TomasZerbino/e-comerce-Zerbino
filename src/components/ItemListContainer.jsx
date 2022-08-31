import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList";
import dataProd from './data/dataProd'
import { useParams } from 'react-router-dom'
import fsDatabase from '../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

function getProds(){
  return new Promise( (resolve) =>{
    const prodsCollection = collection(fsDatabase,'products')

    getDocs(prodsCollection).then(snapshot => {
      const docsData = snapshot.docs.map(doc =>{
        return{...doc.data(), id: doc.id }
      } )
      resolve(docsData)
    })
      
  })
}

const getDbItem = (category) =>{
  return new Promise((resolve) =>{
    const prodsCollection = collection(fsDatabase,'products')
    const q = query(prodsCollection, where('category', '==', category))

    getDocs(q).then(snapshot => {
      const docsData = snapshot.docs.map(doc =>{
        return{...doc.data(), id: doc.id }
      } )
      resolve(docsData)
    })
  })
}

function ItemListContainer(props) {
  const [data, setData] = useState([])
  const {category} = useParams();

  useEffect(()=>{
      if(category === undefined)
      getProds().then((resp) =>{
      setData(resp)});
      else {getDbItem(category).then((resp) =>{
        setData(resp)})} 
  }, [category])

    return (
      <>
        {
          (category)?<h2>Results:</h2>
          : <h2>{props.greeting} Products:</h2>
        }
        
    <div className="cont">
        
        
        <ItemList array={ data }/>
    </div>
    </>
  )
}

export default ItemListContainer