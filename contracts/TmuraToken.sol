pragma solidity >=0.4.21 <0.6.0;

contract TmuraToken {
  // Constractor
  // Set the total number of tokens
  // read the total token
  uint256 public totalSupply;

  constructor() public {
    totalSupply = 1000000;

  }
}