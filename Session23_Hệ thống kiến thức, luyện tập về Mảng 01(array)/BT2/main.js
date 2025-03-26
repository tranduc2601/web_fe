const array = [12, 45, 7, 89, 23, 56, 78, 34, 90, 11];
// find MAX --->index of MAX
let maxValue = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
    }
}

// Hiển thị kết quả
console.log(`Phần tử lớn nhất trong mảng là: ${maxValue}`);
console.log(`Vị trí của phần tử lớn nhất là: ${maxIndex}`);
