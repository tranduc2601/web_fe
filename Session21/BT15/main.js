let amount = 3450000; // Change this value to test with different inputs

if (amount % 1000 !== 0) {
    console.log("Số tiền nhập vào phải chia hết cho 1000.");
} else {
    const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    const result = {};

    for (let i = 0; i < denominations.length; i++) {
        let denom = denominations[i];
        if (amount >= denom) {
            result[denom] = Math.floor(amount / denom);
            amount %= denom;
        }
    }

    for (let denom in result) {
        console.log(`${Number(denom).toLocaleString()} - ${result[denom]} tờ`);
    }
}

// Example usage:
amount = 3552000; // Change this value to test with another input
if (amount % 1000 !== 0) {
    console.log("Số tiền nhập vào phải chia hết cho 1000.");
} else {
    const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    const result = {};

    for (let i = 0; i < denominations.length; i++) {
        let denom = denominations[i];
        if (amount >= denom) {
            result[denom] = Math.floor(amount / denom);
            amount %= denom;
        }
    }

    for (let denom in result) {
        console.log(`${Number(denom).toLocaleString()} - ${result[denom]} tờ`);
    }
}
