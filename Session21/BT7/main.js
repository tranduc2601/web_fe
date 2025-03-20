const initialDeposit = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
const monthlyInterestRate = parseFloat(prompt("Nhập lãi suất tháng (%):")) / 100;
const months = parseInt(prompt("Nhập số tháng gửi:"));
// lại là toán @@ damnnn
let totalAmount = initialDeposit;
for (let i = 0; i < months; i++) {
    totalAmount += totalAmount * monthlyInterestRate;
}
const interestEarned = totalAmount - initialDeposit;
document.writeln(`Tiền lãi: ${interestEarned.toFixed(3)}<br>`);
document.writeln(`Tiền nhận được: ${totalAmount.toFixed(3)}<br>`);
