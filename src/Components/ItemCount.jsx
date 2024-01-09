import { Button } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'

const ItemCount = () => {

    // const [cart, setCart] = useContext(CartContext)

    // const addToCart = () => {
    //     setCart((currItems) => {
    //         const isItemsFound = currItems.find((item) => item.id === id);
    //         if (isItemsFound) {
    //             return currItems.map((item) => {
    //                 if (item.id === id) {
    //                     return {...item, quantity: item.quantity + 1 };
    //                 } else {
    //                     return item;
    //                 }
    //             });
    //         } else {
    //             return [...currItems, { id, quantity: 1, price }];
    //         }
    //     })
    // }

    const sumar = () => {
        if(contador < 10){
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    const [contador, setContador] = useState(0)
    return (
    <div className='count'>
        <Button colorScheme='teal' size= 'xs' onClick={restar}>
        -
        </Button>

        <Button size= 'xs'>
            Agregar al carrito {contador}
        </Button>

        <Button colorScheme='teal' size= 'xs' onClick={sumar}>
        +
        </Button>
    </div>
    )
}

export default ItemCount
