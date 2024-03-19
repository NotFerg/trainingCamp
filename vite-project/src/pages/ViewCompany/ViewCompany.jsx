import { useParams,} from "react-router-dom";
import {Stack} from "@chakra-ui/react";
import CompanyProvider from "../../contexts/Company";
import ViewCompanyFooter from "./ViewCompanyFooter";
import ViewCompanyForm from "./ViewCompanyForm";

const ViewCompany = () => {

  const { id = "add" } = useParams();

  return (
    <CompanyProvider id={id}>
      <Stack w="full" maxW="container.md" mx="auto">
          <ViewCompanyForm/>
        <ViewCompanyFooter/>
      </Stack>
    </CompanyProvider>
  );
};

ViewCompany.propTypes = {};

export default ViewCompany;
