import {  Stack } from "@chakra-ui/react";
import Resources from "../../components/Resources/Resources";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import mockApi from "../../utils/mockApi";

const ResourcesPage = () => {
  const [resourcesData, setResourceData] = useState();
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/resources");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setResourceData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // w="container.md" mx="auto" mb={4}
    <Stack>
      <Header headerText="resource" />
        <Resources data={resourcesData}/>     
    </Stack>
  );
};

ResourcesPage.propTypes = {};

export default ResourcesPage;
