let number = parseFloat(prompt("Nhập vào một số bất kỳ:"));
// kiem tra hop le
let result = !isNaN(number)
    ? `<p>Số bạn nhập: ${number}</p><p>Căn bậc hai của ${number} là: ${Math.sqrt(number).toFixed(2)}</p>`
    : "<p>Vui lòng nhập một số hợp lệ!</p>";
document.writeln(result);
