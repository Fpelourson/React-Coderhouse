import React from 'react'
import { createContext, useState } from "react";


export const CartContext = createContext(null);


export const CartProvider =({ children }) => {

    const [cart, setCart] = useState([])


    

    return(
        <CartContext.Provider value={{ cart,setCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider