let n = parseInt(prompt("Nhập số phần tử cho mảng: "));
if (isNaN(n) || n < 0) {
    document.writeln("Sô lượng phần tử không được âm <br>");
} else {
    let numbers = [];
    //input
    for (let i = 0; i < n; i++) {
        let element = prompt(`Nhập phần tử thứ ${i + 1}:`);     
        if (isNaN(element)) {
            numbers.push(element); // kp num ->numbers
        } else {
            numbers.push(parseFloat(element)); //if = number ---> R -> numbers
        }
    }
    // ktr numbers <-empty
    if (n === 0) {
        document.writeln("Mảng rỗng <=> Mảng không có phần tử <br>");
    } else {
        // calc sum <- number
        let numberSum = 0;
        let countNumber = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (typeof numbers[i] === "number" && !isNaN(numbers[i]))// =num && !isNaN
            {
                numberSum = numberSum + numbers[i];
                countNumber = countNumber + 1;
            }
        }
        document.writeln(`Mảng: [${numbers}] <br>`);
        //ktr && print
        if (countNumber === 0) {
            document.writeln("Mảng không có phần tử số <br>");
        } else {
            document.writeln(`Tổng của cá phần tử số là: ${numberSum} <br>`);
        }
    }
}