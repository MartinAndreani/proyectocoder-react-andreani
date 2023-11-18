import React from 'react'
import CartWidget from './CartWidget';
import logo  from '../../assets/download-removebg-preview.png'
import {Link, } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <div className='shadow-2xl w-full   top-0 left-0 '>
      
      <div className='md:flex  items-center justify-around  bg-teal-200 py-2 px-2 h-full'>
      <Link to="/">
        <div className='font-bold text-3xl cursor-pointer flex items-center '>
          <span className='text-2xl  px-3'> 
            <img src={logo} alt="" className='md:w-16 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 rounded-xl'/>
          </span>
          
            <h1 className='text-indigo-600 font-serif'>Groove Music</h1>

          
        </div>
      </Link>


        <div className='md:flex justify-center items-center text-xl h-20 flex-nowrap'>
          <ul className='md:flex md:items-center gap-x-4  ' >
            <Link to={'/'}><li className='flex justify-center font-serif  items-center w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 rounded-xl ' >Home</li></Link>
            <Link to={'/category/cuerdas'} ><li className='flex justify-center font-serif items-center w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 rounded-xl '>Cuerdas</li> </Link>
            <Link to={'/category/teclados'} > <li className='flex justify-center font-serif items-center w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 rounded-xl '>Teclados</li> </Link>
            <Link to={'/category/audio-dj'} ><li className='flex justify-center font-serif items-center w-36 h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300 rounded-xl '>Audio DJ</li> </Link>
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