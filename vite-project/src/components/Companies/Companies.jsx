import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";


const Companies = ({ data, onDelete = () => {} }) => {
  return (
    <>
      <TableContainer w="container.xl " mx="auto">
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Contact Person</Th>
              <Th>Email</Th>
              <Th>Number</Th>
              <Th isNumeric>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.length>0 && data.map((company = {}, companyIndex) => (
              <Tr key={`resource-${companyIndex}`}>
                <Td>{company.name}</Td>
                <Td>{company.address}</Td>
                <Td>{company.contactPerson}</Td>
                <Td>{company.email}</Td>
                <Td>{company.contactNumber}</Td>
                <Td isNumeric>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => onDelete(companyIndex)}
                  >
                    Delete
                  </Button>
                </Td>  
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

Companies.propTypes = { data: PropTypes.array, onDelete: PropTypes.func };

export default Companies;
