export const abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_vrfCoordinator",
                type: "address",
                internalType: "address",
            },
            {
                name: "_keyHash",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_subscriptionId",
                type: "uint64",
                internalType: "uint64",
            },
            {
                name: "_callbackGasLimit",
                type: "uint32",
                internalType: "uint32",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "flip",
        inputs: [
            {
                name: "_choice",
                type: "uint8",
                internalType: "enum CoinFlip.Side",
            },
        ],
        outputs: [
            {
                name: "requestId",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "getEntranceFee",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "pure",
    },
    {
        type: "function",
        name: "rawFulfillRandomWords",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "randomWords",
                type: "uint256[]",
                internalType: "uint256[]",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "FlipRequested",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FlipResult",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "side",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "CoinFlip__InsufficientFunds",
        inputs: [],
    },
    {
        type: "error",
        name: "OnlyCoordinatorCanFulfill",
        inputs: [
            {
                name: "have",
                type: "address",
                internalType: "address",
            },
            { name: "want", type: "address", internalType: "address" },
        ],
    },
];
export const contractAddress = "0xBb2180ebd78ce97360503434eD37fcf4a1Df61c3";
