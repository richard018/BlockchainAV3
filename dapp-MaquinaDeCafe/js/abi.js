var abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_valor",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_sabor",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "buscarSabor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cafeteria",
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
		"inputs": [
			{
				"internalType": "string",
				"name": "_saborsolicitado",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_valorpedido",
				"type": "uint256"
			}
		],
		"name": "pedirCafe",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "valorDoCafe",
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