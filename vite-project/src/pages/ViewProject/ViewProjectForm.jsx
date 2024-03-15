import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import { useProject } from "../../contexts/_useContexts";
import { validateProject } from "../../utils/projectValidator";
import { useState } from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

const ViewProjectForm = () => {
  const { id, handleAddProjects, handleCancel, formData, dispatch, isEditing } =
    useProject();
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_INPUTCHANGE", name, value });
  };

  const handleAdd = (e) => {
    // console.log(formData);
    e.preventDefault();
    const validator = validateProject(formData);
    const { isValid = false, errors = {} } = validator;
    if (isValid) {
      handleAddProjects(formData);
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
            <Heading size="sm">Add Project</Heading>

            <FormControl isInvalid={errors?.name} isRequired isReadOnly={!isEditing}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.alias} isRequired isReadOnly={!isEditing}>
              <FormLabel>Alias</FormLabel>
              <Input
                type="text"
                name="alias"
                value={formData.alias}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.alias}</FormErrorMessage>
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

ViewProjectForm.propTypes = {};

export default ViewProjectForm;
