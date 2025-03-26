// Khai báo mảng có sẵn các giá trị
const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4, true];

// Loại bỏ các phần tử có giá trị falsy
const filteredArray = array.filter(Boolean);

// In kết quả
console.log(filteredArray); // [1, 2, 3, 4, true]
