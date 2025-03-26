let atmBalance = 1000000000;
let amountInput = prompt("Nhập số tiền cần rút [Số tiền rút phải là bội của 1000]:");
// xoa dau "." va chuyen thanh so nguyen
let amount = amountInput.replaceAll(".", "");
// chuyen doi thu cong tu chuoi sang so (khong dung parseInt)
let amountNum = 0;
for (let i = 0; i < amount.length; i++) {
    amountNum = amountNum * 10 + (amount[i] - "0");
}
amount = amountNum;
if (amount > atmBalance) {
    alert("Số tiền trong cây ATM không đủ để thực hiện giao dịch.");
} else if (amount % 1000 !== 0) {
    alert("Số tiền nhập vào phải chia hết cho 1000.");
} else {
    document.writeln("<h3>Số tiền rút: " + amount + " VND</h3>");
    document.writeln("<h4>Kết quả:</h4>");
    // khong dung mang, xu ly tung menh gia thu cong
    let remainingAmount = amount;
    // menh gia 500000
    let count = 0;
    while (remainingAmount >= 500000) {
        count++;
        remainingAmount -= 500000;
    }
    if (count > 0) {
        document.writeln("500000 VND - " + count + " tờ <br>");
    }
    // menh gia 200000
    count = 0;
    while (remainingAmount >= 200000) {
        count++;
        remainingAmount -= 200000;
    }
    if (count > 0) {
        document.writeln("200000 VND - " + count + " tờ <br>");
    }

    // menh gia 100000
    count = 0;
    while (remainingAmount >= 100000) {
        count++;
        remainingAmount -= 100000;
    }
    if (count > 0) {
        document.writeln("100000 VND - " + count + " tờ <br>");
    }

    // menh gia 50000
    count = 0;
    while (remainingAmount >= 50000) {
        count++;
        remainingAmount -= 50000;
    }
    if (count > 0) {
        document.writeln("50000 VND - " + count + " tờ <br>");
    }

    // menh gia 20000
    count = 0;
    while (remainingAmount >= 20000) {
        count++;
        remainingAmount -= 20000;
    }
    if (count > 0) {
        document.writeln("20000 VND - " + count + " tờ <br>");
    }

    // menh gia 10000
    count = 0;
    while (remainingAmount >= 10000) {
        count++;
        remainingAmount -= 10000;
    }
    if (count > 0) {
        document.writeln("10000 VND - " + count + " tờ <br>");
    }

    // menh gia 5000
    count = 0;
    while (remainingAmount >= 5000) {
        count++;
        remainingAmount -= 5000;
    }
    if (count > 0) {
        document.writeln("5000 VND - " + count + " tờ <br>");
    }

    // menh gia 2000
    count = 0;
    while (remainingAmount >= 2000) {
        count++;
        remainingAmount -= 2000;
    }
    if (count > 0) {
        document.writeln("2000 VND - " + count + " tờ <br>");
    }

    // menh gia 1000
    count = 0;
    while (remainingAmount >= 1000) {
        count++;
        remainingAmount -= 1000;
    }
    if (count > 0) {
        document.writeln("1000 VND - " + count + " tờ <br>");
    }

    // cap nhat so tien con lai trong atm
    atmBalance -= amount;
    console.log("Số tiền còn lại trong ATM: " + atmBalance + " VND");
}
// if else xong kho luon, thoi gian lam 1 bai = 7 bai gop lai :>