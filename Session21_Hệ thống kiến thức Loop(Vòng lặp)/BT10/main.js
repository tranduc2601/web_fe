const n = parseInt(prompt("Nhập vào một số nguyên n: "), 10);
if (!isNaN(n) && n > 0) {
    document.writeln(`<p>${n} số nguyên tố đầu tiên là:</p>`);
    let count = 0;
    let num = 2;
    while (count < n) {
        let isPrime = true;
        if (num < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            document.writeln(`${num}<br>`);
            count++;
        }
        num++;
    }
} else {
    document.writeln("Hãy nhập 1 số nguyên dương.</p>");
}
