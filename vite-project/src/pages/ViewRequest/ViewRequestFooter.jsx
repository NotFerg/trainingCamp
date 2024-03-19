import PropTypes from 'prop-types'
import { Box,Divider,HStack,Spacer,Button } from '@chakra-ui/react';
import { useRequest } from '../../contexts/_useContexts';

const ViewRequestFooter = () =>{
    const {handleDeleteRequest,id} = useRequest();

    return (
        <>
        <Box w="full" my={8}>
          <Divider borderColor="grey.500" />
        </Box>

        {id !== "add" && ( // Conditionally rendering delete button
          <HStack>
            <Spacer />
            <Button colorScheme="red" onClick={handleDeleteRequest}>
              Delete
            </Button>
          </HStack>
        )}
        </>
    );
}

ViewRequestFooter.propTypes={}

export default ViewRequestFooter