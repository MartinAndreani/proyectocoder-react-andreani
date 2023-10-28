import React from 'react'
import {FaCartShopping} from "react-icons/fa6"

const CartWidget = () => {
  return (
    <div >
      
        <button className='text-2xl'>
            <FaCartShopping/>
        </button>
        <span className='bg-blue-200 rounded-3xl '>5</span>
      
        
    </div>
  )
}

export default CartWidget