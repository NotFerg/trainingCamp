import {  Stack } from "@chakra-ui/react";
import Requests from "../../components/Requests/Requests";
import Header from "../../components/Header/Header";
import { useState,useRef,useEffect } from "react";
import mockApi from "../../utils/mockApi";

const RequestsPage = () => {
  const [requestsData, setRequestsData] = useState();
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/requests");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setRequestsData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // w="container.md" mx="auto" mb={4}
    <Stack>
      <Header headerText="requests" headerLink="request"/>
      <Requests data={requestsData}/>
    </Stack>
  );
};

RequestsPage.propTypes = {};

export default RequestsPage;
