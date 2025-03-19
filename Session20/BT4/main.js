let inputString = prompt("Nhập vào một chuỗi bất kỳ:");
let searchChar = prompt("Nhập vào ký tự cần tìm kiếm:");
let found = false; //flag =1 thầy Hùng hay dùng bên C
for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === searchChar) {
        found = true;
        break;
    }
}
if (found) {
    alert(`Ký tự "${searchChar}" tồn tại trong chuỗi.`);
} else {
    alert(`Ký tự "${searchChar}" không tồn tại trong chuỗi.`);
}
