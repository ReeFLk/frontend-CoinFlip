"use client";

import { useState, useEffect } from "react";

import { Alert, AlertIcon } from "@chakra-ui/react";

import { useAccount } from "wagmi";

import Flip from "@/components/Flip";

const CoinFlip = () => {
    const { address, isConnected } = useAccount();
    return (
        <>
            {isConnected ? (
                <Flip />
            ) : (
                <Alert status="warning" width="380px">
                    <AlertIcon boxSize="28px" />
                    Please connect your wallet to our DApp.
                </Alert>
            )}
        </>
    );
};

export default CoinFlip;
