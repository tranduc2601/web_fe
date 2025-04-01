function filterOdds(nums) {
    let isArr = Array.isArray(nums);
    if (!isArr) {
        return "Dữ liệu không hợp lệ";
    }
    let len = nums.length;
    if (len === 0) {
        return "Mảng không có dữ liệu";
    }
    let inRange = nums.filter(function (num) {
        let valid = num >= 10 && num <= 20;
        return valid;
    });
    let odds = inRange.filter(function (num) {
        let isOdd = num % 2 !== 0;
        return isOdd;
    });
    return odds;
}
console.log(filterOdds([10, 2, 3, 5, 7, 9]));
console.log(filterOdds([]));
console.log(filterOdds("abc"));