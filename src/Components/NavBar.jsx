import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Text } from "@chakra-ui/react";
import { RiComputerFill } from "react-icons/ri";


const NavBar = () => {
  return (
    <Box bg="#B4B4B4">
      <Flex>
        <Link to={"/"}>
          <Box p='9' bg='none' display="flex" alignItems="center">
              <RiComputerFill />Dev Store
          </Box>
        </Link>

        <Spacer />

        <Menu>
          <MenuButton >
            <Text as="b">Productos</Text>
          </MenuButton>
          <MenuList bg="#B4B4B4">
            <Link to={'/category/Monitores'}>
              <MenuItem bg="#B4B4B4">Monitores</MenuItem>
            </Link>

            <Link to={'/category/Teclados'}>
              <MenuItem bg="#B4B4B4">Teclados</MenuItem>
            </Link>

            <Link to={'/category/Mouse'}>
              <MenuItem bg="#B4B4B4">Mouse</MenuItem>
            </Link>
          </MenuList>
        </Menu>

        <Spacer />

        <Link to={"/cart"}>
          <Box p="6">
            <CardWidget />
          </Box>
        </Link>
        
      </Flex>
    </Box>
  );
};

export default NavBar;
