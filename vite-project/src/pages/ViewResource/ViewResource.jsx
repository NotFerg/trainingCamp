import { useParams, useNavigate } from "react-router-dom";
import ResourcesForm from "../../forms/ResourcesForm/ResourcesForm";
import mockApi from "../../utils/mockApi";
import {Stack,Card,CardBody,Box,Divider,HStack,Spacer,Button,} from "@chakra-ui/react";

const ViewResource = () => {
  const navigate = useNavigate();
  const { id = "add" } = useParams();

  const handleAddResources = (data) => {
    let method = "POST";
    let endpoint = "/resources";

    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/resources/${data?.id}`;
    }

    const requestData = mockApi(method, endpoint, data);
    const { status = false  } = requestData; //data: newData = {}
    
    if(status && !data?.id > -1){
        // navigate(`/resource/${newData?.id}`);
        navigate(`/resources`);
    }
  };

  const handleDeleteResources = () => {
    mockApi("DELETE", `/resources/${id}`);
    navigate("/resources");
  };

  const handleCancel = () => {
    navigate("/resources");
  };

  return (
    <Stack w="container.md" mx="auto">
      <Card>
        <CardBody>
          <ResourcesForm
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
    </Stack>
  );
};

ViewResource.propTypes = {};

export default ViewResource;
