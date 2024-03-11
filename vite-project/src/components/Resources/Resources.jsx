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
  ButtonGroup,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resources = ({ data = [], onDelete, onEdit }) => {
  return (
    <TableContainer w="container.md " mx="auto">
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
                  <ButtonGroup>
                    <Button
                      colorScheme="green"
                      variant="outline"
                      onClick={() => onEdit(resource?.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      colorScheme="red"
                      variant="outline"
                      onClick={() => onDelete(resource?.id)}
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
  );
};

Resources.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Resources;
