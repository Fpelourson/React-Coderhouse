import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {

  const { categoryId } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();

      const itemsCollection = collection(db, "Computacion")
      try {
        const snapshot = await getDocs(itemsCollection);
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setProducts(docs)
      } catch (error) {
        console.log("Error", error)
      }
    }
    fetchData()
  }, [])



    const productosFiltrados = products.filter((producto) => producto.categoria === categoryId)
    console.log(productosFiltrados)
    return (
      <div>
      {
        categoryId ? <ItemList products={productosFiltrados}/> : <ItemList products={products}/>
      }
      </div>
    )
};

export default ItemListContainer;
