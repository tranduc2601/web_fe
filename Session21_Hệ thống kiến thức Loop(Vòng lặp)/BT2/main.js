let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 5; i++) {
    let input = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`), 10);
    if (input % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

document.writeln(`Số chẵn: ${evenCount}<br>`);
document.writeln(`Số lẻ: ${oddCount}<br>`);
