import React from 'react'
import logo from "../assets/download-removebg-preview.png"

const ItemListContainer = ({greeting}) => {
  return (
    <div className=' text-center font-mono text-4xl h-screen fixed w-full flex items-center justify-center animate-pulse  '>
      <img src={logo} alt=""  />
      {greeting}

      
      
    </div>  
  )
}

export default ItemListContainer