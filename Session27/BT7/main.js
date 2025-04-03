function nextNumber(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
    return null; 
}
console.log(nextNumber([1, 2, 3, 5])); 
console.log(nextNumber([1, 2, 4, 5])); 
console.log(nextNumber([10, 11, 12, 14]));
console.log(nextNumber([1, 2, 3, 4, 5])); 
