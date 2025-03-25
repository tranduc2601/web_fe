let input = prompt("Nhập dãy số:");
// chuyen chuoi thanh ki tu
let arr = [];
let isValid = true;
// kiem tra ki tu co phia so hay khong
for (let i = 0; i < input.length; i++) {
    if (input[i] < '0' || input[i] > '9') {
        isValid = false;
        break;
    }
    arr[i] = input[i]; // gan lai gia tri cho mang
}
// thong bao loi khi ki tu khong dung
if (!isValid) {
    document.writeln("Dãy không hợp lệ");
} else {
    // tao mang reverse de chua mang dao nguoc
    let reversedArr = [];
    let j = 0;
    // dao nguoc
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr[j] = arr[i];
        j++;
    }
    // ep kieu thanh chuoi
    let result = "";
    for (let i = 0; i < reversedArr.length; i++) {
        result += reversedArr[i];
    }
    document.writeln("Kết quả đảo ngược: " + result);
}
