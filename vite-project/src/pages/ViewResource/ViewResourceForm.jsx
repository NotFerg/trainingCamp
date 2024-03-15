import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import mockApi from "../../utils/mockApi";
import { validateResource } from "../../utils/resourceValidator";
import { useResource } from "../../contexts/_useContexts";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

const ViewResourcesForm = () => {
  const {
    id,
    handleAddResources,
    handleCancel,
    formData,
    dispatch,
    isEditing,
  } = useResource();
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_INPUTCHANGE", name, value });
  };

  const handleAdd = (e) => {
    // console.log(formData);
    e.preventDefault();
    const validator = validateResource(formData);
    const { isValid = false, errors = {} } = validator;
    if (isValid) {
      handleAddResources(formData);
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
            <Heading size="sm">Add Resource</Heading>

            <FormControl
              isInvalid={errors?.firstName}
              isRequired
              isReadOnly={!isEditing}
            >
              <FormLabel> First Name</FormLabel>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.firstName}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.middleName}
              isRequired
              isReadOnly={!isEditing}
            >
              <FormLabel>Middle Name</FormLabel>
              <Input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.middleName}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={errors?.lastName}
              isRequired
              isReadOnly={!isEditing}
            >
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.lastName}</FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors?.type}
              isRequired
              isReadOnly={!isEditing}
            >
              <FormLabel> Type</FormLabel>
              <Input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.type}</FormErrorMessage>
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
                  Update Resource
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

ViewResourcesForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ViewResourcesForm;
