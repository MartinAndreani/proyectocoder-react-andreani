import { useState } from "react";

const ItemCount = ({stock,initial,onAdd})=>{
    const [cant, setCant] = useState(initial)

    const increment = () =>{
        if (cant < stock){
            setCant(cant + 1)
        }
    }
    const decrement = () =>{
        if (cant > 1) {
            setCant(cant -1)
        }
    }

    

    return(
        <div>
            <div className="flex justify-center py-2">
                <button className="bg-green-200 h-8 w-8" onClick={decrement}>-</button>
                <h4 className="w-12 flex justify-center">{cant}</h4>
                <button className="bg-red-200 h-8 w-8" onClick={increment}>+</button>
            </div>
            <div className="flex justify-center items-center  rounded-xl  py-6 bg-blue-300 w-48 h-12 hover:-translate-y-1 hover:scale-110 duration-300" >
                <button  onClick={()=> onAdd(cant)} disabled={!stock}  >Agregar al carrito</button>
                
            </div>
        </div>
    )
}
export default ItemCount