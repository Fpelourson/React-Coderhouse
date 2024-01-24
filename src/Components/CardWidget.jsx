import {useContext} from 'react'
import {Button} from '@chakra-ui/react';
import {CartContext} from '../Context/CartContext';
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const CartWidget = () => {

  const {products} = useContext(CartContext);

  return (

    <Button borderRadius={"50%"} fontWeight='600' color='white' bg='black'>
    <MdOutlineLocalGroceryStore />
{!!products.length && <span>{products.reduce((pv, cv)=>pv + cv.quantity,0)}</span>}
  </Button>
  )
}



export default CartWidget