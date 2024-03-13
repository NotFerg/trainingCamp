import { useParams, useNavigate } from "react-router-dom";
import ResourcesForm from "../../forms/ResourcesForm/ResourcesForm";
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
    const { status = false, data: newData = {} } = requestData; // data: newData = {}

    if (status) {
      if (!data?.id > -1) {
        Swal.fire({
          title: "Resource Added",
          text: "Succesfully added resource",
          icon: "success",
        });
        // navigate(`/resource/${newData?.id}`);
        navigate("/resources");
      } else {
        Swal.fire({
          title: "Resource Updated",
          text: "Succesfully updated resource",
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
          title: "Deleted Resource!",
          text: "Your resource has been deleted.",
          icon: "success",
        });
        mockApi("DELETE", `/resources/${id}`);
        navigate("/resources");
      }
    });
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

ViewResource.propTypes = {};

export default ViewResource;
