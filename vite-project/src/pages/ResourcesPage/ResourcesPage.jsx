import { Box, Heading } from "@chakra-ui/react";
import People from "../../components/People/people";

export default function ResourcesPage() {
  return (
    // w="container.md" mx="auto" mb={4}
    <Box>
      <Box >
        <Heading> Resources</Heading>
      </Box>
      <People />
    </Box>
  );
}
