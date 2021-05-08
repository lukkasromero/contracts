// truffle migrate --network polygon -f 3 --dry-run 
// truffle run verify TheToken@0xC872AA87C7536325DA00668D8a0e4770B2dB7cB1 --network bsc

var Token = artifacts.require("TheToken");
var smartChef = artifacts.require("SmartYeti");

const web3ToWei = (amount) => web3.utils.toWei((amount).toString(), "ether");

module.exports = function (deployer, network, accounts) {
    const DEV = accounts[0]; 

    const blocksPerDay = 41000;
    // 80,000 matic to give away
    // blocks per week 287,000
    // Rewards per block .27874564

    deployer.then(async () => {
        try {

            // Create test token
            await deployer.deploy(Token);
            const TokenInstance = await Token.deployed(); console.log(`TokenInstance: ${TokenInstance.address}`)

            // Create smart chef
            let block = await web3.eth.getBlock("latest");
            console.log('Minting will start at block: ' + block.number + 100);
            // DEPLOY token and timelock
            await deployer.deploy(smartChef, 
                '0xF13e6278Da0717235BFC84D535C54461e957feED', // STONK
                TokenInstance.address, //'0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // wMatic
                '278745640000000000',
                block.number + 100,
                block.number + (blocksPerDay * 7)
                );
                //await deployer.deploy(smartChef);
                const ChefInstance = await smartChef.deployed(); console.log(`SmartChefInstance: ${ChefInstance.address}`)

            // Mint test coins
            console.log(`Balance DEV before: ${await TokenInstance.balanceOf(ChefInstance.address)}`)
            await TokenInstance.mint(ChefInstance.address, web3ToWei(80000), { from: DEV }) // - TESTING
            console.log(`Balance DEV after: ${await TokenInstance.balanceOf(ChefInstance.address)}`)
        
            console.log(`Successfully deployed the project to ${network}. `)

        } catch (e) {
            console.log(e);
        }

    })
}