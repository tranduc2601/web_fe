const input = prompt("Nhập vào một chuỗi số nguyên:");
let isPalindrome = true;

for (let i = 0; i < Math.floor(input.length / 2); i++) {
    if (input[i] !== input[input.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    alert(`${input} là số đối xứng.`);
} else {
    alert(`${input} không phải là số đối xứng.`);
}
