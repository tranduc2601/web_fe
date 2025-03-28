function findMinValue(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "mảng không chứa phần tử";
    }
    if (!arr.every(Number.isFinite)) {
        return "giá trị không hợp lệ";
    }
    let min = Math.min(...arr);
    return `phần tử nhỏ nhất trong mảng là ${min}`;
}
const userInput = prompt("Nhập vào một mảng các số, cách nhau bởi dấu phẩy:");
if (userInput === null || userInput.trim() === "") {
    console.log("mảng không chứa phần tử");
} else {
    const inputArray = userInput.split(",").map(Number).filter(num => !isNaN(num));
    console.log(findMinValue(inputArray));
}

