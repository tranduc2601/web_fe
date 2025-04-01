let a = parseFloat(prompt("Hãy nhập số a: "));
let b = parseFloat(prompt("Hãy nhập số mũ b: "));
let result = 1;
if (isNaN(a) || isNaN(b)) {
    alert("Không hợp lệ");
} else {
    if (Number.isInteger(b)) {
        if (b >= 0) {
            for (let i = 0; i < b; i++) {
                result *= a;
            }
        } else {
            for (let i = 0; i < Math.abs(b); i++) {
                result *= a;
            }
            result = 1 / result;
        }
    } else {
        result = Math.pow(a, b);
    }
    alert(`${a}^${b} = ${result}`);
}