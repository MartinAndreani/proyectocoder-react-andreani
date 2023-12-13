import React, { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
const ItemDetailContainer = () => {

    const [instrument,setInstrument] = useState([])
    const { id } = useParams()
     

    useEffect(()=>{
        const docRef = doc(db,"instrumentos",id)
        getDoc(docRef)
        .then((resp) =>{
            setInstrument(
                {...resp.data(),id: resp.id}
            )
        })
        
        
        
    },[id])
    ;
    

  return (
    <div className='flex justify-center py-5'>
        <ItemDetail  {...instrument}/>
    </div>
  )
}

export default ItemDetailContainer