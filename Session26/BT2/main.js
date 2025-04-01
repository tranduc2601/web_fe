function longStr(input) {
    if (!Array.isArray(input)) {
        return "Dữ liệu không hợp lệ";
    }
    if (input.length === 0) {
        return "Mảng không có phần tử nào";
    }
    return input.map(item => {
        if (typeof item === "string" && item.length < 5) {
            return "Dữ liệu không hợp lệ.";
        }
        return item;
    }).filter(item => typeof item === "string" && item.length > 5);
}
const inputArray = [];
let userInput;
do {
    userInput = prompt("Nhập vào một phần tử của mảng (bấm Cancel hoặc để trống để kết thúc):");
    if (userInput) {
        inputArray.push(userInput.trim());
    }
} while (userInput);

alert(longStr(inputArray));
