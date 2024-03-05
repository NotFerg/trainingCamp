import { Box, Heading } from "@chakra-ui/react";
import Projects from "../../components/Projects/Projects";

export default function ProjectsPagePage() {
  return (
    // w="container.md" mx="auto" mb={4}
    <Box>
      <Box >
        <Heading> Resources</Heading>
      </Box>
      <Projects />
    </Box>
  );
}
