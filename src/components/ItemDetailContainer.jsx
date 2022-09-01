import React, { useEffect, useState } from 'react'
import dataProd from './data/dataProd'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'
import fsDatabase from '../services/firebase'
import { getDoc, collection, doc } from 'firebase/firestore'
import { DotPulse } from '@uiball/loaders'

  function getItemById (id){
    return new Promise( (resolve) =>{
    const prodsCollection = collection(fsDatabase,'products')
    const docRef = doc(prodsCollection, id)

    getDoc(docRef).then(snapshot =>{
      resolve({...snapshot.data(), id: snapshot.id })
    })
    })
  }

function ItemDetailContainer() {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    getItemById(id).then((resp) =>{
          setData(resp)
      })
  }, [])
  
  if(data.length === 0){
    return(<DotPulse 
      size={85}
      speed={1.8} 
      color="grey" 
     />);
  }

  return (
    <div>

      <ItemDetail itemSelected={data}/>
  
    </div>
  )
}

export default ItemDetailContainer 

