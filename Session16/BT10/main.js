let num1 = parseInt(prompt("Nhập số thứ nhất:"));
let num2 = parseInt(prompt("Nhập số thứ hai:"));
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
// min<=randomNum<=max
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
alert("Số ngẫu nhiên trong khoảng là: " + randomNum);
