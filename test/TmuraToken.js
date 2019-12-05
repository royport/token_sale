var TmuraToken = artifacts.require("./TmuraToken.sol");

contract ('TmuraToken', function(accounts){
it ('set the total supply on deployment', function(){
  return TmuraToken.deployed().then(function(instance){
    tokenInstance = instance;
    return tokenInstance.totalSupply();
  }).then(function(totalSupply){
    assert.equal(totalSupply.toNumber(),1000000, 'sets the total supply to 1 million');
  })
});
})