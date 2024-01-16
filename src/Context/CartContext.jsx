import React from 'react'
import {useState, createContext, children} from 'react';

export const CartContext = createContext();

export const CartProvider= ({children}) =>{
    const [items, setItems] = useState([]);


    const addItem =(producto, quantity) => {
        console.log({ ...producto, quantity });
        if (isInCart(producto.id)) {
            let aux = items;
            let itemIndex = aux.findIndex((producto) => producto.id === producto.id);
            console.log(`Mi index es ${itemIndex}`);
            aux[itemIndex].quantity += quantity;
            setItems([...aux]);
        } else {
            setItems([...items, { ...producto, quantity }]);
        }
    }
    const removeItem = (itemId) => {
        setItems(items.filter((element) => element.id != itemId));
    }

    const clear =() =>{
        setItems([]);
    }

    const isInCart =(itemId) => {
        return items.find((element) => element.id == itemId);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, items, clear, isInCart, children }}>
            {children}
        </CartContext.Provider>
    )

}


export default CartContext