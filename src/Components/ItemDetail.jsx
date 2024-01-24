import { Card, Image,Button, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup} from '@chakra-ui/react'
import {  useState, useEffect, useContext } from 'react';
import ItemCount from './ItemCount';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetail = ({ products }) => {

  const [counter, setCounter] = useState(0);
  const {addItem}= useContext(CartContext);

  const onAdd = (count) => {
    setCounter(count)
    addItem(produto, count);
  }
    const { id } = useParams();
    const [produto, setProducto] = useState([]);

    useEffect(() => {
      const db = getFirestore()
      const productRef = doc(db, "Computacion", `${id}` )

      getDoc(productRef).then((snapshot) => {
        if(snapshot.exists()) {
          setProducto(snapshot.data())
        }else{
          console.log("no hay");
        }
      });
    },[]);
    
    const productFilter = products.filter((producto) => producto.id == id)

  return (
    <>
    {productFilter.map((producto) =>
    
    <div key={producto.id}>
      <Card maxW="25rem" m={"auto"}> 
      <CardBody>
      <Image w={"100%"} src={producto.Imagen} alt='imagen' />
        <Stack mt="6" spacing="3">
          <Heading size="md" m={"auto"}>{producto.Titulo}</Heading>
          <Text m={"auto"}>
            {producto.descripcion}
          </Text>
          <Text fontWeight='semibold' color="red" fontSize="30px" m="auto">
            ${producto.Precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter m={"auto"}>
        <ButtonGroup>
          <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </ButtonGroup>
      </CardFooter>
      <Button>
        {counter !== 0 && <Link to="/Cart"><>Finalizar compra</></Link>}
      </Button>
    </Card>
    </div>
    )}
    </>
    
  );
};

export default ItemDetail;
