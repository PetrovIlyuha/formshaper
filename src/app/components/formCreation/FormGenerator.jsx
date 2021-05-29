import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Input,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addNextFieldParams } from "../../../features/formCreator/formCreationSlice";
import { FormLabel } from "@material-ui/core";
import cogoToast from "cogo-toast";

const InputVariants = [
  "Text Input Field",
  "Email Input Field",
  "Password Input Field",
  "Selection Group",
  "TextArea",
  "DateTime Picker",
  "Numerical Input",
];

const FormGenerator = () => {
  const dispatch = useDispatch();
  const [hoveredVariant, setHoveredVariant] = useState(null);
  const [formGroupHeading, setFormGroupHeading] = useState({
    title: "",
    description: "",
  });

  const handleHeadingChange = (e) => {
    setFormGroupHeading({
      ...formGroupHeading,
      [e.target.name]: e.target.value,
    });
  };

  const createFormGroupHeading = () => {
    const { title } = formGroupHeading;
    if (title) {
      dispatch(addNextFieldParams({ type: "heading", ...formGroupHeading }));
    } else {
      cogoToast.error("Please, fill out Heading title at least!");
    }
  };
  const prepareFieldParamsAndDispatch = (index) => {
    switch (index) {
      case 0:
        const textInputParam = { type: "text", label: "", validations: [] };
        dispatch(addNextFieldParams(textInputParam));
        break;
      case 1:
        const emailInputParam = { type: "email", label: "", validations: [] };
        dispatch(addNextFieldParams(emailInputParam));
        break;
      case 2:
        const passwordFieldParams = {
          type: "password",
          label: "",
          validations: [],
        };
        dispatch(addNextFieldParams(passwordFieldParams));
        break;
      case 3:
        console.log("select");
        const selectFieldParams = { type: "select", label: "", options: [] };
        dispatch(addNextFieldParams(selectFieldParams));
        break;
      case 4:
        console.log("datetime");
        break;
      case 5:
        console.log("number");
        break;
      default:
        return;
    }
  };
  return (
    <Box as="section" py="16">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading align="center" fontWeight="extrabold" maxW="md" mx="auto">
          Add Heading To Form Group
        </Heading>
        <Box px="10" py="4">
          <FormLabel htmlFor="title">
            <Text fontWeight="extrabold" py="2">
              Heading title
            </Text>
          </FormLabel>
          <Input
            variant="outline"
            id="title"
            name="title"
            onChange={handleHeadingChange}
            placeholder="Enter heading text..."
          />
        </Box>
        <Box px="10" py="5">
          <FormLabel htmlFor="description">
            <Text fontWeight="extrabold" py="2">
              Heading Description
            </Text>
          </FormLabel>
          <Input
            variant="outline"
            id="description"
            name="description"
            onChange={handleHeadingChange}
            placeholder="Enter heading description..."
          />
        </Box>
        <Button
          variant="solid"
          px="10"
          ml="10"
          py="3"
          mb="4"
          bg="blue.400"
          color="whiteAlpha.900"
          _hover={{ bg: "blue.500" }}
          onClick={createFormGroupHeading}
        >
          Create
        </Button>
      </Box>
      <Divider py="10" mb="10" />
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading align="center" fontWeight="extrabold" maxW="md" mx="auto">
          Select Form Field
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          mt="8"
          spacing="0"
          color={mode("inherit", "white")}
        >
          {InputVariants.map((field, index) => (
            <Center
              key={index}
              py="4"
              px="4"
              bg={mode("gray.50", "gray.800")}
              onMouseEnter={() => setHoveredVariant(index)}
              onMouseLeave={() => setHoveredVariant(null)}
              onClick={() => prepareFieldParamsAndDispatch(index)}
              _hover={{ bg: "blue.400", cursor: "pointer", boxShadow: "lg" }}
              transition="ease-out"
              rounded={{ md: "lg" }}
            >
              <Text
                fontSize="small"
                fontWeight="bold"
                color={hoveredVariant === index ? "gray.100" : "gray.500"}
              >
                {field}
              </Text>
            </Center>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default FormGenerator;
