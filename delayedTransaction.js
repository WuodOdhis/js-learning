function simulateTransaction(sender, receiver, amount) {
    return new Promise((resolve) => {
        console.log(`Processing transaction from ${sender} to ${receiver} for ${amount} ETH...`);
        setTimeout(() => {
            resolve(`Transaction complete: ${sender} sent ${amount} ETH to ${receiver}`);
        }, 2000); // 2 seconds delay
    });
}

simulateTransaction("Alice", "Bob", 5)
    .then(result => console.log(result));
