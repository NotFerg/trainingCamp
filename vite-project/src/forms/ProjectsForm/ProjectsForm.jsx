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
  alias: "",
  description: "",
};

const ProjectsForm = ({ id = -1, onAdd ,onCancel}) => {
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
    const requestData = mockApi("GET", `/projects/${id}`);
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
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Alias</FormLabel>
          <Input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </FormControl>
        <HStack>
          <Spacer />
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleAdd} colorScheme="green">
          {id === -1 ? "Add":"Update"}
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

ProjectsForm.propTypes = {id: PropTypes.number, onAdd: PropTypes.func, onCancel: PropTypes.func};

export default ProjectsForm;
