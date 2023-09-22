# DogeCoin API

Deno Wrapper for https://dogechain.info/api/blockchain_api

Listing on deno.land: https://deno.land/x/dogecoin@v0.2

## Usage

From the repl:

```
$ deno repl
> import * as doge from 'https://deno.land/x/dogecoin@v0.1';
> doge
[Module: null prototype] {
  DogeError: [class DogeError extends Error],
  isDogeError: [Function: isDogeError],
  balance: [AsyncFunction: balance],
  received: [AsyncFunction: received],
  sent: [AsyncFunction: sent],
  transaction_count: [AsyncFunction: transaction_count],
  transactions: [AsyncFunction: transactions],
  unspent: [AsyncFunction: unspent]
}
> await doge.transaction_count('AC8Q9Z4i4sXcbW7TV1jqrjG1JEWMdLyzcy');
{
  transaction_count: { sent: 54, received: 445, total: 446 },
  success: 1
}
```

All functions should throw exceptions on error which you can narrow with `isDogeError`.


