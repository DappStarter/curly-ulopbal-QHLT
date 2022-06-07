require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture struggle renew saddle arrange gesture ghost army giggle'; 
let testAccounts = [
"0x827fdb09ed750dda792ce834a287fffc1e633a3069546fdd406f9e7ea9438081",
"0x8da08662a0341fcb037d2c516bef15334db47bd650972fcb3cc820bfcab89e5f",
"0x8924c3ef30ae1e2c6deaa1deed719593b10b1901c8756358efdeb3767d856a59",
"0x7ead0feb8bd15e814188043c5b30b2235823d94d5e9275267c0542fd5e4d249c",
"0x00bb0d7be3a04ee4c9df3f89d4d24825124549bbb19bc08994efe1a3a48c0551",
"0x27509aa7e230d08eb4767e3d542bd253fa57292a24b01651506bed3129216403",
"0x02d32c8eabf25ef04345526a51b8da150e3dc9a21ada008d98067a5f249c43ac",
"0x13a6248735900a9dae4c62b23bd53740751ca15e8f4976650486263daaa8450e",
"0x3556ae251dc4d9a61d21747b6bfd1a1761609a82b7b0972682f2148d093dc0b9",
"0x1386e583fcf68af680fce3594227990bdd14bed9ea156714e47cf8951ce936d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

