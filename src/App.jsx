import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route  path='/' element={<ItemListContainer/>} />
            <Route  path='category/:category' element={<ItemListContainer/>}/>
            <Route  path='item/:id' element={<ItemDetailContainer />}/>
            <Route  path='/cart' element={<Cart/>}/>
            <Route  path='/checkout' element={<Checkout/>}/>
            <Route  path='*' element={<h1>404 NOT FOUNT</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>

      
    </div>
    
  )
}

export default App