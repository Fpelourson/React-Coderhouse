import Item from './Item' 

const ItemList = ({ products }) => {
  return (
    <>
    <div className='itemlist'>
      {products?.map((producto)=>{
            return(
                    <Item
                        key={producto.id}
                        Titulo = {producto.Titulo}
                        Categoria = {producto.category}
                        descripcion = {producto.descripcion}
                        Precio = {producto.Precio}
                        id = {producto.id}
                        Imagen= {producto.Imagen}
                    />
                  
            )
            
        })
        
      }
    </div>
    
    </>
  )
}

export default ItemList;
