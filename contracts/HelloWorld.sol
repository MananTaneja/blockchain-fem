// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract is a lot like class
// Has a constructor that is executed only once -> when deployed to the network
contract HelloWorld {
    function hello() public pure returns (string memory) {
        return "Hello, World!";
    }
}
