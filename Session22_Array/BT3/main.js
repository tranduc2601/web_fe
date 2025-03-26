// nhap mot chuoi so tu nguoi dung
let input = prompt("nhap day so:");
// tach chuoi thanh mang cac ky tu rieng le
let arr = input.split('');  
// kiem tra xem tat ca cac phan tu co phai la chu so (0-9) khong
let isNumericOnly = arr.every(char => char >= '0' && char <= '9');
if (!isNumericOnly) {  
    // neu co ky tu khong phai so, in ra thong bao loi
    document.writeln("day khong hop le");
} else {  
    // neu tat ca deu la so, dao nguoc mang va noi thanh chuoi moi
    let result = arr.reverse().join('');
    // in ra ket qua sau khi dao nguoc
    document.writeln("ket qua dao nguoc: " + result);
}
//ap dung them phuong thuc ben ngoai
