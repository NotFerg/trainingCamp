import { useParams, useNavigate } from "react-router-dom";
import CompaniesForm from "../../forms/CompaniesForm/CompaniesForm";
import mockApi from "../../utils/mockApi";
import {Stack,Card,CardBody,Box,Divider,HStack,Spacer,Button,useToast} from "@chakra-ui/react";
import Swal from "sweetalert2";

const ViewCompany = () =>{
    const navigate = useNavigate();
    const {id ="add"} = useParams();
    const toast = useToast();

    const handleAddResources = (data) => {
        let method = "POST";
        let endpoint = "/companies";
    
        if (data?.id > -1) {
          method = "PUT";
          endpoint = `/companies/${data?.id}`;
        }
    
        const requestData = mockApi(method, endpoint, data);
        const { status = false, data: newData = {}  } = requestData; //data: newData = {}
        
        if (status) {
          if (!data?.id > -1) {
            Swal.fire({
              title: "Company Added",
              text: "Succesfully added company",
              icon: "success",
            });
          // navigate(`/resource/${newData?.id}`);
          navigate("/companies");
          }else{
            Swal.fire({
              title: "Company Updated",
              text: "Succesfully updated company",
              icon: "success",
            });
          }
        }
      };

      const handleDeleteResources = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted Company!",
              text: "Your company has been deleted.",
              icon: "success",
            });
            mockApi("DELETE", `/companies/${id}`);
            navigate("/companies");
          }
        });
      };
    
      const handleCancel = () => {
        navigate("/companies");
      };

    return(<Stack w="container.md" mx="auto">
    <Card>
      <CardBody>
        <CompaniesForm
          id={id}
          onAdd={handleAddResources}
          onCancel={handleCancel}
        />
      </CardBody>
    </Card>
    <Box w="full" my={8}>
      <Divider borderColor="grey.500" />
    </Box>
    {id !== "add" && ( // Conditionally rendering delete button
        <HStack>
          <Spacer />
          <Button colorScheme="red" onClick={handleDeleteResources}>
            Delete
          </Button>
        </HStack>
      )}
  </Stack>);
}

ViewCompany.propTypes = {};

export default ViewCompany;