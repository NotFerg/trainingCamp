import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useRef, useState,useEffect } from "react";
import { Form } from "react-router-dom";
import mockApi from "../../utils/mockApi";

const initialData = {
  firstName: "",
  middleName: "",
  lastName: "",
  type: "",
};

const ResourcesForm = ({id = -1, onAdd ,onCancel}) => {
  const [formData, setFormData] = useState(initialData);
  const fetched = useRef(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleAdd = (e) => {
    // console.log(formData);
    onAdd(formData);
    setFormData(initialData);
    e.preventDefault();
  };

  const handleCancel = () => {
    setFormData(initialData);
    onCancel();
  };

  useEffect(() => {
    if(id === -1 || fetched.current) return;
    const requestData = mockApi("GET", `/resources/${id}`);
    const {status = false, data = {}} = requestData;
    if(status) {
        fetched.current = true;
        setFormData(data)
    }
}, [id])


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
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Middle Name</FormLabel>
          <Input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel> Type</FormLabel>
          <Input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
          />
        </FormControl>
        <HStack>
          <Spacer />
          <Button type="button" onClick={handleCancel}>Cancel</Button>
          <Button type="submit" onClick={handleAdd} colorScheme="green">
            {id === -1 ? "Add":"Update"}
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

ResourcesForm.propTypes = {id: PropTypes.number, onAdd: PropTypes.func, onCancel: PropTypes.func };

export default ResourcesForm;
