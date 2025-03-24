//mang cho truoc
const letNumbers = [2, 6, 0, 1, 2006];
// input ==predefine
let userInput = parseInt(prompt("Nhập một số bất kỳ:"), 10);
if (letNumbers.includes(userInput)) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}
