let usd = parseFloat(prompt("Nhập số tiền (USD):"));
let exchangeRate = 24794;
let vnd = usd * exchangeRate;
alert(usd + " USD tương đương " + vnd.toLocaleString() + " VND");
