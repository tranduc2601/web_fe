
const month = parseInt(prompt("Nhập 1 tháng (1-12):"), 10);
let days;

if (month === 2) {
    const year = parseInt(prompt("Nhập 1 năm để xác định nhuận hay không:"), 10);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        days = 29;
    } else {
        days = 28;
    }
} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    days = 31;
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
} else {
    days = "Không có tháng này";
}
document.writeln(`Tháng ${month} có ${days} ngày.`);
