let number = parseInt(prompt("Nhập vào một số nguyên:"));
let isPrime = true;//flag = true
if (number <= 1) {
    isPrime = false;//casc so duoi 1 deu khong phai so nguyen to
} else {
    //bat dau kiem tra tuw so 2 ---> neu can bac 2 cua so vua nhap lonw hon i=> so ngto hoac thay the can bac 2 bang number^2
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    alert(`${number} là số nguyên tố.`);
} else {
    alert(`${number} không phải là số nguyên tố.`);
}
