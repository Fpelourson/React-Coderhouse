import React from 'react'
import {useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider= ({children}) =>{
    const [products, setProducts] = useState([])


    const addItem =(producto, quantity) => {
        console.log({ ...producto, quantity });
        if (isInCart(producto)) {
            let aux = products;
            let itemIndex = aux.findIndex((producto) => producto.id === producto.id);
            aux[itemIndex].quantity += quantity;
            setProducts([...aux]);
        } else {
            setProducts([...products, { ...producto, quantity }]);
        }
    }
    const removeItem = (item) => {
        setProducts(products.filter((producto) => producto.id != item));
    }
    

    const clear =() =>{
        setProducts([]);
    }

    const isInCart =(item) => {
        return products.find((producto) => producto.id == item);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, products, clear, isInCart, children }}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContext