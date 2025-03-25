let n = parseInt(prompt("Nhập n số Fibonacci cần hiển thị:"));
if (isNaN(n) || n <= 0) {
    alert("Hãy nhập 1 số nguyên dương");
} else {
    // 0,1,2,3,5,8,13,21,34,55,89,144,233,377,610,.. 
    let f0 = 1, f1 = 1;
    let result = "Fibonacci: ";
    if (n >= 1) result += f0;
    if (n >= 2) result += ", " + f1;
    for (let i = 3; i <= n; i++) {
        let next = f0 + f1; // so toep theo
        result += ", " + next; 
        f0 = f1;// gan lai gia tri cho f0
        f1 = next; //gan lai gia tri cho f1
    }
        alert(result);
}
