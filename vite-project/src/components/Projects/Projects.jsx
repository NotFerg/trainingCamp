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
  Grid
} from "@chakra-ui/react";
import PropTypes from "prop-types";


const Projects = ({ data, onDelete = () => {} }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(350px, 1fr))"
      gap={4} w="container.xl " mx="auto"
    >
      {data?.length > 0 &&
        data.map((project = {}, projectIndex) => (
          <Card key={projectIndex}>
            <CardHeader>
              <Heading>{project.name}</Heading>
            </CardHeader>
            <CardBody>
              <Text opacity="50%">{project.alias}</Text>
              <Text>{project.description}</Text>
            </CardBody>
            <CardFooter>
              <Button
                colorScheme="red"
                variant="outline"
                onClick={() => onDelete(projectIndex)}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
    </Grid>
  );
}

Projects.propTypes = { data: PropTypes.array, onDelete: PropTypes.func };

export default Projects;