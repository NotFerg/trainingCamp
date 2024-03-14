import {
  Table,Thead,Tbody,Tr,Th,Td,TableContainer,LinkBox,LinkOverlay,Card,CardBody} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Companies = ({ data = []}) => {
  return (
    <Card  w="full" maxW="container.md" mx="auto">
      <CardBody pt={0} px={0} bg="#CCD3CA">
      <TableContainer w="container.md " mx="auto">
        <Table>
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
            {data?.length > 0 &&
              data.map((company = {}, companyIndex) => (
                <LinkBox as={Tr} key={`company-${companyIndex}`}>
                  <Td>
                  <LinkOverlay href={`/company/${company?.id}`}>
                  {company.name}
                  </LinkOverlay>
                  </Td>
                  <Td>{company.address}</Td>
                  <Td>{company.contactPerson}</Td>
                  <Td>{company.email}</Td>
                  <Td>{company.contactNumber}</Td>
                </LinkBox>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      </CardBody>
    </Card>
  );
};

Companies.propTypes = { data: PropTypes.array};

export default Companies;
