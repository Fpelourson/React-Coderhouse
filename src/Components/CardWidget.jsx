import React from 'react'
import {useContext} from 'react'
import {Button} from '@chakra-ui/react';
import {CartContext} from '../Context/CartContext';
import { MdOutlineLocalGroceryStore } from "react-icons/md";



const CartWidget = () => {

  const {items} = useContext(CartContext);

  return (

    <Button fontWeight='600' color='white' bg='black'>
    <MdOutlineLocalGroceryStore />
{!!items.length && <span>{items.reduce((pv, cv)=>pv + cv.quantity,0)}</span>}
  </Button>
  )
}



export default CartWidget