import {
  Badge,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Img,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import cogoToast from "cogo-toast";
import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import HeroMoodFirst from "../../../static/hero-mood-1.jpg";
import { DESIGN_LIBRARY, FORM_LIBRARY } from "../constants";
import InitialSelectionGrid from "../selectionLists/InitialSelectionGrid";

export const InitialSelection = () => {
  const history = useHistory();
  const { formLibrary, designLibrary } = useSelector(
    (state) => state.formCreation
  );
  const checkSelectionAndProceed = () => {
    if (designLibrary === null) {
      cogoToast.error("Please, select design system!");
      return;
    }
    if (formLibrary === null) {
      cogoToast.error("Please, select form handling library!");
      return;
    }
    history.push(`/shell/${formLibrary}/${designLibrary}`);
  };
  return (
    <Box
      as="section"
      bg={mode("gray.50", "gray.800")}
      pb="24"
      pos="relative"
      px={{ base: "6", lg: "12" }}
    >
      <Box maxW="7xl" mx="auto">
        <Box
          maxW={{ lg: "md", xl: "xl" }}
          pt={{ base: "20", lg: "40" }}
          pb={{ base: "16", lg: "24" }}
        >
          <HStack
            className="group"
            as="a"
            href="#"
            px="3"
            py="1"
            shadow="md"
            bg={mode("gray.200", "gray.700")}
            rounded="full"
            fontSize="sm"
            mb="8"
            display="inline-flex"
            minW="14rem"
          >
            <Badge
              px="2"
              variant="solid"
              colorScheme="green"
              rounded="full"
              textTransform="capitalize"
            ></Badge>
            <Box fontWeight="medium">Welcome to FormShaper</Box>
          </HStack>
          <Heading
            as="h1"
            size="2xl"
            lineHeight="1"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Create you Form with leading form and design libraries out there.
            <Box
              as="mark"
              color={mode("blue.500", "blue.300")}
              bg="transparent"
            ></Box>
          </Heading>
          <InitialSelectionGrid type={DESIGN_LIBRARY} />
          <Divider />
          <InitialSelectionGrid type={FORM_LIBRARY} />
          <Button
            size="lg"
            colorScheme="blue"
            height="14"
            px="8"
            fontSize="md"
            onClick={checkSelectionAndProceed}
          >
            Get Started With Your Form
          </Button>
        </Box>
      </Box>
      <Box
        pos={{ lg: "absolute" }}
        insetY={{ lg: "0" }}
        insetEnd={{ lg: "0" }}
        bg="gray.50"
        w={{ base: "full", lg: "50%" }}
        height={{ base: "96", lg: "full" }}
        sx={{
          clipPath: { lg: "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        }}
      >
        <Img
          height="100%"
          width="100%"
          objectFit="cover"
          src={HeroMoodFirst}
          alt="Lady working"
        />
      </Box>
    </Box>
  );
};
