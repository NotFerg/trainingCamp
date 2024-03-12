import {Stack } from "@chakra-ui/react";
import Projects from "../../components/Projects/Projects";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import mockApi from "../../utils/mockApi";

const ProjectsPage = () => {
  const [projectsData, setProjectData] = useState();
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/projects");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setProjectData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // w="container.md" mx="auto" mb={4}
    <Stack>
      <Header
        headerText="project"/>
        <Projects data={projectsData}/> 
    </Stack>
  );
};

ProjectsPage.propTypes = {};

export default ProjectsPage;
