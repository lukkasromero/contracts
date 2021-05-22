// Deploys a test chef and loads it with test tokens.  Runs the line below to deploy.
// truffle migrate --network polygon -f 4 --dry-run 

var smartChef = artifacts.require("ProfitSharingChef");

const web3ToWei = (amount) => web3.utils.toWei((amount).toString(), "ether");

module.exports = function (deployer, network, accounts) {
    const DEV = accounts[0]; 

    const blocksPerDay = 41000;
    // 1,000 matic to give away
    // blocks per week 287,000
    // Rewards per block .061


    deployer.then(async () => {
        try {

            // Deploy chef
            await deployer.deploy(smartChef, 
                '0xF13e6278Da0717235BFC84D535C54461e957feED', // STONK
                '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // wMatic
                '61168981481481200',
                14504555,
                14627984,
                1000, // 10% deposit fee
                '0x40764fc19cdd4F4Befe0182423E38E2556290ab0' // Fee address
                );
                const ChefInstance = await smartChef.deployed(); console.log(`SmartChefInstance: ${ChefInstance.address}`)
        
            console.log(`Successfully deployed the project to ${network}. `)
            
        } catch (e) {
            console.log(e);
        }

    })
}