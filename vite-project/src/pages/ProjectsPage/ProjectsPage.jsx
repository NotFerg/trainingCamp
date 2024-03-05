import { Box, Heading } from "@chakra-ui/react";
import Projects from "../../components/Projects/Projects";

export default function ProjectsPagePage() {
  return (
    // w="container.md" mx="auto" mb={4}
    <Box>
      <Box >
        <Heading> Projects</Heading>
      </Box>
      <Projects />
    </Box>
  );
}
