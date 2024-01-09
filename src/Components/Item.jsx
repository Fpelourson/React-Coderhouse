import { Card, Image, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom';



const Item = ({ id, titulo, imagen }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Stack>
          <Heading size="sm" m="auto">{titulo}</Heading>
        </Stack>
        <Image src={imagen} alt='imagen' maxW="250px" maxH="250px"/>
          
      </CardBody>
      <Divider />
      <CardFooter m={"auto"}>
        <ButtonGroup spacing="2">
          <Button>
            <Link to={`/producto/${id}`}>
              Ver Detalle
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    
  );
};

export default Item;
