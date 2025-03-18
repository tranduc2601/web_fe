const userInput = prompt("Nhập một số từ 0 đến 9:");
const number = parseInt(userInput, 10);
// ktr --->popup 
if (!isNaN(number) && number >= 0 && number <= 9) {
    const numberTexts = ["Số Không", "Số Một", "Số Hai", "Số Ba", "Số Bốn", "Số Năm", "Số Sáu", "Số Bảy", "Số Tám", "Số Chín"];
    alert(numberTexts[number]);
} else {
    alert("Vui lòng nhập một số hợp lệ từ 0 đến 9.");
}
