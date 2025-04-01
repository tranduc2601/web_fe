//input money
const depositAmount = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));
const depositMonths = parseInt(prompt("Nhập số tháng gửi:"));

const actions = {
    invalidInput: () => alert("Vui lòng nhập số tiền và số tháng hợp lệ!"),
    validInput: () => {
        const annualInterestRate = 4.3 / 100;
        const monthlyInterestRate = annualInterestRate / 12;
        const interestEarned = depositAmount * monthlyInterestRate * depositMonths;
        const formattedInterest = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(interestEarned);
        alert(`Số tiền lãi nhận được là: ${formattedInterest}`);
    }
};

const condition = (isNaN(depositAmount) || isNaN(depositMonths) || depositAmount <= 0 || depositMonths <= 0) 
    ? 'invalidInput' 
    : 'validInput';

actions[condition]();
