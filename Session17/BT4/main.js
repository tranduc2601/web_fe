let number = parseFloat(prompt("Nhập vào một số bất kỳ:"));
// kiem tra hop le
if (!isNaN(number)) {
    //can bac 2
    let squareRoot = Math.sqrt(number);
    //in ra ket qua
    document.writeln(`<p>Số bạn nhập: ${number}</p>`);
    document.writeln(`<p>Căn bậc hai của ${number} là: ${squareRoot.toFixed(2)}</p>`);
} else {
    document.writeln("<p>Vui lòng nhập một số hợp lệ!</p>");
}
