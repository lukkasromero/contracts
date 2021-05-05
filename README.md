# STONKZ Contracts

MasterChef
[0xe823192885192092E73E42AAB42D23bf18276c55](https://explorer-mainnet.maticvigil.com/address/0xe823192885192092E73E42AAB42D23bf18276c55)

STONK Token
[0xF13e6278Da0717235BFC84D535C54461e957feED](https://explorer-mainnet.maticvigil.com/address/0xF13e6278Da0717235BFC84D535C54461e957feED)

Timelock
[0xDF4aCdF70347E64AFFbEA9cCc21B21e0c11041a5](https://explorer-mainnet.maticvigil.com/address/0xDF4aCdF70347E64AFFbEA9cCc21B21e0c11041a5)

# Local Development

The following assumes the use of `node@>=10` and Truffle Suite.

## Install Dependencies

`npm install`

## Add wallet

`add file named .secret to root dir containing mnumonic (DO NOT CHECK IN)`

## Compile Contracts

`truffle compile`

## Run Deployment

`truffle migrate --network development/testnet/bsc`