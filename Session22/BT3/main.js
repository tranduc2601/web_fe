let numbers = [];
let input;

while (true) {
    input = prompt("Nhập vào một số (rỗng--->kết thúc):");
    if (input === "") break;
    // kime tra tinh hop lẹe cua input
    if (isNaN(input)) {
        alert("dãy không hợp lệ");
        continue;
    }
    numbers.push(parseInt(input));
}
// dao nguoc mang
let reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}

// Hiển thị kết quả
let result = "";
for (let i = 0; i < reversedNumbers.length; i++) {
    result += reversedNumbers[i];
    if (i < reversedNumbers.length - 1) {
        result += ",";
    }
}
console.log("Mảng sau khi đảo ngược:", reversedNumbers);
alert("Mảng sau khi đảo ngược: " + result);
