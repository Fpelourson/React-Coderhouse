import { Button, Flex } from "@chakra-ui/react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const CardWidget = () => {
  return (
    <div>
      <Flex>
        <Button color="#B93D3D" bg='none'>
          <MdOutlineLocalGroceryStore />1
        </Button>
      </Flex>
    </div>
  );
};

export default CardWidget;
