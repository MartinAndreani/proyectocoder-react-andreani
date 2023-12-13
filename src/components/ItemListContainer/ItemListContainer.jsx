import React from 'react'
import { useParams } from 'react-router-dom'

import { useState,useEffect } from 'react'
import ItemList from './ItemList'
import {getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = () => {

    const [instrument,setInstrument] = useState([])
    const { category } = useParams()


  useEffect(()=>{
    const instrumentRef = collection(db,"instrumentos")
    const busqueda = category ? query(instrumentRef, where("category", "==" ,category)):instrumentRef
    
    getDocs(busqueda)
      .then((resp)=>{
      
      setInstrument(
        resp.docs.map((doc)=>{
          return {...doc.data(),id: doc.id}
        })
      );
      
    })
    
  },[category])
   
    

  return (
    <div>
      
      <ItemList instrument={instrument}/>
      
    </div>  
  )
}

export default ItemListContainer