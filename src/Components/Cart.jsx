import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Button, Box, Center, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Cart = () => {

  const { items, removeItem, clear } = useContext(CartContext)



  return (
    <div>
      <Flex >
        <Box m='auto'>
        {!items.length ? <h2> Sin items <Link to="/"><Button> Ir al inicio</Button></Link></h2>:
            <>
            <ol>
                {items.map(((item, indx) => <li key={indx}>{item.title} - {item.quantity} <Button onClick={()=> removeItem(item.id)}>Remover</Button></li>))}
            </ol>
            <h3>precio total = ${items.reduce((pv, cv) => pv + (cv.precio * cv.quantity), 0)}</h3>
            </>
        }
            <div>
                <Button onClick={clear}>Limpiar carrito</Button>
            </div>
        </Box>

        </Flex>
    </div>
  )
}

export default Cart
