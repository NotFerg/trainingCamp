import { useParams,} from "react-router-dom";
import {Stack} from "@chakra-ui/react";
import RequestProvider from "../../contexts/Request";
import ViewRequestFooter from "./ViewRequestFooter";
import ViewRequestForm from "./ViewRequestForm";

const ViewRequest = () => {

  const { id = "add" } = useParams();

  return (
    <RequestProvider id={id}>
      <Stack w="full" maxW="container.md" mx="auto">
          <ViewRequestForm/>
        <ViewRequestFooter/>
      </Stack>
    </RequestProvider>
  );
};

ViewRequest.propTypes = {};

export default ViewRequest;
