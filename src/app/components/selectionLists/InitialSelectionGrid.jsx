import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch } from "react-redux";
import {
  selectDesignLib,
  selectFormLib,
} from "../../../features/formCreator/formCreationSlice";
import { DESIGN_LIBRARY, FORM_LIBRARY } from "../constants";
import SelectionCard from "./SelectionCard";
const designLibs = ["Ant Design", "Material UI", "Chakra UI"];
const formLibs = ["Formik", "React-Hook-form", "Simple React form"];

const InitialSelectionGrid = ({ type }) => {
  const dispatch = useDispatch();

  const selectLibrary = (name, type) => {
    const slugifiedName = name
      .split(" ")
      .map((w) => w.toLowerCase())
      .join("-");
    if (type === DESIGN_LIBRARY) {
      dispatch(selectDesignLib(slugifiedName));
    } else if (type === FORM_LIBRARY) {
      dispatch(selectFormLib(slugifiedName));
    }
  };
  return (
    <Box as="section" py="8">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading
          align="center"
          fontWeight="extrabold"
          maxW="md"
          mx="auto"
          marginBottom="0"
        >
          Choose {type === DESIGN_LIBRARY ? "Design Kit" : "Form Library"}
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          mt="8"
          spacing="6"
          color={mode("inherit", "white")}
        >
          {type === DESIGN_LIBRARY
            ? designLibs.map((lib, idx) => (
                <Center
                  py="8"
                  px="8"
                  bg={mode("gray.50", "gray.800")}
                  rounded={{ md: "lg" }}
                  key={idx}
                >
                  <SelectionCard
                    title={lib}
                    onClick={selectLibrary}
                    type={DESIGN_LIBRARY}
                  />
                </Center>
              ))
            : formLibs.map((lib, idx) => (
                <Center
                  py="8"
                  px="8"
                  bg={mode("gray.50", "gray.800")}
                  rounded={{ md: "lg" }}
                  key={idx}
                >
                  <SelectionCard
                    title={lib}
                    onClick={selectLibrary}
                    type={FORM_LIBRARY}
                  />
                </Center>
              ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default InitialSelectionGrid;
