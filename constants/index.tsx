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
                name: "_link",
                type: "address",
                internalType: "address",
            },
            {
                name: "_keyHash",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_subId",
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
        name: "CoinFlipped",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "player",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "CoinFlippedAndLose",
        inputs: [
            {
                name: "requestId",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
                indexed: true,
                internalType: "uint256",
            },
            {
                name: "player",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "FlipRequested",
        inputs: [],
        anonymous: false,
    },
    {
        type: "error",
        name: "CoinFlip__InsufficientBetAmount",
        inputs: [],
    },
    { type: "error", name: "CoinFlip__TransferFailed", inputs: [] },
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
export const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
