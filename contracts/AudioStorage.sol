// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AudioStorage {
    struct Audio {
        string ipfsHash;
        address uploader;
        uint256 timestamp;
    }

    mapping(uint256 => Audio) public audios;
    uint256 public audioCount;

    event AudioUploaded(uint256 id, string ipfsHash, address uploader, uint256 timestamp);

    function uploadAudio(string memory _ipfsHash) public {
        audios[audioCount] = Audio(_ipfsHash, msg.sender, block.timestamp);
        emit AudioUploaded(audioCount, _ipfsHash, msg.sender, block.timestamp);
        audioCount++;
    }

    function getAudio(uint256 _id) public view returns (Audio memory) {
        return audios[_id];
    }
}
