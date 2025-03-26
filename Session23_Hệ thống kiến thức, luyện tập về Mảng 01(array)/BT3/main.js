// Nhập vào số phần tử của mảng
let n = parseInt(prompt("Nhập vào số phần tử của mảng:"));
let arr = [];

// Nhập các phần tử vào mảng
for (let i = 0; i < n; i++) {
    let value = parseFloat(prompt(`Nhập phần tử thứ ${i + 1}:`));
    arr.push(value);
}

// Đếm số nguyên âm trong mảng
let negativeCount = arr.filter(num => num < 0).length;

// In kết quả ra màn hình
console.log(`Số lượng số nguyên âm trong mảng là: ${negativeCount}`);
