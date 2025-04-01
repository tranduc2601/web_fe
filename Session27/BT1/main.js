function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
function subtractNumbers(num1, num2) {
    let difference = num1 - num2;
    return difference;
}
function multiplyNumbers(num1, num2) {
    let product = num1 * num2;
    return product;
}
function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Không thể chia cho 0";
    }
    let quotient = num1 / num2;
    return quotient;
}
function main() {
    while (true) {
        let choice = prompt(
            "Chọn phép tính:\n" +
            "1. Cộng hai số\n" +
            "2. Trừ hai số\n" +
            "3. Nhân hai số\n" +
            "4. Chia hai số\n" +
            "5. Thoát"
        );
        switch (choice) {
            case "1":
                let num1Add = Number(prompt("Nhập số thứ nhất:"));
                let num2Add = Number(prompt("Nhập số thứ hai:"));
                let sum = addNumbers(num1Add, num2Add);
                alert("Kết quả: " + num1Add + " + " + num2Add + " = " + sum);
                break;
            case "2":
                let num1Sub = Number(prompt("Nhập số thứ nhất:"));
                let num2Sub = Number(prompt("Nhập số thứ hai:"));
                let difference = subtractNumbers(num1Sub, num2Sub);
                alert("Kết quả: " + num1Sub + " - " + num2Sub + " = " + difference);
                break;
            case "3":
                let num1Mul = Number(prompt("Nhập số thứ nhất:"));
                let num2Mul = Number(prompt("Nhập số thứ hai:"));
                let product = multiplyNumbers(num1Mul, num2Mul);
                alert("Kết quả: " + num1Mul + " * " + num2Mul + " = " + product);
                break;
            case "4":
                let num1Div = Number(prompt("Nhập số thứ nhất:"));
                let num2Div = Number(prompt("Nhập số thứ hai:"));
                let quotient = divideNumbers(num1Div, num2Div);
                if (quotient === "Không thể chia cho 0") {
                    alert(quotient);
                } else {
                    alert("Kết quả: " + num1Div + " / " + num2Div + " = " + quotient);
                }
                break;
            case "5":
                alert("Tạm biệt!");
                return;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
                break;
        }
    }
}
main();