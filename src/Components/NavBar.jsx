import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { RiComputerFill } from "react-icons/ri";
import { Image } from '@chakra-ui/react'
import logo from "../assets/logo-dev.png"
import { AiFillCaretDown } from "react-icons/ai";


const NavBar = () => {
  return (
    <Box bg="black">
      <Flex>
        <Link to={"/"}>
          <Box paddingLeft="20px" m="10px" bg='none' display="flex" alignItems="center">
              <Image boxSize="70px" src={logo} alt="logo"/>
          </Box>
        </Link>

        <Spacer />

        <Menu>
          <MenuButton >
            <Text color="#B93D3D"  alignItems="center" display="flex" as="b">Ver Productos <Spacer p="5px"/> <AiFillCaretDown /></Text>
          </MenuButton>
          <MenuList bg="black">
            <Link to={'/category/Monitores'}>
              <MenuItem color="white" bg="black">Monitores</MenuItem>
            </Link>

            <Link to={'/category/Teclados'}>
              <MenuItem color="white" bg="black">Teclados</MenuItem>
            </Link>

            <Link to={'/category/Mouse'}>
              <MenuItem color="white" bg="black">Mouse</MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Spacer />

        <Link to={"/cart"}>
          <Box p="6">
            <CardWidget/>
          </Box>
        </Link>
        
      </Flex>
    </Box>
  );
};

export default NavBar;
