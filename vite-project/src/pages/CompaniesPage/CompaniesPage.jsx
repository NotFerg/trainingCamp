import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import Companies from "../../components/Companies/Companies";
import Header from "../../components/Header/Header";
import { useState } from "react";
import initialData from "./companies.json";
import PropTypes from "prop-types";
import CompaniesForm from "../../forms/CompaniesForm/CompaniesForm";

const CompaniesPage = () => {
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
        headerText="Companies"
        isAdding={isAdding}
        toggle={() => setIsAdding(!isAdding)}
      />
      {!isAdding && <Companies data={data}  onDelete={handleDelete}/>}
      {isAdding && (
        <Box w="container.xl" mx="auto">
          <Card>
            <CardBody>
              <CompaniesForm
                onAdd={handleAdd}
                onExit={() => setIsAdding(false)}
               
              />
            </CardBody>
          </Card>
        </Box>
      )}
    </Stack>
  );
}


CompaniesPage.propTypes = {};

export default CompaniesPage;