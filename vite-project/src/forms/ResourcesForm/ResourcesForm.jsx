import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "react-router-dom";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  type: "",
};

const ResourcesForm = ({ onAdd = () => {},onExit = () => {} }) => {
  const [formData, setFormData] = useState(initialData);

  const handleAdd = (e) => {
    // console.log(formData);
    onAdd(formData);
    setFormData(initialData);
    e.preventDefault();
    onExit();
  };

  const handleCancel = () => {
    setFormData(initialData);
    onExit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  return (
    <Form onSubmit={handleAdd}>
      <Stack>
        <Heading size="sm">Add Resource</Heading>
        <FormControl>
          <FormLabel> First Name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Middle Name</FormLabel>
          <Input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel> Type</FormLabel>
          <Input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </FormControl>
        <HStack>
          <Spacer />
          <Button type="button" onClick={handleCancel}>Cancel</Button>
          <Button type="submit" onClick={handleAdd} colorScheme="green">
            Add
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

ResourcesForm.propTypes = { onAdd: PropTypes.func, onExit: PropTypes.func };

export default ResourcesForm;
