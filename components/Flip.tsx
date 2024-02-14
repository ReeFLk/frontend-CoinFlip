"use client";

// Chakra UI
import { Flex, Text, Input, Button, Heading, useToast } from "@chakra-ui/react";

//React
import { useState } from "react";

// Constants and types
import { contractAddress, abi } from "@/constants";

//Viem
import { parseEther } from "viem";

//Wagmi
import {
    prepareWriteContract,
    writeContract,
    waitForTransaction,
} from "@wagmi/core";

const Flip = () => {
    const [amount, setAmount] = useState<string>("");

    const toast = useToast();

    const flip = async () => {
        try {
            let money = parseEther(amount);
            const { request } = await prepareWriteContract({
                address: contractAddress,
                abi: abi,
                functionName: "flip",
                value: money,
                args: [0],
            });
            console.log(request);
            const { hash } = await writeContract(request);

            const data = await waitForTransaction({
                hash: hash,
            });
            toast({
                title: "You flip the coin `${data}`.",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
            console.log(data);
        } catch (e) {
            console.log(e);
            toast({
                title: "An error occured",
                description: `${e}`,
                status: "error",
                duration: 4000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Heading marginTop="2rem">Coin Flip</Heading>
            <Flex marginTop="1rem">
                <Input
                    placeholder="Your bet Amount"
                    size="lg"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <Button colorScheme="purple" size="lg" onClick={() => flip()}>
                    Flip
                </Button>
            </Flex>
        </>
    );
};

export default Flip;
