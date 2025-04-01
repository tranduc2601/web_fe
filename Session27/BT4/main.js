let numbers = [];

function inputNumbers() {
    let numberOfIntegers = Number(prompt("Nhập số lượng số nguyên:"));
    if (isNaN(numberOfIntegers) || numberOfIntegers <= 0) {
        alert("Số lượng không hợp lệ! Phải là số dương.");
        return;
    }
    numbers = [];
    for (let i = 0; i < numberOfIntegers; i++) {
        let num = Number(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));
        if (isNaN(num) || num !== Math.floor(num)) {
            alert("Giá trị không phải số nguyên! Vui lòng nhập lại.");
            i--;
            continue;
        }
        numbers.push(num);
    }
    alert("Đã nhập xong danh sách số nguyên!");
}

function calculateAverage() {
    let arrayLength = numbers.length;
    if (arrayLength === 0) {
        alert("Danh sách số nguyên trống!");
        return;
    }
    let sum = 0;
    for (let i = 0; i < arrayLength; i++) {
        sum += numbers[i];
    }
    let average = sum / arrayLength;
    average = average.toFixed(2);
    alert("Trung bình các số: " + average);
}

function findLargestEven() {
    let arrayLength = numbers.length;
    if (arrayLength === 0) {
        alert("Danh sách số nguyên trống!");
        return;
    }
    let largestEven = null;
    for (let i = 0; i < arrayLength; i++) {
        let currentNum = numbers[i];
        if (currentNum % 2 === 0) {
            if (largestEven === null) {
                largestEven = currentNum;
            }
            if (currentNum > largestEven) {
                largestEven = currentNum;
            }
        }
    }
    if (largestEven !== null) {
        alert("Số chẵn lớn nhất: " + largestEven);
    } else {
        alert("Không có số chẵn trong danh sách!");
    }
}

function findSmallestOdd() {
    let arrayLength = numbers.length;
    if (arrayLength === 0) {
        alert("Danh sách số nguyên trống!");
        return;
    }
    let smallestOdd = null;
    for (let i = 0; i < arrayLength; i++) {
        let currentNum = numbers[i];
        if (currentNum % 2 !== 0) {
            if (smallestOdd === null) {
                smallestOdd = currentNum;
            }
            if (currentNum < smallestOdd) {
                smallestOdd = currentNum;
            }
        }
    }
    if (smallestOdd !== null) {
        alert("Số lẻ nhỏ nhất: " + smallestOdd);
    } else {
        alert("Không có số lẻ trong danh sách!");
    }
}

function main() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách số nguyên\n" +
            "2. Tính trung bình các số\n" +
            "3. Tìm số chẵn lớn nhất\n" +
            "4. Tìm số lẻ nhỏ nhất\n" +
            "5. Thoát"
        );
        switch (choice) {
            case "1":
                inputNumbers();
                break;
            case "2":
                calculateAverage();
                break;
            case "3":
                findLargestEven();
                break;
            case "4":
                findSmallestOdd();
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