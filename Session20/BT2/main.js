const N = parseInt(prompt("Nhập một số: "), 10);

for (let i = 1; i <= N; i++) {
    if (i % 5 === 0) {
        alert(i);
    }
}
