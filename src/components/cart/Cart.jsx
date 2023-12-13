import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'



const Cart = () => {
    const {carrito, precioTotal, limpiar} = useContext( CartContext)

    if (carrito.length === 0){
        return (
            <div className='relative top-32' >
                <h1 className='text-2xl flex justify-center underline justify-items-center m-12' >NO HAY ELEMENTOS EN EL CARRITO</h1>
                <Link  className='flex justify-center' to={'/'}><button className='bg-indigo-300 w-32 h-12 text-2xl rounded-lg border-2  border-black-400 shadow-3xl  hover:-translate-y-1 hover:brightness-110 duration-300'>Volver</button></Link>
            </div>
        )
    }
  return (
    <div className='grid gap-4 p-4'>
        
            <h3 className='flex justify-end font-bold text-2xl'>
                Total: ${precioTotal()}
            </h3>

        <div className='grid grid-cols-6 gap-4 ' >
        <div className='flex justify-center font-bold'></div>
        <div className='flex justify-center font-bold'>Titulo</div>
        <div className='flex justify-center font-bold'>Cantidad</div>
        <div className='flex justify-center font-bold'>Precio</div>
        <div className='flex justify-center font-bold'>SubTotal</div>
        <div className='flex justify-center font-bold'>Borrar</div>
      </div>
        {
            carrito.map(inst => <ItemCart key={inst.id} inst={inst} />)
        }
        <div className=''>
            <div className='flex justify-start'>
            <button className='bg-gray-300 px-4 py-2  rounded-lg border-2  border-black-400 shadow-3xl  hover:-translate-y-1 hover:brightness-110 duration-300' onClick={() => limpiar()}>Limpiar Carrito</button>

            </div>
            <div className='flex justify-center relative bottom-12 h-4'>
                <Link  to='/checkout'><button className=' bg-purple-400 px-8 py-2 font-bold rounded-lg  border-2  border-black-400 shadow-3xl  hover:-translate-y-1 hover:brightness-110 duration-300'>FINALIZAR COMPRA</button></Link>
            </div>
            
        </div>
        <div>
            
        </div>
        
    </div>
  )
}

export default Cart