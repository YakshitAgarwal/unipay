//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Unipay {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    function changeOwner(address _owner) external onlyOwner {
        owner = _owner;
    }
}
