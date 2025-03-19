let n = parseInt(prompt("Nhập n số nguyên tố đầu tiên cần hiển thị:"));
if (isNaN(n) || n <= 0) {
    alert("Hãy nhập 1 số nguyên dương.");
} else {
    let count = 0;
    let num = 2;
    let primes = [];
    while (count < n) {
        let isPrime = true;
                for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
            count++;
        }
        num++;
    }
        alert(`Số nguyên tố đầu tiên là: ${primes.join(", ")}`);
}
