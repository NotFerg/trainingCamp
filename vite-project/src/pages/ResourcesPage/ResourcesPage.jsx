import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import Resources from "../../components/Resources/Resources";
import { useEffect, useRef, useState } from "react";
 import initialData from "../../utils/resources.json";
import PropTypes from "prop-types";
import ResourcesForm from "../../forms/ResourcesForm/ResourcesForm";
import Header from "../../components/Header/Header";
import mockApi from "../../utils/mockApi";

const ResourcesPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [resourcesData, setResourceData] = useState();
  const fetched = useRef(false);

  const handleAddResources = (data) => {
    let method = "POST";
    let endpoint = "/resources";
    if(data?.id > -1){
      method = "PUT";
      endpoint = `/resources/${data?.id}`
  }
    const requestData = mockApi(method, endpoint, data);
    const { status = false, data: newData = {} } = requestData;
    if (status) {
      const newResourceData = [...resourcesData];
      if (data?.id > -1) {
        const index = newResourceData.findIndex((item) => item.id === data.id);
        if (index !== -1) {
          newResourceData.splice(index,1,newData);
        }
      } else {
        newResourceData.push(newData)
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
    const requestData = mockApi("DELETE", `/resources/${id}`);
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
    const requestData = mockApi("GET", "/resources");
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
        headerText="Resources"
        isAdding={isAdding}
        toggle={() => setIsAdding(!isAdding)}
      />
      {!isAdding && (
        <Resources
          data={resourcesData}
          onDelete={handleDeleteResources}
          onEdit={handleEditResources}
        />
      )}
      {isAdding && (
        <Box w="container.md" mx="auto">
          <Card>
            <CardBody>
              <ResourcesForm
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

ResourcesPage.propTypes = {};

export default ResourcesPage;
