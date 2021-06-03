import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useClipboard } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import {
  Box,
  Flex,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/layout";
// import { Select } from "@chakra-ui/select";
// import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNextElementToTextResult,
  clearCodeAsTextValue,
} from "../../../features/formCreator/formCreationSlice";
// import ChakraCard from "./reusable/ChakraCard";
// import ChakraFieldGroup from "./reusable/ChakraFieldGroup";
import ChakraHeadingGroup from "./reusable/ChakraHeadingGroup";
import { AiTwotoneDelete } from "react-icons/ai";
import { removeFormElement } from "../../../features/formCreator/formCreationSlice";

const FormikChakraUi = ({ ...props }) => {
  const dispatch = useDispatch();
  const { formFields } = useSelector((state) => state.formCreation);
  const [hoverIndex, setHoverIndex] = React.useState("");
  const [formElements, setFormElements] = React.useState([]);

  useEffect(() => {
    dispatch(clearCodeAsTextValue());
    dispatch(
      addNextElementToTextResult({
        id: "form-header",
        content: `<Formik initialValues={} validationSchema={} onSubmit={}> {({isSubmitting}) => ( <Form>`,
      })
    );
    const FormElements = formFields.map((field) => {
      switch (field.type) {
        case "heading": {
          dispatch(
            addNextElementToTextResult({
              id: "header",
              content: `<Stack  spacing="1" {...stackProps}>
                  <Heading size="md" fontWeight="semibold">
                    ${field.title}
                  </Heading>
                  <Text color={useColorModeValue("gray.600", "gray.400")}>
                    ${field.description}
                  </Text>
                </Stack>
              `,
            })
          );
          return (
            <Flex
              onMouseEnter={() => setHoverIndex(field.id)}
              onMouseLeave={() => setHoverIndex(null)}
              position="relative"
            >
              <ChakraHeadingGroup
                key={field.id}
                title={field.title}
                description={field.description}
              />
              {hoverIndex === field.id && (
                <Box
                  cursor="pointer"
                  ml="10"
                  width="12"
                  position="absolute"
                  right="0"
                  top="-3"
                  onClick={() => dispatch(removeFormElement(field.id))}
                >
                  <AiTwotoneDelete color="red" size="30" />
                </Box>
              )}
            </Flex>
          );
        }
        case "text": {
          dispatch(
            addNextElementToTextResult({
              id: field.id,
              content: `
                <FormControl  key={field.id} >
                  <FormLabel htmlFor="text">Text Input Label</FormLabel>
                  <Input type="text" name="field.name"/>
                </FormControl>                
            `,
            })
          );
          return (
            <Flex
              onMouseEnter={() => setHoverIndex(field.id)}
              onMouseLeave={() => setHoverIndex(null)}
              position="relative"
            >
              <FormControl key={field.id}>
                <FormLabel htmlFor="text">Text Input Label</FormLabel>
                <Input type="text" />
              </FormControl>
              {hoverIndex === field.id && (
                <Box
                  cursor="pointer"
                  ml="10"
                  width="12"
                  position="absolute"
                  right="0"
                  top="-3"
                  onClick={() => dispatch(removeFormElement(field.id))}
                >
                  <AiTwotoneDelete color="red" size="30" />
                </Box>
              )}
            </Flex>
          );
        }
        case "password": {
          dispatch(
            addNextElementToTextResult({
              id: field.id,
              content: `
                <FormControl  key={field.id}>
                  <FormLabel htmlFor="password">Your Password</FormLabel>
                  <Input type="password" id="password" />
                </FormControl>                
               `,
            })
          );
          return (
            <Flex
              onMouseEnter={() => setHoverIndex(field.id)}
              onMouseLeave={() => setHoverIndex(null)}
              position="relative"
            >
              <FormControl key={field.id}>
                <FormLabel htmlFor="password">Your Password</FormLabel>
                <Input type="password" id="password" />
              </FormControl>
              {hoverIndex === field.id && (
                <Box
                  cursor="pointer"
                  ml="10"
                  width="12"
                  position="absolute"
                  right="0"
                  top="-3"
                  onClick={() => dispatch(removeFormElement(field.id))}
                >
                  <AiTwotoneDelete color="red" size="30" />
                </Box>
              )}
            </Flex>
          );
        }
        case "email": {
          dispatch(
            addNextElementToTextResult({
              id: field.id,
              content: `<FormControl  key={field.id}>
                <FormLabel htmlFor="email">Your email</FormLabel>
                <Input type="email" id="email" />
                </FormControl>              
              }`,
            })
          );
          return (
            <Flex
              onMouseEnter={() => setHoverIndex(field.id)}
              onMouseLeave={() => setHoverIndex(null)}
              position="relative"
            >
              <FormControl key={field.id}>
                <FormLabel htmlFor="email">Your email</FormLabel>
                <Input type="email" id="email" />
              </FormControl>
              {hoverIndex === field.id && (
                <Box
                  cursor="pointer"
                  ml="10"
                  width="12"
                  position="absolute"
                  right="0"
                  top="-3"
                  onClick={() => dispatch(removeFormElement(field.id))}
                >
                  <AiTwotoneDelete color="red" size="30" />
                </Box>
              )}
            </Flex>
          );
        }
        case "textarea": {
          return null;
        }
        default:
          return null;
      }
    });
    setFormElements(FormElements);
  }, [formFields, dispatch, hoverIndex]);

  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      px={{ base: "4", md: "10" }}
      py="16"
    >
      <Box maxW="xl" mx="auto">
        <Stack spacing="12">
          <Stack as="section" spacing="6" {...props}>
            {formElements}
            {/* <ChakraHeadingGroup
              title="Account Settings"
              description="Change your profile, request your data, and more"
            />
            <ChakraCard>
              <Stack divider={<StackDivider />} spacing="6">
                <ChakraFieldGroup
                  title="Name &amp; Avatar"
                  description="Change your name and profile picture"
                >
                  <HStack spacing="4">
                    <Avatar
                      src="https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80"
                      name="Lisa Turner"
                    />
                    <Box>
                      <Text>Lisa Turner</Text>
                      <Text color="gray.500" fontSize="sm">
                        Joined March, 2010
                      </Text>
                    </Box>
                  </HStack>
                  <HStack mt="5">
                    <Button size="sm" fontWeight="normal">
                      Change name
                    </Button>
                    <Button size="sm" fontWeight="normal">
                      Change gravatar
                    </Button>
                  </HStack>
                </ChakraFieldGroup>

                <ChakraFieldGroup
                  title="Login details"
                  description="Change your email and password"
                >
                  <Text fontSize="sm">lisat09@example.com</Text>
                  <HStack mt="5">
                    <Button size="sm" fontWeight="normal">
                      Change email
                    </Button>
                    <Button size="sm" fontWeight="normal">
                      Change password
                    </Button>
                  </HStack>
                </ChakraFieldGroup>

                <ChakraFieldGroup
                  title="Language"
                  description="Change your preferred language and currency"
                >
                  <Stack
                    direction={{ base: "column", md: "row" }}
                    width="full"
                    spacing="4"
                  >
                    <FormControl id="language">
                      <FormLabel fontSize="sm">Language</FormLabel>
                      <Select size="sm" maxW="2xs">
                        <option>English</option>
                        <option>Hebrew</option>
                        <option>Arabic</option>
                      </Select>
                    </FormControl>

                    <FormControl id="currency">
                      <FormLabel fontSize="sm">Currency</FormLabel>
                      <Select size="sm" maxW="2xs">
                        <option>USD ($)</option>
                        <option>AED (dh)</option>
                        <option>EUR (€)</option>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Button mt="5" size="sm" fontWeight="normal">
                    Save Changes
                  </Button>
                </ChakraFieldGroup>
              </Stack>
            </ChakraCard> */}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default FormikChakraUi;
