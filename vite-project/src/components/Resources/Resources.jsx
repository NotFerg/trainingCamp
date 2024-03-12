import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resources = ({ data = [] }) => {
  return (
    <TableContainer w="container.md " mx="auto">
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th> Resources Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.length > 0 &&
            data.map((resource = {}, resourceIndex) => (
              <LinkBox as={Tr} key={`resource-${resourceIndex}`}>
                <Td>
                  <LinkOverlay href={`/resource/${resource?.id}`}>
                    {resource.firstName +
                      " " +
                      resource.middleName +
                      " " +
                      resource.lastName}
                  </LinkOverlay>
                </Td>
                <Td>{resource.type}</Td>
              </LinkBox>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

Resources.propTypes = {
  data: PropTypes.array
};

export default Resources;
