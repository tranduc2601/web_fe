let number = parseInt(prompt("Nhập vào một số nguyên:"));
let isPrime = true;
if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    alert(`${number} là số nguyên tố.`);
} else {
    alert(`${number} không phải là số nguyên tố.`);
}
