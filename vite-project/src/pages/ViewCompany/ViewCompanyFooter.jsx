import PropTypes from 'prop-types'
import { Box,Divider,HStack,Spacer,Button } from '@chakra-ui/react';
import { useCompany } from '../../contexts/_useContexts';

const ViewCompanyFooter = () =>{
    const {handleDeleteCompany,id} = useCompany();

    return (
        <>
        <Box w="full" my={8}>
          <Divider borderColor="grey.500" />
        </Box>

        {id !== "add" && ( // Conditionally rendering delete button
          <HStack>
            <Spacer />
            <Button colorScheme="red" onClick={handleDeleteCompany}>
              Delete
            </Button>
          </HStack>
        )}
        </>
    );
}

ViewCompanyFooter.propTypes={}

export default ViewCompanyFooter