function isPalindrome(str) {
    if (typeof str !== "string") {
        return "dữ liệu không hợp lệ";
    }

    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr ? "là chuỗi đối xứng" : "không phải chuỗi đối xứng";
}
const userInput = prompt("Nhập vào một chuỗi:");
alert(isPalindrome(userInput));
