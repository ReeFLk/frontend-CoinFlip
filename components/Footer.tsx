"use client";

// ChakraUI
import { Flex, Text } from "@chakra-ui/layout";

export const Footer = () => {
    return (
        <Flex alignItems="center" justifyContent="center" p="2rem">
            <Text>&copy; ReeFLk {new Date().getFullYear()}</Text>
        </Flex>
    );
};
