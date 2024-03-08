import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import Resources from "../../components/Resources/Resources";
import { useState } from "react";
import initialData from "./resources.json";
import PropTypes from "prop-types";
import ResourcesForm from "../../forms/ResourcesForm/ResourcesForm";
import Header from "../../components/Header/Header";

const ResourcesPage = () => {
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
        headerText="Resources"
        isAdding={isAdding}
        toggle={() => setIsAdding(!isAdding)}
      />
      {!isAdding && <Resources data={data}  onDelete={handleDelete}/>}
      {isAdding && (
        <Box w="container.xl" mx="auto">
          <Card>
            <CardBody>
              <ResourcesForm
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

ResourcesPage.propTypes = {};

export default ResourcesPage;
