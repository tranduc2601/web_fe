let input = prompt("nhap day so:");
// tach chuoi thanh mang cac ky tu rieng le
let arr = input.split('');  
// ktr element co phair tu 0-9
let isNumericOnly = arr.every(char => char >= '0' && char <= '9');
if (!isNumericOnly) {  
    //0 phai so thi cook 
    document.writeln("day khong hop le");
} else {  
    // so ---> methodarr: reverse ---> dao nguoc chuoi 
    let result = arr.reverse().join('');
    document.writeln("ket qua dao nguoc: " + result);
}
//ap dung them phuong thuc arr
