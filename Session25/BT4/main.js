function isPrimeNumber(num) {
    if (typeof num !== "number" || !Number.isInteger(num) || num <= 0) {
        return "dữ liệu không hợp lệ";
    }
    if (num < 2) {
        return "không phải là số nguyên tố";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "không phải là số nguyên tố";
        }
    }
    return "là số nguyên tố";
}
const userInput = prompt("Nhập một số nguyên dương:");
const inputNumber = Number(userInput);
console.log(isPrimeNumber(inputNumber));

