import PropTypes from "prop-types";
import { Box, Divider, HStack, Spacer, Button } from "@chakra-ui/react";
import { useProject } from "../../contexts/_useContexts";

const ViewProjectFooter = ({ id }) => {
    const {handleDeleteProjects} = useProject();

  return (
    <>
      <Box w="full" my={8}>
        <Divider borderColor="grey.500" />
      </Box>
      {id !== "add" && ( // Conditionally rendering delete button
        <HStack>
          <Spacer />
          <Button colorScheme="red" onClick={handleDeleteProjects}>
            Delete
          </Button>
        </HStack>
      )}
    </>
  );
};

ViewProjectFooter.propTypes = {};

export default ViewProjectFooter;
