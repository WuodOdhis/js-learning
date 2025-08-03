// Simulate a simple blockchain transaction log
let blockchain = [];

function addTransaction(sender, receiver, amount) {
    const transaction = {
        sender,
        receiver,
        amount,
        timestamp: new Date().toISOString()
    };
    blockchain.push(transaction);
    console.log("Transaction added:", transaction);
}

// Example usage
addTransaction("Alice", "Bob", 10);
addTransaction("Bob", "Charlie", 5);

console.log("Blockchain:", blockchain);
