import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useRef, useState,useEffect } from "react";
import { Form } from "react-router-dom";
import mockApi from "../../utils/mockApi";
import { validateCompany } from "../../utils/companyValidator";

const initialData = {
  name: "",
  address: "",
  contactPerson: "",
  email: "",
  contactNumber: "",
};

const CompaniesForm = ({id = "add", onAdd, onCancel}) => {
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
    const validator = validateCompany(formData);
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

        <FormControl isInvalid={errors?.name}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.name}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors?.address}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
           <FormErrorMessage>{errors?.address}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors?.contactPerson}>
          <FormLabel>Contact Person</FormLabel>
          <Input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleInputChange}
          />
           <FormErrorMessage>{errors?.contactPerson}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors?.email}>
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

        <FormControl isInvalid={errors?.contactNumber}>
          <FormLabel>Contact Number</FormLabel>
          <Input
            type="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.contactNumber}</FormErrorMessage>
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
