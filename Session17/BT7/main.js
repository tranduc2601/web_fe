// input số tiền từ người dùng
var amount = parseFloat(prompt("Nhập số tiền:"));
//output số tiền đã nhập với định dạng tiền tệ Việt Nam
document.writeln("<br>Số tiền của bạn là: " + amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
