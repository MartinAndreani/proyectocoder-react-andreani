import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-screen'>
      <NavBar/>
      
        <ItemListContainer greeting={"Proximamente..."}/>

      
    </div>
    
  )
}

export default App