import "./index.css";
import ItemListContainer from "./Components/ItemListContainer"
import NavBar from "./Components/NavBar"
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './Components/Cart'




function App () {
  return (

    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>

      </Routes>
      
      
    </BrowserRouter>
  )
}

export default App
