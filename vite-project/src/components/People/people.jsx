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

import PERSONS from "./resources.json";

export default function People() {
  return (
  ///bg="tomato"
    <Box >    
     <TableContainer >
        <Table >
          <Thead>
            <Tr>
              <Th >Name</Th>
              <Th >Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {PERSONS.map((person) => (
              <Tr key={person.Key}>
                <Td >
                  {person.firstName +
                    " " +
                    person.middleName +
                    " " +
                    person.lastName}
                </Td>
                <Td  >{person.type}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
