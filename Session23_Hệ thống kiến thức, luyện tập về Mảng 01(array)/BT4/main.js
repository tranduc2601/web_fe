// Khai báo mảng và nhập vào các ký tự
let arr = prompt("Nhập các ký tự, cách nhau bởi dấu phẩy:").split(",");

// Đếm số lượng ký tự là số
let countNumbers = arr.filter(char => !isNaN(char) && char.trim() !== "").length;

// In ra kết quả
console.log(`Số lượng ký tự là số trong mảng: ${countNumbers}`);
