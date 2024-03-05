import { Box, Heading } from "@chakra-ui/react";
import Companies from "../../components/Companies/Companies";

export default function CompaniesPage() {
  return (
    // w="container.md" mx="auto" mb={4}
    <Box>
      <Box >
        <Heading> Resources</Heading>
      </Box>
      <Companies />
    </Box>
  );
}
