
// deno-lint-ignore-file no-explicit-any

const API = 'https://dogechain.info/api/v1';

export type ResponseError = {
	error: string,
	success: 0
};

function isResponseError(value: any): value is ResponseError {
	return value.success === 0;
}

export class DogeError extends Error {
	doge_error: true;
	details: ResponseError;
  constructor(info: any) {
    super();
    this.doge_error = true;
    this.details = info;
  }
}

export function isDogeError(value: any): value is DogeError {
	return value instanceof DogeError;
}

function guardError(value: any) {
	if(isResponseError(value)) {
		throw new DogeError(value);
	}
}

export type Balance = {
	balance: string,
	confirmed: string,
	unconfirmed: string,
	success: number
};

export async function balance(address: string): Promise<Balance> {
	const response = await fetch(`${API}/address/balance/${address}`);
	const json = await response.json();
	guardError(json);
	return json;
}

export type Received = {
	received: string,
	success: number
};

export async function received(address: string): Promise<Received> {
	const response = await fetch(`${API}/address/received/${address}`);
	const json = await response.json();
	guardError(json);
	return json;
}

export type Sent = {
	sent: string,
	success: number
};

export async function sent(address: string): Promise<Sent> {
	const response = await fetch(`${API}/address/sent/${address}`);
	const json = await response.json();
	guardError(json);
	return json;
}

export type UnspentItem = {
	tx_hash: string,
	tx_output_n: number,
	script: string,
	address: string,
	value: number,
	confirmations: number,
	tx_hex: string
};

export type Unspent = {
	unspent_outputs: Array<UnspentItem>,
	success: number
};

export async function unspent(address: string): Promise<Unspent> {
	const response = await fetch(`${API}/address/unspent/${address}`);
	const json = await response.json();
	guardError(json);
	return json;
}

export type TransactionItem = {
	hash: string,
	value: string,
	time: number,
	block: number,
	price: string
};

export type Transactions = {
	transactions: Array<UnspentItem>,
	success: number
};

export async function transactions(address: string): Promise<Transactions> {
	const response = await fetch(`${API}/address/transactions/${address}`);
	const json = await response.json();
	guardError(json);
	return json;
}

export type TransactionCount = {
	transaction_count: {
		sent: number,
		received: number,
		total: number
	},
	success: number
};

export async function transaction_count(address: string): Promise<TransactionCount> {
	const response = await fetch(`${API}/address/transaction_count/${address}`);
	const json = await response.json();
	guardError(json);
	return json;
}

