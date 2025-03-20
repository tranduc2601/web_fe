const number = parseInt(prompt("Nhập vào một số nguyên bất kỳ: "), 10);
// Không phải số nguyên thì thông báo lỗi
if (isNaN(number)) {
    document.writeln("Nhập số nguyên, là số nguyên mới được!");
} else {
    document.writeln(`Các ước của số ${number} là:<br>`);
    for (let i = 1; i <= Math.abs(number); i++) {
        if (number % i === 0) {
            document.writeln(`${i}, ${-i}<br>`);
        }
    }
}