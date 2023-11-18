import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({id,title,image,price,stock}) => {


  return (
    <div className='flex justify-center' >
      <div className= '  w-4/5 bg-blue-400 border-2  border-black-400 shadow-3xl rounded-xl hover:-translate-y-1 hover:scale-110 duration-300'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-48 rounded-md " src={image} alt="Imagen" />
          <div className="px-6 py-2">
            <div className="font-bold font-serif text-xl mb-2">{title}</div>
            <div className="text-gray-700 font-mono text-base">Stock Disponible: {stock}</div>
            <div className="flex justify-end font-serif font-bold text-xl"><h3>${price}</h3></div>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-center">
            <Link to={`/item/${id}`}><button className='bg-indigo-200 h-8 font-serif w-32 rounded-xl hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-teal-200'>Ver Detalle</button></Link>
          </div>
      </div>

      </div>
      
    </div>
  )
}

export default Item