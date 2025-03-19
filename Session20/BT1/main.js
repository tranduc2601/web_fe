let N = parseInt(prompt("Nhập vào một số nguyên dương N:"));
let sum = 0;
for (let i = 1; i <= N; i++) {
    sum += i;
}
alert(`Tổng các số nguyên từ 1 đến ${N} là: ${sum}`);