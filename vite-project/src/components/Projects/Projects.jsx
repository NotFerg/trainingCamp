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
    <Box >
      {projectsData.map((project) => (
        <Card key={project.key}>
          <CardHeader>
            <Heading>{project.name}</Heading>
          </CardHeader>
          <CardBody>
          <Text >
              {project.alias}
            </Text>
            <Text >
              {project.description}
            </Text>
           
          </CardBody>
        </Card>
      ))}
    </Box>
  );
}
