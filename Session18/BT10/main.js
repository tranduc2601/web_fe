const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const tens = ["", "", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
const teens = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];

let inputNum = parseInt(prompt("Nhập một số nguyên từ 0 đến 999:"));
if (inputNum >= 0 && inputNum <= 999) {
    let result = "";
    if (inputNum < 10) {
        result = ones[inputNum];
    } else if (inputNum < 20) {
        result = teens[inputNum - 10];
    } else if (inputNum < 100) {
        let ten = Math.floor(inputNum / 10);
        let one = inputNum % 10;
        result = tens[ten] + (one > 0 ? " " + ones[one] : "");
    } else if (inputNum < 1000) {
        let hundred = Math.floor(inputNum / 100);
        let remainder = inputNum % 100;
        result = ones[hundred] + " trăm";
        if (remainder > 0) {
            if (remainder < 10) {
                result += " " + ones[remainder];
            } else if (remainder < 20) {
                result += " " + teens[remainder - 10];
            } else {
                let ten = Math.floor(remainder / 10);
                let one = remainder % 10;
                result += " " + tens[ten] + (one > 0 ? " " + ones[one] : "");
            }
        }
    } else {
        result = "Số ngoài phạm vi!";
    }
    alert("Số vừa nhập dưới dạng chữ là: " + result);
} else {
    alert("Vui lòng nhập một số trong khoảng từ 0 đến 999.");
}
