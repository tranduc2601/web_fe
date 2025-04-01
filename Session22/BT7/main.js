let numbers = [2, 6, 0, 1, 2, 0, 0, 6, 1, 7];
//bb sort
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // swap
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
document.writeln("Mảng sau khi sắp xếp: [" + numbers.join(", ") + "]");
