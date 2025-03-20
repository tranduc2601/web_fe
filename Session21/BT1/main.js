let oddSum = 0;
let enteredNumbers = "";

for (let i = 0; i < 5; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    enteredNumbers += num + " ";
    if (num % 2 !== 0) {
        oddSum += num;
    }
}
//dep roi do
alert(`Các số đã nhập: ${enteredNumbers.trim()}\nTổng các số lẻ: ${oddSum}`);
document.writeln(`Các số đã nhập: ${enteredNumbers.trim()}<br>Tổng các số lẻ: ${oddSum}`);
