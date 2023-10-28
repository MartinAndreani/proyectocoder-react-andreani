import React from 'react'
import CartWidget from './CartWidget';
import logo from "../assets/download-removebg-preview.png"

const NavBar = () => {
  return (
    
    <div className='shadow-2xl w-full  top-0 left-0 '>
      
      <div className='md:flex  items-center justify-around  bg-slate-200 py-2 px-2 h-full'>
        
        <div className='font-bold text-3xl cursor-pointer flex items-center '>
          <span className='text-2xl  px-3'> 
            <img src={logo} alt="" className='md:w-16 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300 rounded-xl'/>
          </span>
          <h1 className='text-indigo-600 font-serif'>Groove Music</h1>
          
        </div>

        <div className='md:flex justify-center items-center text-xl h-20 flex-nowrap'>
          <ul className='md:flex md:items-center gap-x-4  ' >
            <li className='w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300 rounded-xl ' ><a className='flex justify-center py-1' href="#">Home</a></li>
            <li className='w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300 rounded-xl '> <a className='flex justify-center py-1   ' href="#">Instumentos</a></li>
            <li className='w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300 rounded-xl '><a className='flex justify-center py-1'href="#">Discos</a></li>
            <li className='w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300 rounded-xl '><a className='flex justify-center py-1' href="#">Marcas</a></li>
          </ul> 
        </div>
          
        <div className='md-flex'>
          <CartWidget/>
        </div>
        
      </div>
      
      
      
    </div>
  )
}

export default NavBar