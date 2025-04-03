function isArithmeticSequence(arr) {
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        return "dữ liệu không hợp lệ";
    }
    if (arr.length < 2) {
        return true;
    }
    const diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }
    return true;
}
alert(isArithmeticSequence([2, 4, 6, 8])); 
alert(isArithmeticSequence([3, 6, 9, 12, 14]));
alert(isArithmeticSequence("abc"));
