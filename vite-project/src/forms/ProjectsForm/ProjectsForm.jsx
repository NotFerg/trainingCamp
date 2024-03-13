import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import { Form } from "react-router-dom";
import mockApi from "../../utils/mockApi";
import { validateProject } from "../../utils/projectValidator";

const initialData = {
  name: "",
  alias: "",
  description: "",
};

const ProjectsForm = ({ id = "add", onAdd, onCancel }) => {
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
    const validator = validateProject(formData);
    const {isValid = false, errors = {}} = validator;
    if(isValid){
      onAdd(formData);
      setErrors([]);
    }else{
      setErrors(errors);
    }   
  };

  const handleCancel = () => {
    setFormData(initialData);
    onCancel();
  };

  useEffect(() => {
    if (id === "add") return;
    if (fetched.current === id) return;
    const requestData = mockApi("GET", `/projects/${id}`);
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

        <FormControl isInvalid={errors?.alias}>
          <FormLabel>Alias</FormLabel>
          <Input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleInputChange}
          />
           <FormErrorMessage>{errors?.alias}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors?.description}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          <FormErrorMessage>{errors?.description}</FormErrorMessage>
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

ProjectsForm.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onAdd: PropTypes.func,
  onCancel: PropTypes.func,
};

export default ProjectsForm;
