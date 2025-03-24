//3 chữ số 100--->1000
for (let num = 100; num < 1000; num++) {
    const digits = num.toString().split('').map(Number);
    const sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(digit, 3), 0);
    if (sumOfCubes === num) {
        document.writeln(num + '<br>');
    }
}
