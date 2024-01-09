import React from 'react'
import Item from './Item'

const ItemList = ( {productos} ) => {
  return (
    <div className='itemlist'>
      {
        productos.map((p)=>{
            return(
                    
                    <Item
                        key={p.id}
                        titulo = {p.titulo}
                        descripcion = {p.descripcion}
                        precio = {p.precio}
                        id = {p.id}
                        imagen= {p.imagen}
                    />
            )
            
        })
        
      }
    </div>
    
    
  )
}

export default React.memo(ItemList)
