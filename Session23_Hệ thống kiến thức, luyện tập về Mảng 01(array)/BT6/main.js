let numbers = [2, 6, 0, 1, 2, 0, 0, 6, 1, 7];
// nhap 
let inputNumber = parseInt(prompt("Nhập một số nguyên:"));
// kiemr tra xem cso phai so khong
if (isNaN(inputNumber)) {
    document.writeln("Hãy nhập Số hợp lệ");
} else {
    let count = 0;
    //duyet mang de dem so lan co trong mang cua so da nhap
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === inputNumber) {
            count++;
        }
    }
    if (count > 0) {
        document.writeln(`số ${inputNumber} xuất hiện ${count} lần trong mảng.`);
    } else {
        document.writeln(`số ${inputNumber} không tồn tại trong mảng.`);
    }
}
