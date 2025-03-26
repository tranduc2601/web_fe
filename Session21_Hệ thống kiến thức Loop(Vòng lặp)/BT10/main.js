const n = parseInt(prompt("Nhập vào một số nguyên n: "), 10);
// n > 0 == n la number
if (!isNaN(n) && n > 0) {
    document.writeln(`<p>${n} số nguyên tố đầu tiên là:</p>`);
    let count = 0; //slg sngto
    let num = 2;  //from 2 --> number
    //loop 
    while (count < n) {
        let isPrime = true;//flag = true
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
        num++;// next num
    }
} else {
    document.writeln("Hãy nhập 1 số nguyên dương.</p>");
}
