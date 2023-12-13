import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext,useState } from 'react'
import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'

const ItemDetail = ({id, title, price, description,image,stock}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState(0)

  const { agregar } = useContext(CartContext)


  
  
  const handleOnAdd = (cantidad) => {
    
      setCantidadAgregada(cantidad)
      const item ={
        id,
        title,
        image,
        price,
        stock,
        cantidad
      }
      
      agregar(item ,cantidad)
  

  }

  return (
    <div className='flex justify-center w-1/3' >
       <div className= 'w-10/12 bg-blue-100 border-2  border-black-400 shadow-3xl rounded-xl '>
        <div className="max-w-sm rounded overflow-hidden shadow-xl">
          <img className="w-full shadow-xl h-64 rounded-md " src={image} alt="Imagen" />
          <div className="px-6 py-2">
            <div className="font-bold font-serif text-xl mb-2">{title}</div>
            <div className='text-sm my-3 font-serif'>{description}</div>
            <div className="text-gray-700 font-mono text-base">Stock Disponible: {stock}</div>
            <div className="flex justify-end font-serif font-bold text-xl"><h3>${price}</h3></div>
          </div>
          <div className="px-6 pt-4 pb-2 flex justify-center ">
            {
              cantidadAgregada > 0 ?(
                
                <Link className='text-lg border-2 bg-green-300 rounded-lg px-5 py-1'  to='/cart'>Terminar Compra</Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
            }
          </div>
      </div>

      </div>

    </div>
  )
}

export default ItemDetail