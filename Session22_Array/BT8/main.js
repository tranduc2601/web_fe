const arr = [3, 9, 7, 4, 1, 8, 6, 2, 5, 7]; 
const count = {};
// vong lap de dem so lan xuat hien cua tung so trong mang
for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (count[number] === undefined) { // neu chua co trong doi tuong count
        count[number] = 1; // gan gia tri bang 1
    } else {
        count[number] = count[number] + 1; // neu da co thi tang so lan xuat hien len 1
    }
}
let highestCount = 0; // bien luu so lan xuat hien nhieu nhat
let finalNumber = null; // bien luu so xuat hien nhieu nhat
// vong lap de tim so xuat hien nhieu nhat
for (let number in count) {
    let howManyTimes = count[number];
    if (howManyTimes > highestCount || 
        (howManyTimes === highestCount && Number(number) < finalNumber)) {
        highestCount = howManyTimes; // cap nhat so lan xuat hien cao nhat
        finalNumber = Number(number); // cap nhat so xuat hien nhieu nhat
    }
}
document.writeln(finalNumber);
