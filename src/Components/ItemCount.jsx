import React from 'react'
import { useState } from "react"; 
import {Box, Center, Button} from '@chakra-ui/react';

const ItemCount = ({stock, initial=0, onAdd}) => {
    const [counter, setCounter]= useState(initial);
    return (
        <Center>
        <Box fontWeight='bold'>
        
            <Button bg={"#B93D3D"} color={"white"} _hover={"none"} size= 'xs' m='15px' onClick={()=>{setCounter(counter - 1)}} disabled={counter === initial}> - </Button>
            <span>{counter}</span>
            <Button bg={"#B93D3D"} color={"white"} _hover={"none"} size= 'xs' m='15px' onClick={()=>{setCounter(counter + 1)}} disabled={counter === stock}> + </Button>
            <Box m='auto'><Button bg={"#B93D3D"} color={"white"} _hover={"none"} size= 'xs' onClick={() => onAdd(counter)} disabled={counter === 0}>Agregar al carrito</Button></Box>
        
        </Box></Center>
    )

}


export default ItemCount