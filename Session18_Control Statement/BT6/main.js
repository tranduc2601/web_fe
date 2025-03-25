// input
const year = parseInt(prompt("Nhập một năm bất kỳ: "), 10);
if (isNaN(year)) {
    alert("Vui lòng nhập một số hợp lệ.");
} else {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(`${year} là năm nhuận.`);
    } else {
        alert(`${year} không phải là năm nhuận.`);
    }
}
