import { useParams, useNavigate } from "react-router-dom";
import ProjectsForm from "../../forms/ProjectsForm/ProjectsForm";
import mockApi from "../../utils/mockApi";
import {
  Stack,
  Card,
  CardBody,
  Box,
  Divider,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";

const ViewProject = () => {
  const navigate = useNavigate();
  const { id = "add" } = useParams();

  const handleAddResources = (data) => {
    let method = "POST";
    let endpoint = "/projects";

    if (data?.id > -1) {
      method = "PUT";
      endpoint = `/projects/${data?.id}`;
    }

    const requestData = mockApi(method, endpoint, data);
    const { status = false } = requestData; //data: newData = {}

    if (status && !data?.id > -1) {
      // navigate(`/resource/${newData?.id}`);
      navigate(`/projects`);
    }
  };

  const handleDeleteResources = () => {
    mockApi("DELETE", `/projects/${id}`);
    navigate("/projects");
  };

  const handleCancel = () => {
    navigate("/projects");
  };

  return (
    <Stack w="container.md" mx="auto">
      <Card>
        <CardBody>
          <ProjectsForm
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
        <Button colorScheme="red" onClick={handleDeleteResources}>
          Delete
        </Button>
      </HStack>
    </Stack>
  );
};
ViewProject.propTypes = {};

export default ViewProject;
