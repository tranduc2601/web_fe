
//ham tim so hoan hao va in ra ket qua

function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

let number = parseInt(prompt("Nhap so:"));

if (isPerfectNumber(number)) {
    console.log(`${number} la so hoan hao.`);
} else {
    console.log(`${number} khong phai la so hoan hao.`);

}
