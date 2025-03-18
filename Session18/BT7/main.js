let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
//input phep toan
let operation = prompt("Mời bạn nhập vào các phép tính (+, -, *, /, ^, **)");
// progress...--->result
let result;
switch (operation) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b !== 0) {
            result = a / b;
        } else {
            result = "Không thể chia cho 0!";
        }
        break;
    case "^":
        result = Math.pow(a, b);
        break;
    case "**":
        result = a ** b;
        break;
    default:
        result = "Phép toán không hợp lệ!";
}
// popup ket qua
alert(`Kết quả của phép tính: ${a} ${operation} ${b} = ${result}`);
