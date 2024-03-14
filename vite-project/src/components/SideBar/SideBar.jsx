import {List,Icon,ListItem, Drawer,DrawerOverlay, DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,useDisclosure,useBreakpointValue,} from "@chakra-ui/react";
  import { Link, useLocation } from "react-router-dom";
  import { GrResources, GrProjects } from "react-icons/gr";
  import { FaHome, FaBuilding, FaBars } from "react-icons/fa";
  import { IoIosDocument } from "react-icons/io";
  
  export default function SideBar() {
    const location = useLocation();
    const { pathname } = location;
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const displayList = useBreakpointValue({ base: 'none', md: 'block' });
  
    function generateListItem(pathname, link, icon, text) {
      return (
        <ListItem
          _hover={{ color: "green.700" }}
          color={pathname === link ? "green.700" : "grey.500"}
        >
          <Link to={link}>
            <Icon as={icon} /> {text}
          </Link>
        </ListItem>
      );
    }
  
    return (
      <>
        <List fontSize="1.5em" spacing={4} borderRadius="50px" p={10} display={displayList}>
          {generateListItem(pathname, "/", FaHome, "Home")}
          {generateListItem(pathname, "/resources", GrResources, "Resources")}
          {generateListItem(pathname, "/projects", GrProjects, "Projects")}
          {generateListItem(pathname, "/companies", FaBuilding, "Companies")}
          {generateListItem(pathname, "/request", IoIosDocument, "Request")}
        </List>
  
        <Drawer placement="top" isOpen={isOpen} onClose={onClose} bg="#B5C0D0">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <List fontSize="1.5em" spacing={4} borderRadius="50px" p={10}>
                {generateListItem(pathname, "/", FaHome, "Home")}
                {generateListItem(pathname, "/resources", GrResources, "Resources")}
                {generateListItem(pathname, "/projects", GrProjects, "Projects")}
                {generateListItem(pathname, "/companies", FaBuilding, "Companies")}
                {generateListItem(pathname, "/request", IoIosDocument, "Request")}
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
  
        <Icon as={FaBars} boxSize={8} display={{ base: 'block', md: 'none' }} onClick={onOpen} />
      </>
    );
  }