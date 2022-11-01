require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remain collect harvest clog sun shine'; 
let testAccounts = [
"0xdd857ac03a7cfbdb9941971b8f1c158c2cfea26fd574c840980a36ae3e9111f3",
"0xf4cac901f1ccc8f626ff578b5164bfe39ffbd73d3a740151c9e0dc945173c4fe",
"0xb36a75b8c89036841cc0c9b9e05ac7153968e78c788d19f7897c3014102c4888",
"0xaade478c7c72586d7bc30ac25fc1cb5cd07c7d75dd9ffa0332aebac6fa1ff38e",
"0x0dfe37b5d7fbb44943d7b5378df700835d8bc543aa6d60322fc9c1d083068371",
"0xd761307c32a768041954f1b3186b7a649b6b702f586277eb131d482583abb50e",
"0x843435b416141190a46e28d46ecb45099f732fd58449f9e03054d741655a7da0",
"0xbfc0c6df2bcd68f29ede5e7d2df2956a9a1f41f740337384ff5365d61c86dee5",
"0xd4256712f13f332e43a083091dfa6b22132ada5a1cae8dd65754f3902a847954",
"0xc747883e9e7994ca2cdc28cd1913bcd100cc1a0ad47abd011a1a43e559af807b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

