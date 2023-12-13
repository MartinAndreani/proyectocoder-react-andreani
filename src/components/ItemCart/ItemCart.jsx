import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { FaXmark } from "react-icons/fa6"

const ItemCart = ({inst}) => {

    const { borrar } = useContext(CartContext)
  return (
    <div >

      <div className='bg-indigo-300 grid grid-cols-6 rounded-lg border-2  border-black-400 shadow-3xl  hover:-translate-y-1 hover:brightness-110 duration-300 '>
        <div className='p-2 flex justify-center'><img className='h-32 rounded-lg'  src={inst.image} alt="" /></div>
        <div className='p-2 flex justify-center self-center text-xl'>{inst.title}</div>
        <div className='p-2 flex justify-center self-center text-xl'>{inst.cantidad}</div>
        <div className='p-2 flex justify-center self-center text-xl'>{inst.price}</div>
        <div className='p-2 flex justify-center self-center text-xl'>{inst.price * inst.cantidad}</div>
        <div className='p-2 flex justify-center self-center text-xl'><button className='bg-red-400 h-8 w-8 rounded-md flex justify-center ' onClick={p => borrar(inst.id)}><FaXmark className='flex self-center'/></button></div>
        
      </div>
    </div>
  )
}

export default ItemCart