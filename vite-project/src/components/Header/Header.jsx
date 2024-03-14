import { Button } from "@chakra-ui/button";
import { HStack, Heading, Spacer } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mockApi from "../../utils/mockApi";

const Header = ({ headerText, headerLink }) => {
  const navigate = useNavigate();

  function handleClick() {
    mockApi("POST", "/reset-data");
    navigate(`/${headerText.toLowerCase()}`);
  }

  return (
    <HStack
      w="full"
      maxW="container.md"
      mx="auto"
      flexDirection={{ base: "column", md: "row" }}
      alignItems={{ base: "flex-start", md: "center" }}
      py={3}
    >
      <Heading size="lg" textAlign="Center">
        {headerText}
      </Heading>
      <Spacer />
      <Button onClick={handleClick}  w={["full","full","fit-content"]}>
        Reset Data
      </Button>
      <Button as={Link} to={`/${headerLink}/add`} colorScheme="green" w={["full","full","fit-content"]}>
        Add {headerText}
      </Button>
    </HStack>
  );
};

Header.proptypes = {};
export default Header;
