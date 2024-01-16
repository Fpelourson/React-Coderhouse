import { Card, Image,Button, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup} from '@chakra-ui/react'
import {  useState, useContext } from 'react';
import ItemCount from './ItemCount';
import CartContext from '../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

  const {id, precio, titulo, imagen} = producto;
  const [counter, setCounter] = useState(0);

  const {addItem}= useContext(CartContext);

  const onAdd = (count) => {
    setCounter(count)
    addItem(producto, count);
    
  }
  return (
    <Card maxW="sm" m={"auto"}>
      <CardBody>
      <Image src={producto.imagen} alt='imagen' />
        <Stack mt="6" spacing="3">
          <Heading size="md" m={"auto"}>{producto.titulo}</Heading>
          <Text m={"auto"}>
            {producto.descripcion}
          </Text>
          <Text color="red" fontSize="30px" m="auto">
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter m={"auto"}>
        <ButtonGroup>
          <ItemCount onAdd={onAdd}/>
        </ButtonGroup>
      </CardFooter>
      <Button>
        {counter !== 0 && <Link to="/Cart"><>Finalizar compra</></Link>}
      </Button>
    </Card>
    
  );
};

export default ItemDetail;
