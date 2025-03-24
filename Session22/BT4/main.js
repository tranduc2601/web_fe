let userInput = prompt("Nhập vào một chuỗi số:");

let digits = userInput.split('');
let isValid = true;

// Kiểm tra xem tất cả ký tự có phải là số không
for (let i = 0; i < digits.length; i++) {
    if (isNaN(digits[i]) || digits[i] === ' ') {
        isValid = false;
        break;
    }
}
if (isValid) {
    let maxDigit = digits[0];
    for (let i = 1; i < digits.length; i++) {
        if (digits[i] > maxDigit) {
            maxDigit = digits[i];
        }
    }
    console.log(`${maxDigit} là số lớn nhất trong dãy số`);
} else {
    console.log("dãy số không hợp lệ");
}