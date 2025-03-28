function findEvenNumbers(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== "number")) {
        return "dữ liệu không hợp lệ";
    }

    const evenNumbers = arr.filter(num => num % 2 === 0);

    return evenNumbers.length > 0 
        ? evenNumbers.join(", ") 
        : "mảng không chứa số chẵn";
}

// Nhập dữ liệu từ người dùng
const userInput = prompt("Nhập vào một mảng số, cách nhau bởi dấu phẩy:");

// Xử lý dữ liệu đầu vào
if (userInput === null || userInput.trim() === "") {
    alert("dữ liệu không hợp lệ");
} else {
    const inputArray = userInput.split(",").map(Number).filter(num => !isNaN(num));
    alert(findEvenNumbers(inputArray));
}
