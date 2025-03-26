let numbers = [2, 6, 0, 1, 2006];  
let evenSum = 0, oddSum = 0;
// duyet qua tung phan tu trong mang
numbers.forEach(num => {
    if (num % 2 === 0) {
        evenSum += num; 
        } else {
        oddSum += num;  
        }
});
document.writeln(`mang: [${numbers}] <br>`);
document.writeln(`tong cac so chan: ${evenSum} <br>`);
document.writeln(`tong cac so le: ${oddSum} <br>`);
