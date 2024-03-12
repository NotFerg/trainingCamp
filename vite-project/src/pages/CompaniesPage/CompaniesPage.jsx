import {  Stack } from "@chakra-ui/react";
import Companies from "../../components/Companies/Companies";
import Header from "../../components/Header/Header";
import { useState,useRef,useEffect } from "react";
import mockApi from "../../utils/mockApi";

const CompaniesPage = () => {
  const [companyData, setCompanyData] = useState();
  const fetched = useRef();

  const loadData = () => {
    if (fetched.current) return;
    const requestData = mockApi("GET", "/companies");
    const { status = false, data = null } = requestData;
    fetched.current = status;
    if (status) {
      setCompanyData(data);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    // w="container.md" mx="auto" mb={4}
    <Stack>
      <Header headerText="Company"/>
      <Companies data={companyData}/>
    </Stack>
  );
};

CompaniesPage.propTypes = {};

export default CompaniesPage;
