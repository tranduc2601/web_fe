function countPositiveIntegers(arr) {
    if (!Array.isArray(arr)) {
        return "dữ liệu không hợp lệ";
    }

    const count = arr.filter(num => Number.isInteger(num) && num > 0).length;
    
    return count > 0 ? count : "không có số nguyên dương trong mảng";
}
const userInput = prompt("Nhập vào một mảng các số, cách nhau bởi dấu phẩy:");
const inputArray = userInput.split(",").map(Number);
alert(countPositiveIntegers(inputArray));

