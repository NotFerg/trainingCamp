import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import mockApi from "../../utils/mockApi";
import { validateResource } from "../../utils/resourceValidator";


const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  type: "",
};

const ResourcesForm = ({ id = "add", onAdd, onCancel }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState([]);
  const fetched = useRef("add");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleAdd = (e) => {
    // console.log(formData);
    e.preventDefault();
    const validator = validateResource(formData);
    const {isValid = false, errors = {}} = validator;
    if(isValid){
      onAdd(formData);
      setErrors([]);
    }else{
      setErrors(errors);
    }   
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    if (id === "add") return;
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/resources/${id}`);
    const { status = false, data = {} } = requestData;
    if (status) {
      fetched.current = true;
      setFormData(data);
    }
  }, [id]);

  return (
    <Form onSubmit={handleAdd}>
      <Stack>
        <Heading size="sm">Add Resource</Heading>

        <FormControl isInvalid={errors?.firstName}>
          <FormLabel> First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors?.middleName}>
          <FormLabel>Middle Name</FormLabel>
          <Input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.middleName}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors?.lastName}>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.lastName}</FormErrorMessage>

        </FormControl>

        <FormControl isInvalid={errors?.type}>
          <FormLabel> Type</FormLabel>
          <Input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.type}</FormErrorMessage>
        </FormControl>
        <HStack>
          <Spacer />
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleAdd} colorScheme="green">
            {id === "add" ? "Add" : "Update"}
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

ResourcesForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ResourcesForm;
