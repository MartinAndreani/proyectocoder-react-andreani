import React, { useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import instrumentos from "../../data/instrumentos.json"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [instrument,setInstrument] = useState(null)
    const { id } = useParams()

    
    const getInstrumentById =(id)=>{
        return new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(instrumentos.find(p => p.id == id))
            },500)
        })
    }
    
    useEffect(()=>{
        getInstrumentById(id)
        
            .then(response =>{
                console.log(response);
                setInstrument(response)
                

        })
        .catch(error =>{
            console.log(error);
        })
        console.log(id);
    }, [id] )
 
  return (
    <div className='flex justify-center py-5'>
        <ItemDetail {...instrument}/>
    </div>
  )
}

export default ItemDetailContainer