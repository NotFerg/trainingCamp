import { Center, Stack, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ErrorPage(){
    return(<Center>
        <Stack>
        <Heading> Oops!</Heading>
        <Text>Something Weng Wrong</Text>
        <Link to="/"> Go back Home</Link>
        </Stack>
        
    </Center>);
}