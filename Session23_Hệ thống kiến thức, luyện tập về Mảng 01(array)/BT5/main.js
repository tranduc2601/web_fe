let numbers = [2, 6, 0, 1, 2006]; 
let evenSum = 0;    let oddSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { 
        evenSum += numbers[i];
    } else {
        oddSum += numbers[i]; 
    }
}
document.writeln(`Mảng: [${numbers}] <br>`);
document.writeln(`Tổng các số chẵn: ${evenSum} <br>`);
document.writeln(`Tổng các số lẻ: ${oddSum} <br>`);
