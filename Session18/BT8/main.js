let side1 = parseFloat(prompt("Nhập độ dài cạnh thứ nhất:"));
let side2 = parseFloat(prompt("Nhập độ dài cạnh thứ hai:"));
let side3 = parseFloat(prompt("Nhập độ dài cạnh thứ ba:"));

// kiem tra hop le
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    if (side1 === side2 && side2 === side3) {
        alert("Đây là tam giác đều.");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("Đây là tam giác cân.");
    } else if (
        side1 ** 2 + side2 ** 2 === side3 ** 2 ||
        side1 ** 2 + side3 ** 2 === side2 ** 2 ||
        side2 ** 2 + side3 ** 2 === side1 ** 2
    ) {
        alert("Đây là tam giác vuông.");
    } else {
        alert("Đây là tam giác thường.");
    }
} else {
    alert("Ba cạnh không tạo thành một tam giác hợp lệ.");
}
