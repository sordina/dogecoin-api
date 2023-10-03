
// deno-lint-ignore-file no-explicit-any
//
/**
 * These tests simply assert that valid and invalid requests can be issued
 * and that they succeed or throw errors respectively. This is because
 * the API doesn't have any stable queries - e.g. transaction info.
 */
import { assert } from "https://deno.land/std@0.202.0/assert/mod.ts";
import * as doge from './mod.ts'

const VALID_ADDRESS = 'AC8Q9Z4i4sXcbW7TV1jqrjG1JEWMdLyzcy';
const INVALID_ADDRESS = 'XXXAC8Q9Z4i4sXcbW7TV1jqrjG1JEWMdLyzcy';

/**
 * Helper function to test valid and invalid calls to a method
 */
function test_method(m: (k: string) => any) {
	const n = m.name;
	Deno.test(`valid ${n}`, async () => {
		await m(VALID_ADDRESS);
		assert(true);
	});

	Deno.test(`invalid ${n}`, async () => {
		try {
			await m(INVALID_ADDRESS);
		} catch(e) {
			assert(doge.isDogeError(e));
			return;
		}
		assert(false);
	});
}

test_method(doge.balance);
test_method(doge.received);
test_method(doge.sent);
test_method(doge.unspent);
test_method(doge.transactions);
test_method(doge.transaction_count);

