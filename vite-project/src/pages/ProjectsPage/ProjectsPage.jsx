import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import Projects from "../../components/Projects/Projects";
import { useState } from "react";
import initialData from "./projects.json";
import PropTypes from "prop-types";
import ProjectsForm from "../../forms/ProjectsForm/ProjectsForm";
import Header from "../../components/Header/Header";

const ProjectsPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [data, setData] = useState(initialData);

  const handleAdd = (newData = {}) => {
    setData([...data, newData]);
  };

  const handleDelete = (index) =>{
    const newData = [...data]
    newData.splice(index,1)
    setData(newData);
  };
  return (
    // w="container.md" mx="auto" mb={4}
    <Stack>
      <Header
        headerText="Projects"
        isAdding={isAdding}
        toggle={() => setIsAdding(!isAdding)}
      />
      {!isAdding && <Projects data={data}  onDelete={handleDelete}/>}
      {isAdding && (
        <Box w="container.xl" mx="auto">
          <Card>
            <CardBody>
              <ProjectsForm
                onAdd={handleAdd}
                onExit={() => setIsAdding(false)}
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
