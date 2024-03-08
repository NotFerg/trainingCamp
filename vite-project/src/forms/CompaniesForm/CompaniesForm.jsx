import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "react-router-dom";

const initialData = {
  name: "",
  address: "",
  contactPerson: "",
  email: "",
  contactNumber: "",
};

const CompaniesForm = ({ onAdd = () => {},onExit = () => {} }) => {
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
        <Heading size="sm">Add Company</Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Person</FormLabel>
          <Input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
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

CompaniesForm.propTypes = { onAdd: PropTypes.func, onExit: PropTypes.func };

export default CompaniesForm;
