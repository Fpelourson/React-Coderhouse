import { useEffect, useState } from 'react'
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
            <h2>{p.Titulo}</h2>
            <h3>{p.Precio}</h3>
            <div>{p.Imagen}</div>
          </div>
          
        ))
      }
    </div>
    
  )
}

export default Collection
