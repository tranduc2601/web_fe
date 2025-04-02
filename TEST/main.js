const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
if (!Array.isArray(arr) || arr.length === 0) return console.log("Dữ liệu không hợp lệ");  
const evenSum = arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);  
const oddSum = arr.filter(n => n % 2 !== 0).reduce((a, b) => a + b, 0);  
console.log(`totalEven = ${evenSum}, totalOdd = ${oddSum}`);  
