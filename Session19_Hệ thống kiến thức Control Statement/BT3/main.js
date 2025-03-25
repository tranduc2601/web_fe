const exchangeRate = 25.542;

const choice = prompt("1.VND ---> USD:\n2.USD ---> VND:");

if (choice === "1") {
    const vnd = parseFloat(prompt("Nhập số tiền VND:"));
    if (!isNaN(vnd) && vnd >= 0) {
        const usd = vnd / exchangeRate;
        alert(`${vnd.toLocaleString()} VND = ${usd.toFixed(2)} USD`);
    } else {
        alert("Vui lòng nhập số tiền hợp lệ.");
    }
} else if (choice === "2") {
    const usd = parseFloat(prompt("Nhập số tiền USD:"));
    if (!isNaN(usd) && usd >= 0) {
        const vnd = usd * exchangeRate;
        alert(`${usd.toFixed(2)} USD = ${vnd.toLocaleString()} VND`);
    } else {
        alert("Vui lòng nhập số tiền hợp lệ.");
    }
} else {
    alert("Lựa chọn không hợp lệ. Vui lòng chọn 1 hoặc 2.");
}
