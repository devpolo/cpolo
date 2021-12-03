// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract CryptoPoloToken is ERC777 {
  constructor(uint256 initialSupply, address[] memory defaultOperators)
    ERC777("Crypto Polo Token", "CPOLO", defaultOperators)
  {
    _mint(msg.sender, initialSupply, "", "");
  }
}
