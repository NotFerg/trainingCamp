import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useRef, useState,useEffect } from "react";
import { Form } from "react-router-dom";
import mockApi from "../../utils/mockApi";

const initialData = {
  name: "",
  address: "",
  contactPerson: "",
  email: "",
  contactNumber: "",
};

const CompaniesForm = ({id = "add", onAdd, onCancel}) => {
  const [formData, setFormData] = useState(initialData);
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
    onAdd(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  useEffect(() => {
    if (id === "add") return;
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/companies/${id}`);
    const { status = false, data = {} } = requestData;
    if (status) {
      fetched.current = true;
      setFormData(data);
    }
  }, [id]);

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
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Person</FormLabel>
          <Input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.type}
            onChange={handleInputChange}
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
        </FormControl>
        <HStack>
          <Spacer />
          <Button type="button" onClick={handleCancel}>Cancel</Button>
          <Button type="submit" onClick={handleAdd} colorScheme="green">
            {id === "add" ? "Add":"Update"}
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

CompaniesForm.propTypes = {
   id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,};

export default CompaniesForm;
