//input money
const depositAmount = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));
const depositMonths = parseInt(prompt("Nhập số tháng gửi:"));
// kiem tra hop le
if (isNaN(depositAmount) || isNaN(depositMonths) || depositAmount <= 0 || depositMonths <= 0) {
    alert("Vui lòng nhập số tiền và số tháng hợp lệ!");
} else {
    // lai suat hang nam
    const annualInterestRate = 4.3 / 100;
    // lai suat hang thang
    const monthlyInterestRate = annualInterestRate / 12;
    const interestEarned = depositAmount * monthlyInterestRate * depositMonths;
    // thong bao ket qua
    const formattedInterest = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(interestEarned);
    alert(`Số tiền lãi nhận được là: ${formattedInterest}`);
}
