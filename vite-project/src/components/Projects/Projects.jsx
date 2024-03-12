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
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [] }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={4}
      w="container.xl "
      mx="auto"
    >
      {data?.length > 0 &&
        data.map((project = {}, projectIndex) => (
          <Card key={`project-${projectIndex}`}>
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
