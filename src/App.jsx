import "./index.css";
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/NavBar"
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Components/Cart'
import { useState, useEffect } from "react";
import Loader from "./Components/Loader";

import { CartProvider } from './Context/CartContext';
import Collection from "./Components/Collection";
import Document from "./Components/Document";





function App () {
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  },[])

  if(loading){
    return <Loader/>
  }
  return (

    // <Collection/>
    // <Document/>

    <BrowserRouter>
      <CartProvider>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      
      
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
