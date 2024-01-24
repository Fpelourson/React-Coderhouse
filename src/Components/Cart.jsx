import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import {
  Button,
  Box,
  Flex,
  Heading,
  Stack,
  CardBody,
  StackDivider,
  CardHeader,
  Card,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, removeItem, clear } = useContext(CartContext);

  return (
    <div>
      <Flex>
        <Card margin={"auto"}>
          <CardHeader margin={"auto"}>
            <Heading size="md">Resumen de compra</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading m={"1.6rem"} size="xs" textTransform="uppercase">
                  {products.map((producto, indx) => (
                    <Flex alignItems={"center"} p={"1rem"} key={indx}>
                      <Box marginRight={"1rem"} boxSize={"32px"}>
                        <Image
                          src={producto.Imagen}
                          alt="imagen"
                        />
                      </Box>
                      {producto.Titulo} - Cantidad: {producto.quantity}{" "}
                      <Button
                        borderRadius={"50%"}
                        bg={"#B93D3D"}
                        marginLeft={"1rem"}
                        size={"sm"}
                        onClick={() => removeItem(producto.id)}
                      >
                        X
                      </Button>
                    </Flex>
                  ))}
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" marginTop={"5rem"}>
                  <Text>
                    precio total = $
                    {products.reduce(
                      (pv, cv) => pv + cv.Precio * cv.quantity,
                      0
                    )}
                  </Text>
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase" marginTop={"1rem"}>
                  <Button color={"white"} bg={"#B93D3D"} onClick={clear}>Limpiar carrito</Button>
                  <Link to={"/orden"}>
                    <Button color={"white"} marginLeft={"2rem"} bg={"#B93D3D"}> Confirmar</Button>
                  </Link>
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
};

export default Cart;
