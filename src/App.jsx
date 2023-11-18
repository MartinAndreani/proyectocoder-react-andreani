import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

const App = () => {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route  path='/' element={<ItemListContainer/>} />
        <Route  path='category/:category' element={<ItemListContainer/>}/>
        <Route  path='item/:id' element={<ItemDetailContainer/>}/>
        <Route  path='*' element={<h1>404 NOT FOUNT</h1>}/>

      </Routes>
      </BrowserRouter>
     
      
      
      
      
      

      
      
    </div>
    
  )
}

export default App