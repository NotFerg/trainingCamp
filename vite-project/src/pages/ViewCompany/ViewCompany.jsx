import { useParams, useNavigate } from "react-router-dom";
import CompaniesForm from "../../forms/CompaniesForm/CompaniesForm";
import mockApi from "../../utils/mockApi";
import {Stack,Card,CardBody,Box,Divider,HStack,Spacer,Button,} from "@chakra-ui/react";

const ViewCompany = () =>{
    const navigate = useNavigate();
    const {id ="add"} = useParams();

    const handleAddResources = (data) => {
        let method = "POST";
        let endpoint = "/companies";
    
        if (data?.id > -1) {
          method = "PUT";
          endpoint = `/companies/${data?.id}`;
        }
    
        const requestData = mockApi(method, endpoint, data);
        const { status = false  } = requestData; //data: newData = {}
        
        if(status && !data?.id > -1){
            // navigate(`/resource/${newData?.id}`);
            navigate(`/companies`);
        }
      };
    
      const handleDeleteResources = () => {
        mockApi("DELETE", `/companies/${id}`);
        navigate("/companies");
      };
    
      const handleCancel = () => {
        navigate("/companies");
      };

    return(<Stack w="container.md" mx="auto">
    <Card>
      <CardBody>
        <CompaniesForm
          id={id}
          onAdd={handleAddResources}
          onCancel={handleCancel}
        />
      </CardBody>
    </Card>
    <Box w="full" my={8}>
      <Divider borderColor="grey.500" />
    </Box>
    <HStack>
      <Spacer />
      <Button colorScheme="red" onClick={handleDeleteResources}>Delete</Button>
    </HStack>
  </Stack>);
}

ViewCompany.propTypes = {};

export default ViewCompany;