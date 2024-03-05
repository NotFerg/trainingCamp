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
} from "@chakra-ui/react";

import COMPANIES from "./companies.json";

export default function Companies() {
  return (
    <>
      <h2 style={{ textAlign: "left",  }}>companies</h2>
      <TableContainer mb={20}>
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Address</Th>
              <Th>Contact Person</Th>
              <Th>Email</Th>
              <Th>Number</Th>
            </Tr>
          </Thead>
          <Tbody>
            {COMPANIES.map((company) => (
              <Tr key={company.key}>
                <Td>{company.name}</Td>
                <Td>{company.address}</Td>
                <Td>{company.contactPerson}</Td>
                <Td>{company.email}</Td>
                <Td>{company.contactNumber}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
