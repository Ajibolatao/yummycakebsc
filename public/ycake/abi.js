let abi = [
          	{
          		"anonymous": false,
          		"inputs": [
          			{
          				"indexed": false,
          				"internalType": "address",
          				"name": "winner",
          				"type": "address"
          			},
          			{
          				"indexed": false,
          				"internalType": "uint256",
          				"name": "round",
          				"type": "uint256"
          			},
          			{
          				"indexed": false,
          				"internalType": "uint256",
          				"name": "wonAmount",
          				"type": "uint256"
          			}
          		],
          		"name": "winnerEvent",
          		"type": "event"
          	},
          	{
          		"inputs": [],
          		"name": "endRound",
          		"outputs": [],
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"inputs": [
          			{
          				"internalType": "uint256",
          				"name": "number",
          				"type": "uint256"
          			}
          		],
          		"name": "setNumberOfTickets",
          		"outputs": [],
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"inputs": [
          			{
          				"internalType": "bool",
          				"name": "ispaused",
          				"type": "bool"
          			}
          		],
          		"name": "setPauseLottery",
          		"outputs": [],
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"inputs": [
          			{
          				"internalType": "uint256",
          				"name": "roundNum",
          				"type": "uint256"
          			}
          		],
          		"name": "setRound",
          		"outputs": [],
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"inputs": [
          			{
          				"internalType": "uint256",
          				"name": "amount",
          				"type": "uint256"
          			}
          		],
          		"name": "setTicketAmount",
          		"outputs": [],
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "trf",
          		"outputs": [],
          		"stateMutability": "nonpayable",
          		"type": "function"
          	},
          	{
          		"stateMutability": "payable",
          		"type": "receive"
          	},
          	{
          		"inputs": [],
          		"name": "amountWon",
          		"outputs": [
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "getLotteryPause",
          		"outputs": [
          			{
          				"internalType": "bool",
          				"name": "",
          				"type": "bool"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "getState",
          		"outputs": [
          			{
          				"internalType": "address",
          				"name": "",
          				"type": "address"
          			},
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			},
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "lastWinner",
          		"outputs": [
          			{
          				"internalType": "address",
          				"name": "",
          				"type": "address"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "lotterypause",
          		"outputs": [
          			{
          				"internalType": "bool",
          				"name": "",
          				"type": "bool"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "numberOfTickets",
          		"outputs": [
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "round",
          		"outputs": [
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "ticketCost",
          		"outputs": [
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	},
          	{
          		"inputs": [],
          		"name": "ticketSold",
          		"outputs": [
          			{
          				"internalType": "uint256",
          				"name": "",
          				"type": "uint256"
          			}
          		],
          		"stateMutability": "view",
          		"type": "function"
          	}
          ]