function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function getPrimeNum(arr) {
    return arr.filter(isPrime);
}
const userInput = prompt("Nhập một mảng các số, cách nhau bằng dấu phẩy:");
if (!userInput.trim()) {
    alert("Mảng không có phần tử nào.");
} else {
    const numberArray = userInput.split(",").map(Number);
    if (numberArray.some(isNaN)) {
        alert("Dãy không hợp lệ.");
    } else {
        const primeNumbers = getPrimeNum(numberArray);
        alert("Các số nguyên tố: " + primeNumbers.join(", "));
    }
}
