import { Card, Image, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


const Item = ({ id, Titulo, Imagen }) => {
  
  return (
  <div key={id}>
    <Card maxW="sm">
      <CardBody>
        <Stack>
          <Heading size="sm" m="auto">{Titulo}</Heading>
        </Stack>
        <Image src={Imagen} alt='imagen' maxW="250px" maxH="250px"/>
          
      </CardBody>
      <Divider />
      <CardFooter m={"auto"}>
        <ButtonGroup spacing="2">
          <Button colorScheme='blackAlpha' bg={"black"} color={"white"}>
            <Link to={`/producto/${id}`}>
              Ver Detalle
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  </div>
    
  );
};

export default Item;
