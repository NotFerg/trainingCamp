import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Box,
  Text,
  Button,
  Grid,
  ButtonGroup,
  LinkOverlay,
  GridItem,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [] }) => {
  return (
    <Grid templateColumns={{ base: "repeat(12, 1fr)" }} gap={4} w="full" h="full">
      {data?.length > 0 &&
        data.map((project = {}, projectIndex) => (
          <GridItem colSpan={{ base: 12, md: 6 }} key={`project-${projectIndex}`} >
            <Card key={`project-${projectIndex}`} mx={5} my={2}>
              <CardHeader>
                <Heading>
                  <LinkOverlay href={`/project/${project?.id}`}>
                    {project.name}
                  </LinkOverlay>
                </Heading>
              </CardHeader>
              <CardBody>
                <Text opacity="50%">{project.alias}</Text>
                <Text>{project.description}</Text>
              </CardBody>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
};

Projects.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default Projects;
