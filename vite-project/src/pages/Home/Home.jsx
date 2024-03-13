import { Button } from "@chakra-ui/react";
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
      Hello World
      <Button onClick={handleClick}>RESET</Button>
    </div>
  );
}
