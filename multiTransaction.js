function simulateTransaction(sender, receiver, amount) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; // 1-4 seconds
        setTimeout(() => {
            if (Math.random() < 0.2) { // 20% chance of failure
                reject(`Transaction failed: ${sender} to ${receiver} for ${amount} ETH`);
            } else {
                resolve(`Transaction complete: ${sender} sent ${amount} ETH to ${receiver}`);
            }
        }, delay);
    });
}

async function processTransactions() {
    const transactions = [
        { sender: "Alice", receiver: "Bob", amount: 5 },
        { sender: "Bob", receiver: "Charlie", amount: 2 },
        { sender: "Charlie", receiver: "Dave", amount: 3 }
    ];

    for (const tx of transactions) {
        try {
            const result = await simulateTransaction(tx.sender, tx.receiver, tx.amount);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}

processTransactions();
