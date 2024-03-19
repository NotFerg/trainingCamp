import React from "react";
import {Card,CardHeader,CardBody,Heading,Text,Grid,LinkOverlay,GridItem,} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Requests = ({ data = [] }) => {
  return (
    <Grid templateColumns={{ base: "repeat(12, 1fr)" }} gap={4} w="full" h="full">
      {data?.length > 0 &&
        data.map((request = {}, requestIndex) => (
          <GridItem colSpan={{ base: 12, md: 6 }} key={`request-${requestIndex}`} >
            <Card key={`request-${requestIndex}`} mx={5} my={2}>
              <CardHeader>
                <Heading>
                  <LinkOverlay href={`/request/${request?.id}`}>
                    {request.client}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>{request.project}</Text>
                <Text >{request.subject}</Text>
                <Text>{request.description}</Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
};

Requests.propTypes = {data: PropTypes.array};

export default Requests;Requests
