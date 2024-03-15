import { useParams, } from "react-router-dom";
import {Stack} from "@chakra-ui/react";
import ProjectProvider from "../../contexts/Projects";
import ViewProjectFooter from "./ViewProjectFooter";
import ViewProjectForm from "./ViewProjectForm";


const ViewProject = () => {
  const { id = "add" } = useParams();

  return (
    <ProjectProvider id={id}>
      <Stack w="full" maxW="container.md" mx="auto">
        <ViewProjectForm/>
        <ViewProjectFooter id={id}/>
      </Stack>
    </ProjectProvider>
  );
};
ViewProject.propTypes = {};

export default ViewProject;
