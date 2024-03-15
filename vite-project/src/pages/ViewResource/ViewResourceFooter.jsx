import PropTypes from 'prop-types'
import { Box,Divider,HStack,Spacer,Button } from '@chakra-ui/react';
import { useResource } from '../../contexts/_useContexts';

const ViewResourceFooter = ({id}) =>{
    const {handleDeleteResources} = useResource();

    return(
    <>
        <Box w="full" my={8}>
        <Divider borderColor="grey.500" />
      </Box>
      {id !== "add" && ( // Conditionally rendering delete button
        <HStack>
          <Spacer />
          <Button colorScheme="red" onClick={handleDeleteResources}>
            Delete
          </Button>
        </HStack>
      )}
    </>
    );
}

ViewResourceFooter.propTypes={}

export default ViewResourceFooter;