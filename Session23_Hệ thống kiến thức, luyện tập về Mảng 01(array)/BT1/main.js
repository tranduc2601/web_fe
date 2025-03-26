const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
//lon hon 10--->count +1
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] >= 10) {
        count++;
    }
}
console.log(`Số lượng phần tử lớn hơn hoặc bằng 10: ${count}`);
