let fullName = prompt("Nhập họ tên:");
let upperCaseName = fullName.toUpperCase();
alert(upperCaseName);

const predefinedPassword = "minhducdeptrai123"; // nhap pass di emiu
let userPassword = prompt("Nhập mật khẩu của bạn:");
if (userPassword === predefinedPassword) {
    alert("Nhập đúng rồi emiu, ngoan a thương =)))");
} else {
    alert("Nhập lại đi bé, chưa đúng đâu");
}
