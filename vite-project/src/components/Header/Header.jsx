import { Button } from "@chakra-ui/button";
import { HStack, Heading, Spacer, } from "@chakra-ui/layout";
import PropTypes from "prop-types"

const Header = ({headerText, isAdding = false, toggle}) => {
  return (
    <HStack w="container.xl " mx="auto">
      <Heading textAlign="Center">{headerText}</Heading>
      <Spacer />
      {!isAdding && <Button colorScheme="green" onClick={toggle}>Add {headerText}</Button>}
    </HStack>
  );
}

Header.proptypes ={isAdding:PropTypes.bool, toggle:PropTypes.func};
export default Header;