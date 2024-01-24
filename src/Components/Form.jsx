import React, { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Box, Center, Flex } from "@chakra-ui/layout";
import {
  Input,
  Button,

  AlertDialogFooter,
  AlertDialogBody,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialog,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CartContext from "../Context/CartContext";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("")
  const [orderId, setOrderId] = useState(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
  };


  
  const { products } = useContext(CartContext)

  const order = {
    cliente: { nombre, email, telefono },
    items: products,
  };

  const ordersCollection = collection(db, "orden");

  return (
    <Flex>
      <Box w={"50%"} marginTop={"5rem"} marginX={"auto"} borderRadius={"16px"}>
        <Text as="em" w={"100%"} m={"auto"} p={"20px"}>
          <Center fontWeight='semibold'>Para Finalizar, complete el Formulario</Center>
        </Text>

        <form action="" onSubmit={handleSubmit}>
          <Input
            required
            marginTop={"2rem"}
            type="text"
            placeholder="Nombre Completo"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          <Input
            required
            marginTop={"2rem"}
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            required
            marginTop={"2rem"}
            type="phone"
            placeholder="Telefono"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
          />
          <Button
            bg={"black"}
            color={"white"}
            colorScheme='blackAlpha'
            onClick={setIsOpen}
            marginTop={"2rem"}
            type="submit"
          >
            Enviar
          </Button>
        </form>
        



    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Completado!
            </AlertDialogHeader>

            <AlertDialogBody>
                {<Text as="em">Su numero de Orden es: {orderId}</Text>}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='yellow' onClick={onClose} ml={3}>
                Cerrar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
      </Box>
    </Flex>
    
  );
};

export default Form;
