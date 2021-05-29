import { Box, Text, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { useSelector } from "react-redux";

const SelectionCard = ({ title, onClick, type }) => {
  const [hoveredState, setHoveredState] = React.useState(false);
  const { designLibrary, formLibrary } = useSelector(
    (state) => state.formCreation
  );
  const slugifiedTitle = title
    .split(" ")
    .map((w) => w.toLowerCase())
    .join("-");

  return (
    <Box as="section" py="12" bg={mode("gray.100", "inherit")}>
      <Box maxW={{ base: "xl", md: "7xl" }} mx="auto" px={{ md: "8" }}>
        <Box
          maxW="xl"
          minH="36"
          mx="auto"
          py="6"
          px="8"
          cursor="pointer"
          onMouseEnter={() => setHoveredState(true)}
          onMouseLeave={() => setHoveredState(false)}
          rounded={{ md: "lg" }}
          color={
            designLibrary === slugifiedTitle || formLibrary === slugifiedTitle
              ? "whiteAlpha.900"
              : "blackAlpha.900"
          }
          bg={
            designLibrary === slugifiedTitle || formLibrary === slugifiedTitle
              ? "blue.400"
              : "whiteAlpha.900"
          }
          shadow={hoveredState ? "lg" : "md"}
          onClick={() => onClick(title, type)}
        >
          <Box
            mb="2"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              as="h1"
              textAlign="center"
              alignSelf="center"
              fontWeight="bold"
              fontSize="lg"
            >
              {title}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectionCard;
