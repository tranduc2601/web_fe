const input = prompt("Nhập vào một số nguyên bất kỳ:");
const number = parseInt(input, 10);
//ktr co phai so riel khong
if (isNaN(number)) {
    document.writeln("Vui lòng nhập một số nguyên hợp lệ.");
} else {
    let isPrime = true;
    //1>=thi cook 
    if (number <= 1) {
        isPrime = false;
    } else {
        // thuat toan ktr sngto
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        document.writeln(`${number} là số nguyên tố.`);
    } else {
        document.writeln(`${number} không phải là số nguyên tố.`);
    }
}
