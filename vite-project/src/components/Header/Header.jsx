import { Button } from "@chakra-ui/button";
import { HStack, Heading, Spacer, } from "@chakra-ui/layout";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const Header = ({headerText}) => {
  return (
    <HStack w="container.md " mx="auto">
      <Heading textAlign="Center">{headerText}</Heading>
      <Spacer />
      <Button as={Link} to={`/${headerText}/add`} colorScheme="green">Add {headerText}</Button>
    </HStack>
  );
}

Header.proptypes ={};
export default Header;