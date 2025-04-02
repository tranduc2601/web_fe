// function calcEvenOddSums(numbers) {
//     let isArray = Array.isArray(numbers);
//     if (!isArray) {
//         return "Dữ liệu không hợp lệ";
//     }
//     let arrayLength = numbers.length;
//     if (arrayLength === 0) {
//         return "Mảng không có dữ liệu";
//     }
//     let numbersInRange = numbers.filter(function (number) {
//         let isInRange = number >= 10 && number <= 20;
//         return isInRange;
//     });
//     let evenNumbers = numbersInRange.filter(function (number) {
//         let isEven = number % 2 === 0;
//         return isEven;
//     });
//     let oddNumbers = numbersInRange.filter(function (number) {
//         let isOdd = number % 2 !== 0;
//         return isOdd;
//     });
//     let totalEven = evenNumbers.reduce(function (sum, number) {
//         return sum + number;
//     }, 0);
//     let totalOdd = oddNumbers.reduce(function (sum, number) {
//         return sum + number;
//     }, 0);
//     let result = "totalEven = " + totalEven + "\ntotalOdd = " + totalOdd;
//     return result;
// }
// console.log(calcEvenOddSums([10, 11, 12, 13, 14, 15]));
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
let odd = arr.reduce((acc, num) => num % 2 !== 0 ? acc + num : acc, 0);
console.log("Tổng số các số chẵn trong mảng: " + even);
console.log("Tổng số các số lẻ trong mảng: " + odd);
