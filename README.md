# Project Repository

Welcome to this repository:

- **Blockchain-based File Storage**: A decentralized system for secure file storage using blockchain technology.
- **WebRTC Starter**: A WebRTC-based application enabling real-time video and audio communication.

---

## Blockchain-based File Storage

### Overview
This project implements a decentralized file storage system using blockchain technology. Users can securely upload files, with an immutable record of all transactions.

### Features
- Decentralized file storage using blockchain.
- Secure file uploads and downloads.
- Immutable records of file transactions.
- Two Proof of Work (PoW) algorithms for block mining:
  - Random Nonce Generation.
  - Incremental Nonce.
- User-friendly web interface for file management.

### Technologies Used
- **Backend**: Python, Flask, SHA256 Cryptographic Algorithm
- **Frontend**: HTML, CSS, JavaScript
- **Blockchain Interaction**: Web3.js (for Ethereum integration)

### How to Run the Application

#### Prerequisites
- Python 3.x
- Node.js (for Web3.js integration)
- Pip (Python package manager)

#### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd blockchain-based-file-storage
   ```
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Install Node.js dependencies:
   ```bash
   npm install
   ```

#### Running the Application
1. Start the blockchain server/peer:
   ```bash
   python peer.py
   ```
2. Start the client application:
   ```bash
   python run_app.py
   ```
3. Open your web browser and navigate to:
   ```
   http://localhost:9000
   ```
4. To experiment with Proof of Work algorithms:
   ```bash
   python POW_Comparison.py
   ```

#### How It Works
- Users upload files, which are stored in blocks on the blockchain.
- Each block contains metadata about the file (e.g., username, file size, file data).
- The system validates and adds new blocks to the blockchain using PoW algorithms.

#### Proof of Work Algorithms
- **Random Nonce Generation**: Generates a random nonce for each hashing attempt.
- **Incremental Nonce**: Increments the nonce by one for each hashing attempt.

#### Performance Comparison
Run the `POW_Comparison.py` script to measure and compare the performance of the two PoW algorithms at various difficulty levels.

#### Security
- Files cannot be modified or deleted once stored, ensuring secure and reliable file storage.

---

## WebRTC Starter Project

### Overview
This project is a WebRTC-based application that enables real-time communication between users through video and audio streaming. It also includes screen sharing and speech-to-symbol translation features.

### Features
- Real-time video and audio communication.
- Screen sharing functionality.
- Speech-to-symbol translation for accessibility.
- User-friendly interface for initiating and managing calls.
- Support for multiple users in a meeting.

### Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap (for styling)
- **Backend**: Express.js, Socket.IO (for signaling)
- **WebRTC API**: For real-time communication

### How to Run the Application

#### Prerequisites
- Node.js
- npm (Node package manager)

#### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd webrtc-starter-main
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```

#### Running the Application
1. Start the server:
   ```bash
   node server.js
   ```
2. Open your web browser and navigate to:
   ```
   https://localhost:5000
   ```
3. Allow access to your camera and microphone when prompted.

---

Feel free to explore, experiment, and expand these projects to suit your needs! If you encounter any issues or have suggestions, please create an issue or submit a pull request.

