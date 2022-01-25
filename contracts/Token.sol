// SPDX-License-Identifier: MIT

// solidity version
pragma solidity ^0.8.0;

// import open zeppelin ERC777 open sourced lib
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC777/ERC777.sol
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

// contract creation
contract Token is ERC777 {
  // at the contract creation, do this:
  constructor(uint256 initialSupply, address[] memory defaultOperators)
    ERC777("Max and Gaspard", "MAGA", defaultOperators)
  {
    // create tokens
    _mint(msg.sender, initialSupply * (10**18), "", "");
  }
}
