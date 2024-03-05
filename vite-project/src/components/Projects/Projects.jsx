import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";

import projectsData from "./projects.json";

export default function Projects() {
  return (
    <Box m={10}>
      {projectsData.map((project) => (
        <Card key={project.alias} m={5}>
          <CardHeader>
            <Heading size="lg">{project.name}</Heading>
          </CardHeader>
          <CardBody>
            <Text fontSize="sm" pt="2">
              {project.description}
            </Text>
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
