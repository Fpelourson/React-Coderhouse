import { Button } from '@chakra-ui/react'
import { useState } from 'react'

const ItemCount = () => {

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
