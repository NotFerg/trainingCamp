import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import { useCompany } from "../../contexts/_useContexts";
import { validateCompany } from "../../utils/companyValidator";
import { useState } from "react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

const ViewCompanyForm = () => {
  const { id, handleAddCompany, handleCancel, formData, dispatch, isEditing } =
    useCompany();
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "ON_INPUTCHANGE", name, value });
  };

  const handleAdd = (e) => {
    // console.log(formData);
    e.preventDefault();
    const validator = validateCompany(formData);
    const { isValid = false, errors = {} } = validator;
    if (isValid) {
      handleAddCompany(formData);
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
            <Heading size="sm">Add Company</Heading>

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

            <FormControl isInvalid={errors?.address} isRequired isReadOnly={!isEditing}>
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.address}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.contactPerson} isRequired isReadOnly={!isEditing}>
              <FormLabel>Contact Person</FormLabel>
              <Input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.contactPerson}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.email} isRequired isReadOnly={!isEditing}>
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <FormErrorMessage>{errors?.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors?.contactNumber} isRequired isReadOnly={!isEditing}>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
              <FormErrorMessage>{errors?.contactNumber}</FormErrorMessage>
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
                  Update Company
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

ViewCompanyForm.propTypes = {};

export default ViewCompanyForm;
