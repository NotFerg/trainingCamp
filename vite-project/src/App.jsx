import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header/Header";
import People from "./components/People/people";
import Companies from "./components/Companies/Companies";
import Projects from "./components/Projects/Projects";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Companies />
      <Grid templateColumns={{ base: "100%", md: "60% 40%" }} gap={4}>
        <GridItem>
          <People />
        </GridItem>
        <GridItem>
        <h1> Projects</h1>
          <Projects
            title="People System Upgrade"
            sub="peopleUpgrade"
            desc="Upgrade and enhance the features of HR System"
          />
          <Projects
            title="Books Integration"
            sub="booksIntegration"
            desc="Integrate accounting system with external financial tools"
          />
          <Projects
            title="Warehouse Automation"
            sub="warehouseAutomation"
            desc="Implement Automation features in the Warehouse management system"
          />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
