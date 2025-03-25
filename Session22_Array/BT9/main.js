let numbers = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];
// loai bo cac phan tu trung nhau bang cach tao mot mang moi chi chua cac phan tu duy nhat
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    let flag = false;
    // kiem tra xem phan tu hien tai co ton tai trong mang uniqueNumbers hay khong
    for (let j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            flag = true;
            break;
        }
    }
    if (!flag) {
        uniqueNumbers.push(numbers[i]); // neu khong ton tai thi them vao mang uniqueNumbers
    }
}
// sap xep mang tang dan (su dung thuat toan sap xep noi bot)
for (let i = 0; i < uniqueNumbers.length - 1; i++) {
    for (let j = 0; j < uniqueNumbers.length - i - 1; j++) {
        if (uniqueNumbers[j] > uniqueNumbers[j + 1]) { 
            // hoan doi vi tri hai phan tu neu phan tu hien tai lon hon phan tu ke tiep
            let temp = uniqueNumbers[j];
            uniqueNumbers[j] = uniqueNumbers[j + 1];
            uniqueNumbers[j + 1] = temp;
        }
    }
}

// hien thi ket qua ra man hinh
document.writeln("Mang sau khi loai bo phan tu trung va sap xep: [");
for (let i = 0; i < uniqueNumbers.length; i++) {
    document.writeln(uniqueNumbers[i] + (i < uniqueNumbers.length - 1 ? ", " : ""));
}
document.writeln("]");
