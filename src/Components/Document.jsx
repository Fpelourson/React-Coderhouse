import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const Document = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "Computacion", `${id}`) ;
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const doc = snapshot.data()
                setProduct(doc)
            }
        })
    }, [])
  return (
    <ItemDetail oneItem={product}

    />
  )
}

export default Document

