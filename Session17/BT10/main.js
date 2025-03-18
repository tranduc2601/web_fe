// so chinh phuong la so = binh phg cua 1 so nguyen khác
let n = parseInt(prompt("Nhập một số:"));
let isPerfectSquare = Number.isInteger(Math.sqrt(n));
alert(n + (isPerfectSquare ? " là số chính phương" : " không phải số chính phương"));
