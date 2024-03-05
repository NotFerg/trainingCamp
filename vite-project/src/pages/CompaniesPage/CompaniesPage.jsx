import { Box, Heading } from "@chakra-ui/react";
import Companies from "../../components/Companies/Companies";

export default function CompaniesPage() {
  return (
    // w="container.md" mx="auto" mb={4}
    <Box >
      <Box >
        <Heading> Companies</Heading>
      </Box>
      <Companies />
    </Box>
  );
}
