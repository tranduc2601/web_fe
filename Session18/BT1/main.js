let number = parseInt(prompt("Nhập một số nguyên:"));
// kiểm tra số chẵn hay lẻ và in ra kết quả
if (isNaN(number)) {
    alert("Giá trị nhập vào không phải là số nguyên.");
} else if (number % 2 === 0) {
    alert("Số " + number + " là số chẵn.");
} else {
    alert("Số " + number + " là số lẻ.");
}
