let input = prompt("Nhập vào một chuỗi số:");
let digits = input.split('');
let isValid = true;
// kiem tra input co phai so khong
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
    alert(`${maxDigit} là số lớn nhất trong dãy số`);
} else {
    alert("dãy số không hợp lệ");
}