import { useEffect, useState } from 'react'
//ItemListContainer
import {collection, getDocs, getFirestore} from "firebase/firestore"

const Collection = () => {
    const [products, setProducts] = useState([])

  useEffect(() => {

    const db = getFirestore()

    const itemsCollection = collection(db, "Computacion")
    
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data())
      setProducts(docs)
    })

    },[])

  return (
    <div>
      {
        products.map((p) => (
          <div key={p.nombre}>
            <h2>{p.nombre}</h2>
            <h3>{p.precio}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Collection
