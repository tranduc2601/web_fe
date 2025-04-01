function filterEvenNumbers(numbers) {
    let isArray = Array.isArray(numbers);
    if (!isArray) {
        return "Dữ liệu không hợp lệ";
    }
    let arrayLength = numbers.length;
    if (arrayLength === 0) {
        return "Mảng không có dữ liệu";
    }
    let evenNumbers = numbers.filter(function (number) {
        let isEven = number % 2 === 0;
        return isEven;
    });
    return evenNumbers;
}
console.log(filterEvenNumbers([2, 5, 10]));
console.log(filterEvenNumbers([]));
console.log(filterEvenNumbers("abc"));