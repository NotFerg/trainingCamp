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
  Center,
  Box,
  HStack,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resources = ({ data, onDelete = () => {} }) => {
  return (
    <TableContainer w="container.xl " mx="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th> Resources Type</Th>
            <Th isNumeric>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.length > 0 &&
            data.map((resource = {}, resourceIndex) => (
              <Tr key={`resource-${resourceIndex}`}>
                <Td>
                  {resource.firstName +
                    " " +
                    resource.middleName +
                    " " +
                    resource.lastName}
                </Td>
                <Td>{resource.type}</Td>
                <Td isNumeric>
                  <Button
                    colorScheme="red"
                    variant="outline"
                    onClick={() => onDelete(resourceIndex)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

Resources.propTypes = { data: PropTypes.array, onDelete: PropTypes.func };

export default Resources;
