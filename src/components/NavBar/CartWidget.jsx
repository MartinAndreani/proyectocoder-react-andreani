import React from 'react'
import {FaCartShopping} from "react-icons/fa6"
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantProductos } = useContext(CartContext)
  ;
  if(cantProductos() == 0){
    return (
      <>
      <Link to={'/cart'} className='flex row'>
            <FaCartShopping className=' text-4xl hover:brightness-110 duration-300 '/>

        </Link>
      </>
      
    )
    
  }
  return (
    <div  >
      
        <Link to={'/cart'} className='flex row'>
            <FaCartShopping className=' text-4xl '/>
            <span className='bg-red-400 rounded-2xl relative right-3 bottom-2 flex justify-center h-6 w-6 ' >{cantProductos() || ''}</span>

        </Link>


      
        
    </div>
  )
}

export default CartWidget