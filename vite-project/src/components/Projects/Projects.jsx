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
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Projects = ({ data = [], onDelete, onEdit }) => {
  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap={4}
      w="container.xl "
      mx="auto"
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
              <ButtonGroup>
                <Button
                  colorScheme="green"
                  variant="outline"
                  onClick={() => onEdit(project?.id)}
                >
                  Edit
                </Button>
                <Button
                  colorScheme="red"
                  variant="outline"
                  onClick={() => onDelete(project?.id)}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </CardFooter>
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
