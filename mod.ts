
const API = 'https://dogechain.info/api/v1';

export type Balance = {
	balance: string,
	confirmed: string,
	unconfirmed: string,
	success: number
};

export async function balance(address: string): Promise<Balance> {
	const response = await fetch(`${API}/address/balance/${address}`);
	const json = await response.json();
	return json;
}

export type Received = {
	received: string,
	success: number
};

export async function received(address: string): Promise<Received> {
	const response = await fetch(`${API}/address/received/${address}`);
	const json = await response.json();
	return json;
}
