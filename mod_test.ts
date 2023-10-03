
/**
 * These tests simply assert that valid and invalid requests can be issued
 * and that they succeed or throw errors respectively. This is because
 * the API doesn't have any stable queries - e.g. transaction info.
 */
import { assert, assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import * as doge from './mod.ts'

const VALID_ADDRESS = 'AC8Q9Z4i4sXcbW7TV1jqrjG1JEWMdLyzcy';
const INVALID_ADDRESS = 'XXXAC8Q9Z4i4sXcbW7TV1jqrjG1JEWMdLyzcy';

/**
 * Helper function to test valid and invalid calls to a method
 */
function test_method(n: string, m: (k: string) => any) {
	Deno.test(`valid ${n}`, async () => {
		const result: any = await m(VALID_ADDRESS);
		assert(true);
	});

	Deno.test(`invalid ${n}`, async () => {
		try {
			const result = await m(INVALID_ADDRESS);
		} catch(e) {
			assert(doge.isDogeError(e));
			return;
		}
		assert(false);
	});
}

test_method('balance', doge.balance);
test_method('received', doge.received);
test_method('sent', doge.sent);
test_method('unspent', doge.unspent);
test_method('transactions', doge.transactions);
test_method('transaction_count', doge.transaction_count);

