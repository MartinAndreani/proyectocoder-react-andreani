import React from 'react'
import {useContext,useState} from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import {collection, addDoc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import Swal from 'sweetalert2'


const Checkout = () => {
  
    const [ordenId,setOrdenId] = useState('')
    const {carrito,precioTotal,limpiar} = useContext(CartContext)
    const {register,handleSubmit} = useForm()

    const comprar = (data) =>{
        const orden ={
            cliente: data,
            item: carrito,
            total: precioTotal()
        }
       ;
    if( data.title == '' || data.email == '' || data.email2 == '' || data.telefono == ''){
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "DEBE COMPLREAR TODOS LOS CAMPOS",
            
          });
    }else{
        if(data.email == data.email2){
            const ordenesRef = collection(db,"ordenes")
            addDoc(ordenesRef,orden)
                .then((doc) =>{
                    setOrdenId(doc.id);
                    limpiar()
                    
                    
        })
        }else{
            Swal.fire({
                icon: "error",
                title: "ERROR",
                text: "DEBE COINCIDIR  LOS MAILS",
                timer: 1500
              });
        }
        
    }
    }
        

    if(ordenId){
        
        Swal.fire({
            position: "center",
            icon: "success",
            title: "COMPRA FINALIZADA",
            text: `TU NUMERO DE PEDIDO ES: ${ordenId}`,
            showConfirmButton: false,
            footer: '<a href="/"><button >OK</button></a>'
          });
    }

    return (
    <div className='m-12'>
        <h1 className='text-2xl flex justify-center m-5'>Finalizar Compra</h1>
        <hr />
        <form className='grid grid-flow-row gap-1 justify-center m-4 bg-indigo-300 rounded-lg w-8/12 relative left-32 ' onSubmit={handleSubmit(comprar)}>
            <input className='w-96 border-indigo-400 border-2 rounded-md h-10 m-2' type="text" placeholder='Nombre y Apellido' {...register("nombre")}/>
            <input className='w-96 border-indigo-400 border-2 rounded-md h-10 m-2' type="email" placeholder='Email' {...register("email")}/>
            <input className='w-96 border-indigo-400 border-2 rounded-md h-10 m-2' type="email" placeholder='Email Confirm' {...register("email2")}/>
            <input className='w-96 border-indigo-400 border-2 rounded-md h-10 m-2' type="phone" placeholder='Telefono' {...register("telefono")}/>
            <button className='relative left-32 w-32 bg-green-300 border-2  border-black-400 shadow-3xl  hover:-translate-y-1 hover:brightness-110 duration-300 rounded-md h-8 m-4' type='submit'>Comprar</button>
            
        </form>
    </div>
  )
}

export default Checkout