const array = [1,2,3,4,5,6];
// find MAX --->index of MAX
let maxValue = array[0];
let maxIndex = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
    }
}
console.log(`Phần tử lớn nhất trong mảng là: ${maxValue}`);
console.log(`Vị trí của phần tử lớn nhất là: ${maxIndex}`);
