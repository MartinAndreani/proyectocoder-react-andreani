import React from 'react'
import { useParams } from 'react-router-dom'
import instrumentos from "../../data/instrumentos.json"
import { useState,useEffect } from 'react'

import ItemList from './ItemList'

const ItemListContainer = () => {

    const [instrument,setInstrument] = useState([])
    const {category} = useParams()


  const getInstrument= new Promise((resolve,reject) =>{
    if (instrumentos.length > 0 ){
        setTimeout(()=>{
            resolve(instrumentos)
            
        },500)
    }else{
        reject("No se encontraro productos")
    }
  })
  
  useEffect(()=>{
    getInstrument
    .then((response) =>{
      if (category){
        const instFilter = response.filter((prod) => prod.category === category)
        if(instFilter.length> 0){
          setInstrument(instFilter)
        }else{
          setInstrument(response)
        }
      }else{
        setInstrument(response)

      }
    })
    .catch((error) =>console.log(error))
  },[category])
   
    

  return (
    <div>

      <ItemList instrument={instrument}/>
      
    </div>  
  )
}

export default ItemListContainer