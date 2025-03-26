let input = prompt("Nhập vào một chuỗi số:");
let digits = input.split('');
//kiem tra xem tats ca ky tu co phai so khong
let isValid = digits.every(char => !isNaN(char) && char !== ' ');

if (isValid) {
    // findMAX ---> chuyen mang ve so va su dung Math.max
    let maxDigit = Math.max(...digits.map(Number));
    alert(`${maxDigit} là số lớn nhất trong dãy số`);
} else {
    alert("Dãy số không hợp lệ");
}
