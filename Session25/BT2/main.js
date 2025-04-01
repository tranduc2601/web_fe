function sumTwoNum() {
    let a = prompt("Nhập số nguyên thứ nhất:");
    let b = prompt("Nhập số nguyên thứ hai:");
    a = Number(a);
    b = Number(b);
    if (!Number.isNum(a) || !Number.isNum(b)) {
        console.log("Dữ liệu không hợp lệ");
        alert("Dữ liệu không hợp lệ");
    } else {
        let sum = a + b;
        console.log(`Tổng của ${a} và ${b} là: ${sum}`);
        alert(`Tổng của ${a} và ${b} là: ${sum}`);
    }
}
sumTwoNum();
