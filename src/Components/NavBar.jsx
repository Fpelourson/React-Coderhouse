import React from "react";
import CardWidget from "./CardWidget";
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="#FEEBC8">
      <Flex>
        <Button p='9' bg='none'>
          Dev Store
        </Button>
        <Spacer />

        <Menu>
          <MenuButton>
            Productos
          </MenuButton>
          <MenuList bg="#FEEBC8">
            <MenuItem bg="#FEEBC8">Hombres</MenuItem>
            <MenuItem bg="#FEEBC8">Mujeres</MenuItem>
          </MenuList>
        </Menu>

        <Spacer />

        <Box p="4">
          <CardWidget />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
