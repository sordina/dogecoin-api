
type Balance = {
	balance: string,
	confirmed: string,
	unconfirmed: string,
	success: number
};

export async function balance(address: string): Promise<Balance> {
	const response = await fetch(`https://dogechain.info/api/v1/address/balance/${address}`);
	const json = await response.json();
	return json;
}
