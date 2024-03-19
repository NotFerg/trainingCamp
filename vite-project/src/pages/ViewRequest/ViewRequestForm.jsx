import { Button } from "@chakra-ui/button";
import { FormControl,FormLabel,FormErrorMessage,} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import { useRequest } from "../../contexts/_useContexts";
import { validateRequest } from "../../utils/requestValidator";
import { useState } from "react";
import { Card, CardBody, CardFooter,Select } from "@chakra-ui/react";

const ViewRequestForm = () => {
  const { id, handleAddRequest, handleCancel, formData, dispatch, isEditing } =
    useRequest();
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_INPUTCHANGE", name, value });
  };

  const handleAdd = (e) => {
    // console.log(formData);
    e.preventDefault();
    const validator = validateRequest(formData);
    const { isValid = false, errors = {} } = validator;
    if (isValid) {
      handleAddRequest(formData);
      setErrors([]);
    } else {
      setErrors(errors);
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <Card>
        <CardBody>
          <Stack>
            <Heading size="sm">Add Request</Heading>

            <FormControl isInvalid={errors?.client} isRequired >
              <FormLabel>Client</FormLabel>
                <Select placeholder='Select option' value={formData.client} onChange={(e) => handleInputChange(e)} name="client" isRequired isDisabled={!isEditing}>
                    <option  value='TechByte Innovations'>TechByte Innovations</option>
                    <option  value='GreenLeaf Organics'>GreenLeaf Organics</option>
                    <option  value='MetroStyle Apparel'>MetroStyle Apparel</option>
                    <option  value='AquaTech Solutions'>AquaTech Solutions</option>
                    <option  value='BioHarvest Farms'>BioHarvest Farms</option>
                </Select>
              <FormErrorMessage>{errors?.client}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.project} isRequired >
              <FormLabel>Project</FormLabel>
                <Select placeholder='Select option' value={formData.project} onChange={(e) => handleInputChange(e)}  name="project" isRequired isDisabled={!isEditing}>
                        <option  value='People System Upgrade'>People System Upgrade</option>
                        <option  value='Books Integration'>Books Integration</option>
                        <option  value='Warehouse Automation'>Warehouse Automation</option>
                    </Select>
              <FormErrorMessage>{errors?.project}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.subject} isRequired isReadOnly={!isEditing}>
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.description}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.description} isRequired isReadOnly={!isEditing}>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.description}</FormErrorMessage>
            </FormControl>

          </Stack>
        </CardBody>
        <CardFooter>
        <HStack spacing={4} w="full">
            {!isEditing && (
              <>
                <Spacer />
                <Button
                  type="button"
                  onClick={() =>
                    dispatch({ type: "SET_EDIT", isEditing: true })
                  }
                >
                  Update Project
                </Button>
              </>
            )}
            {isEditing && (
              <>
                <Button type="button" onClick={handleCancel}>
                  Cancel
                </Button>
                <Spacer />
                <Button type="submit" onClick={handleAdd} colorScheme="green">
                  {id === "add" ? "Add" : "Update"}
                </Button>
              </>
            )}
          </HStack>
        </CardFooter>
      </Card>
    </form>
  );
};

ViewRequestForm.propTypes = {};

export default ViewRequestForm;
