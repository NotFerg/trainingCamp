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
  Box
} from "@chakra-ui/react";

import PERSONS from "../../resources.json";

export default function People() {
  return (
  ///bg="tomato"
    <Box p={10} >    
    <h2 style={{textAlign:"left"}}>Resources</h2>
     <TableContainer >
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th mr={4}>Name</Th>
              <Th ml={4}>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {PERSONS.map((person) => (
              <Tr key={person.Key}>
                <Td mr={4}>
                  {person.firstName +
                    " " +
                    person.middleName +
                    " " +
                    person.lastName}
                </Td>
                <Td  ml={4}>{person.type}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
