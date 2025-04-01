function findMaxAndPos(arr) {
    if (!Array.isArray(arr) || arr.length !== 10) {
        return "dữ liệu không hợp lệ, cần nhập mảng 10 số nguyên";
    }

    const max = Math.max(...arr);
    const pos = arr.indexOf(max);

    return `Số lớn nhất là ${max} ở vị trí ${pos}`;
}

const input = prompt("Nhập vào một mảng 10 số nguyên, cách nhau bởi dấu phẩy:");
const arr = input.split(",").map(Number);
alert(findMaxAndPos(arr));