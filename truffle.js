module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
    ,
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x0dca380b23d519214Ac2425E134aa4eA87F6F786", // default address to use for any transaction Truffle makes during migrations  
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
      //rinkeby contrac:0x137c667edAd41Dd1526e4944502726c24EAC7E10 03/12/2018
    }
  }
};
