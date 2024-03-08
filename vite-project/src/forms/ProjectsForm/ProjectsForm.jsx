import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, Heading, Spacer, Stack } from "@chakra-ui/layout";
import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "react-router-dom";

const initialData = {
  name: "",
  alias: "",
  description: "",
};

const ProjectsForm = ({ onAdd = () => {}, onExit = () => {} }) => {
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
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Alias</FormLabel>
          <Input
            type="text"
            name="alias"
            value={formData.alias}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormControl>
        <HStack>
          <Spacer />
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleAdd} colorScheme="green">
            Add
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

ProjectsForm.propTypes = { onAdd: PropTypes.func, onExit: PropTypes.func };

export default ProjectsForm;
