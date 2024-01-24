import ItemDetail from "./ItemDetail";
import { useEffect, useState } from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const db = getFirestore()
    const oneItem = collection(db, "Computacion") ;
    getDocs(oneItem).then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setData(products)
    })
}, [])
return (
  <ItemDetail products={data}/>
)
};

export default ItemDetailContainer;
