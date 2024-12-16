const IPFS = require('ipfs-http-client');
const fs = require('fs');

// Create an IPFS client instance (Infura public gateway)
const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

async function uploadToIPFS(filePath) {
    try {
        const file = fs.readFileSync(filePath);
        const result = await ipfs.add({ content: file });
        console.log('IPFS CID:', result.path); // IPFS CID
        return result.path;
    } catch (err) {
        console.error('Error uploading to IPFS:', err);
    }
}

// Example Usage
const filePath = './LJ001-0001.wav';
uploadToIPFS(filePath).then((hash) => {
    console.log('Uploaded to IPFS:', `https://ipfs.io/ipfs/${hash}`);
});
