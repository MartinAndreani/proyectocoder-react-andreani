import {createContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export const CartContext = createContext({
    carrito: []
})


    
export const CartProvider = ({ children }) =>{
    const [carrito, setCarrito] = useState([])
    console.log(carrito)
    
    
    const agregar =(item,cantidad)=>{
        
        if(estaEnCarrito(item.id)  ){
            const newCantidad = carrito.find(p => p.id === item.id)
            
            if(newCantidad.cantidad + item.cantidad <= item.stock){
                setCarrito(carrito.map(inst =>{
                    return inst.id === item.id ? {...inst, cantidad:inst.cantidad + cantidad}:inst
                }))
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Nos Quedamos Sin Stock",
                    text: "Te pedimos disculpas por las molestias ocacionadas",
                    
                  });}
            
        }else{
            setCarrito([...carrito,{...item,cantidad}])
        }
    }


    const estaEnCarrito = (id) => carrito.find(inst => inst.id === id) ;

    const limpiar =() => setCarrito([])

    const borrar =(id) => setCarrito(carrito.filter(inst => inst.id !== id))

    const precioTotal = () =>{
        return carrito.reduce((total, inst) => total + inst.cantidad * inst.price,0)
    }

    const cantProductos = () => carrito.reduce((acum, actual) => acum + actual.cantidad,0)

    return(
        <CartContext.Provider value={{carrito,agregar,estaEnCarrito,limpiar,borrar,precioTotal,cantProductos}}>
            {children}
        </CartContext.Provider>
    )
}