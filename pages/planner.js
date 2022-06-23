import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  Input,
} from "@chakra-ui/react";
import { Box, SimpleGrid } from "@chakra-ui/react";
export default function planner() {
  return (
    <Box>
      <Box>
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
      </Box>
      <SimpleGrid columns={6} spacing={0}>
        <Box bg="white" height="40px" width="60px" className="shadow-md"></Box>
        <Box bg="white" height="40px" width="60px" className="shadow-md"></Box>
        <Box bg="white" height="40px" width="60px" className="shadow-md"></Box>
        <Box bg="white" height="40px" width="60px" className="shadow-md"></Box>
        <Box bg="white" height="40px" width="60px" className="shadow-md"></Box>
        <Box bg="white" height="40px" width="60px" className="shadow-md"></Box>
      </SimpleGrid>
    </Box>
  );
}
