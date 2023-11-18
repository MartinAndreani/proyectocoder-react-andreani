import React from 'react'
import Item from './Item'


const ItemList = ( {instrument} ) => {
  return (
    <div  className="grid grid-cols-3  justify-center  gap-7 my-12  ">
      {instrument.map(p => <Item key={p.id} {...p}/>)}
    </div>
  )
}

export default ItemList