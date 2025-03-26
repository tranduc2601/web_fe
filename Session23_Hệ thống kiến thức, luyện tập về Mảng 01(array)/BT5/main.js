let n = parseInt(prompt("Nhập số phần tử của mảng: "));
let numbers = [];
for (let i = 0; i < n; i++) {
    let element = prompt(`Nhập phần tử thứ ${i + 1}:`);
    numbers.push(isNaN(element) ? element : parseFloat(element));
}

let numberSum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number" && !isNaN(numbers[i])) {
        numberSum += numbers[i];
    }
}

document.writeln(`Mảng: [${numbers}] <br>`);
document.writeln(`Tổng các ký tự là số: ${numberSum} <br>`);
