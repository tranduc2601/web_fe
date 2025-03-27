let userInput = prompt("Nhập các ký tự, cách nhau bởi dấu phẩy:"); 
let arr = userInput.split(","); //split ---> chuoi cach nhau boi dau ","
let countNumbers = 0; 
for (let i = 0; i < arr.length; i++) { 
    let char = arr[i]; 
    if (!isNaN(char) && char.trim() !== "") // dung phuong thuc trim cua string de loai bo khoang trang---> dau+ cuoi
    { 
        //ktr: =num && != "" sau khi cat bo khoang trang
        countNumbers++; 
    }
}
console.log(`Số lượng ký tự là số trong mảng: ${countNumbers}`); 
