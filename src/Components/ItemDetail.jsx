import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {

    
    

  return (
    <Card maxW="sm" m={"auto"}>
      <CardBody>
      <Image src={producto.imagen} alt='imagen' />
        <Stack mt="6" spacing="3">
          <Heading size="md" m={"auto"}>{producto.titulo}</Heading>
          <Text m={"auto"}>
            {producto.descripcion}
          </Text>
          <Text color="blue.600" fontSize="2xl" m={"auto"}>
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter m={"auto"}>
        <ButtonGroup>
          <ItemCount/>
        </ButtonGroup>
      </CardFooter>
    </Card>
    
  );
};

export default ItemDetail;
