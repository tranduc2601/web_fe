let n = parseInt(prompt("Nhập vào số phần tử của mảng:"));
let arr = prompt("Nhập các phần tử của mảng, cách nhau bởi dấu phẩy:")
.split(',')     //mang --> chuoi con <=> cach nhau boi dau ","
.map(Number);   // chuoi --> so
// method filter ---> loc so am
let negativeCount = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeCount++;
    }
}
console.log(`Số lượng số nguyên âm trong mảng là: ${negativeCount}`);
