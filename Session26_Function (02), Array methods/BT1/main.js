const numbers = [];
const count = parseInt(prompt("Nhập số lượng phần tử cần nhập:"));
for (let i = 0; i < count; i++) {
    const num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    numbers.push(num);
}
const filterNum = numbers.filter(num => num >= 10);
if (filterNum.length > 0) {
    alert("Các số nguyên lớn hơn hoặc bằng 10: " + filterNum.join(", "));
} else {
    alert("Không có bất kì phần tử nào lớn hơn hoặc bằng 10");
}
