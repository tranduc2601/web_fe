let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
//bat buoc nhap dung ---> chat che code hon
while (isNaN(n) || n < 0) {
    n = parseInt(prompt("Số lượng phần tử phải là số nguyên >= 0. Nhập lại:"));
}
let arr = [];
//input ->arr
for (let i = 0; i < n; i++) {
    let num;
    do {
        num = parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}:`));
    } while (isNaN(num)); //bat buoc nhap so ---> lien tuc bat nhap lai
    arr.push(num);
}
// if arr <-empty
if (n === 0) {
    console.log("Mảng không có phần tử nào"); 
} else {
    //t1 <=> max && t2 <=> secondMax
    let max = -Infinity, secondMax = -Infinity;//khai bao am vo cuc de
    //find max, secondMax
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { 
            // if elm>max
            secondMax = max; //gan t1 cho t2
            max = arr[i]; //gan lai gtr moi cho t1
        } else if (arr[i] > secondMax && arr[i] < max) {
            // t1 > elm >t2
            secondMax = arr[i];//gan lai gtr moi cho t2
        }
    }
    console.log(secondMax !== -Infinity ? secondMax : "Không có số lớn thứ hai");
}
//damn nhieu thuat toan vai