let userInput = prompt("Nhập các ký tự, cách nhau bởi dấu phẩy:");
let arr = userInput.split(",");
let countNumbers = 0;
for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!isNaN(char) && char.trim() !== "") {
        countNumbers++;
    }
}
console.log(`Số lượng ký tự là số trong mảng: ${countNumbers}`);
