let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
if (n < 0) {
    document.writeln("Số lượng phần tử không được nhỏ hơn 0");
} else {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
    }
    if (n === 0) {
        document.writeln("Không phải dãy số Fibonacci");
    } else if (n === 1 || n === 2) {
            document.writeln("Không thể xác định (Cần ít nhất 3 phần tử)");
    } else {
        //calc fibo
        let isFibonacci = true;
        for (let i = 2; i < n; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
        document.writeln(isFibonacci ? "Là dãy số Fibonacci" : "Không phải dãy số Fibonacci");
    }
}
