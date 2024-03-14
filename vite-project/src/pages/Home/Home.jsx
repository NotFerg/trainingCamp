import { Button, Center,Heading } from "@chakra-ui/react";
import mockApi from "../../utils/mockApi";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

function handleClick(){
    mockApi("POST", "/reset-data");
    navigate("/");
}
  return (
    <div>
      <Center><Heading mt={20}>Hello World</Heading></Center>
      {/* <Button onClick={handleClick}>RESET</Button> */}
    </div>
  );
}
