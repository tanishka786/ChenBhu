// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract Lock {
    string public lockedMessage;

    constructor(string memory _lockedMessage) {
        lockedMessage = _lockedMessage;
    }
}