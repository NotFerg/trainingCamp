import { useParams } from "react-router-dom";
import { Stack, Box } from "@chakra-ui/react";
import ResourceProvider from "../../contexts/Resources";
import ViewResourcesForm from "./ViewResourceForm";
import ViewResourceFooter from "./ViewResourceFooter";

const ViewResource = () => {
  const { id = "add" } = useParams();
  return (
    <ResourceProvider id={id}>
      <Stack w="full" maxW="container.md" mx="auto">
        <ViewResourcesForm />
        <ViewResourceFooter id={id} />
      </Stack>
    </ResourceProvider>
  );
};

ViewResource.propTypes = {};

export default ViewResource;
