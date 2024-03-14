import { ChakraProvider, Flex, Box, Stack } from "@chakra-ui/react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import theme from "./theme";
import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid  templateColumns={{ base: "repeat(12, 1fr)"}} gap={4}>
      <GridItem w="full" h="full" colSpan={{ base: 12,  md: 4 , lg:3}} bg="#B5C0D0"><SideBar/></GridItem>
      <GridItem w="full" h="full" colSpan={{ base: 12,  md: 8, lg: 9}} bg="#CCD3CA"><Outlet /></GridItem>
    </Grid>
    </ChakraProvider>
  );
}

export default App;

{/* <Grid templateColumns={{ base: "repeat(12, 1fr)"}} gap={4}>
<GridItem colSpan={{ base: 12, md: 3 }}>Column 1 (spanning 12 columns on base, 3 columns on md)</GridItem>
<GridItem colSpan={{ base: 12, md: 3 }}>Column 2 (spanning 12 columns on base, 3 columns on md)</GridItem>
<GridItem colSpan={{ base: 12, md: 3 }}>Column 3 (spanning 12 columns on base, 6 columns on md)</GridItem>
<GridItem colSpan={{ base: 12, md: 3 }}>Column 3 (spanning 12 columns on base, 6 columns on md)</GridItem>

</Grid> */}

{
  /* <ChakraProvider theme={theme}>
<Flex>
  <Box minW={36}>
    <Stack>
      <Link to="/">Home</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/request">Request</Link>
    </Stack>
  </Box>
  <Box w="full"> 
    <Outlet />
  </Box>
  
</Flex>
</ChakraProvider> */
}

//<ChakraProvider>
//   <Header />
//   <Companies />
//   <Grid templateColumns={{ base: "100%", md: "60% 40%" }} gap={4}>
//     <GridItem>
//       <People />
//     </GridItem>
//     <GridItem>
//     <h1> Projects</h1>
//       <Projects
//         title="People System Upgrade"
//         sub="peopleUpgrade"
//         desc="Upgrade and enhance the features of HR System"
//       />
//       <Projects
//         title="Books Integration"
//         sub="booksIntegration"
//         desc="Integrate accounting system with external financial tools"
//       />
//       <Projects
//         title="Warehouse Automation"
//         sub="warehouseAutomation"
//         desc="Implement Automation features in the Warehouse management system"
//       />
//     </GridItem>
//   </Grid>
// </ChakraProvider>
