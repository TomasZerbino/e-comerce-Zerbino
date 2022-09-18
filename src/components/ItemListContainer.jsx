import React, { useEffect, useState } from 'react'
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import fsDatabase from '../services/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { DotPulse } from '@uiball/loaders'

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

  if(data.length === 0){
    return(
    <div className='loader'>
      <DotPulse 
      size={85}
      speed={1.8} 
      color="grey" 
     /></div>);
  }

    return (
      <>
        {
          (category)?<h2 className='prodTitle'>Results:</h2>
          : <h2 className='prodTitle'>{props.greeting} Products:</h2>
        }
        
    <div className="cont">
        <ItemList array={ data }/>
    </div>
    </>
  )
}

export default ItemListContainer
