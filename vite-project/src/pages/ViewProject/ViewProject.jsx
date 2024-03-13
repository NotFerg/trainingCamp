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
import Swal from "sweetalert2";

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

    if (status) {
      if (!data?.id > -1) {
        Swal.fire({
          title: "Project Added",
          text: "Succesfully added project",
          icon: "success",
        });
      // navigate(`/resource/${newData?.id}`);
      navigate("/projects");
      }else{
        Swal.fire({
          title: "Project Updated",
          text: "Succesfully updated project",
          icon: "success",
        });
      }
    }
  };

  const handleDeleteResources = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        mockApi("DELETE", `/projects/${id}`);
        navigate("/projects");
      }
    });
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
      {id !== "add" && ( // Conditionally rendering delete button
        <HStack>
          <Spacer />
          <Button colorScheme="red" onClick={handleDeleteResources}>
            Delete
          </Button>
        </HStack>
      )}
    </Stack>
  );
};
ViewProject.propTypes = {};

export default ViewProject;
