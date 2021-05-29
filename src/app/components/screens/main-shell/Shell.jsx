import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router";
import FormDisplay from "../../formCreation/FormDisplay";
import FormGenerator from "../../formCreation/FormGenerator";
import { MobileTopBar } from "./MobileTopBar";
import { Sidebar } from "./Sidebar";

const Shell = () => {
  const { form, design } = useParams();
  console.log("form selecteed: ", form, "design sytem: ", design);
  return (
    <Flex h="100vh" flexDirection="column">
      <MobileTopBar />
      <Flex flex="1" overflow="hidden">
        <Sidebar display={{ base: "none", md: "flex" }} />
        <Flex
          display={{ base: "none", lg: "block" }}
          width="max-content"
          direction="column"
          overflowY="auto"
          borderRightWidth="1px"
          p="6"
        >
          <Box borderWidth="2px" rounded="base" borderStyle="dashed" h="full">
            <FormGenerator />
          </Box>
        </Flex>
        <Flex flex="1" p="6">
          <Box
            borderWidth="2px"
            rounded="base"
            borderStyle="dashed"
            h="full"
            w="full"
          >
            <FormDisplay />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Shell;
