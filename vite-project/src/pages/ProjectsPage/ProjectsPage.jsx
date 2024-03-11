import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import Projects from "../../components/Projects/Projects";
import { useEffect, useRef, useState } from "react";
// import initialData from "../../utils/projects.json";
import PropTypes from "prop-types";
import ProjectsForm from "../../forms/ProjectsForm/ProjectsForm";
import Header from "../../components/Header/Header";
import mockApi from "../../utils/mockApi";

const ProjectsPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [resourcesData, setResourceData] = useState([]);
  const fetched = useRef(false);

  const handleAddResources = (data = {}) => {
    let method = "POST";
    let endpoint = "/projects";
    if (data?.id > -1) {
      (method = "PUT"), (endpoint = `/projects/${data?.id}`);
    }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = {} } = requestData;
    if (status) {
      const newResourceData = [...resourcesData];
      if (data?.id > -1) {
        const index = newResourceData.findIndex((item) => item.id === data.id);
        if (index !== -1) {
          newResourceData.splice(index, 1, newData);
        }
      } else {
        newResourceData.push(newData);
      }
      setResourceData(newResourceData);
      setIsAdding(false);
    }
  };

  const handleEditResources = (id) => {
    setIsAdding(true);
    setEditId(id);
  };

  const handleDeleteResources = (id) => {
    const requestData = mockApi("DELETE", `/projects/${id}`);
    const { status = false } = requestData;
    if (status) {
      const newData = [...resourcesData];
      const index = newData.findIndex((item) => item.id === id);
      if (index !== -1) {
        newData.splice(index, 1);
        setResourceData(newData);
      }
    }
  };

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/projects");
    const { status = false, data = [] } = requestData;
    if (status) {
      setResourceData(data);
      fetched.current = true;
    }
    // console.log(requestData);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setEditId(-1);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // w="container.md" mx="auto" mb={4}
    <Stack>
      <Header
        headerText="Projects"
        isAdding={isAdding}
        toggle={() => setIsAdding(!isAdding)}
      />
      {!isAdding && (
        <Projects
          data={resourcesData}
          onDelete={handleDeleteResources}
          onEdit={handleEditResources}
        />
      )}
      {isAdding && (
        <Box w="container.md" mx="auto">
          <Card>
            <CardBody>
              <ProjectsForm
                id={editId}
                onAdd={handleAddResources}
                onCancel={handleCancel}
              />
            </CardBody>
          </Card>
        </Box>
      )}
    </Stack>
  );
};

ProjectsPage.propTypes = {};

export default ProjectsPage;
