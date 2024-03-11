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
  ButtonGroup,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Companies = ({ data = [], onDelete, onEdit }) => {
  return (
    <>
      <TableContainer w="container.md " mx="auto">
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
            {data?.length > 0 &&
              data.map((company = {}, companyIndex) => (
                <Tr key={`resource-${companyIndex}`}>
                  <Td>{company.name}</Td>
                  <Td>{company.address}</Td>
                  <Td>{company.contactPerson}</Td>
                  <Td>{company.email}</Td>
                  <Td>{company.contactNumber}</Td>
                  <Td isNumeric>
                    <ButtonGroup>
                      <Button
                        colorScheme="green"
                        variant="outline"
                        onClick={() => onEdit(company?.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        colorScheme="red"
                        variant="outline"
                        onClick={() => onDelete(company?.id)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

Companies.propTypes = { data: PropTypes.array, onDelete: PropTypes.func, onEdit:PropTypes.func };

export default Companies;
