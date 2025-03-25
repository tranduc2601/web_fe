const arr = [3, 9, 7, 4, 1, 8, 6, 2, 5, 7];
const frequency = {};
for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    frequency[num] = (frequency[num] || 0) + 1;
}

let maxFrequency = 0;
let result = Number.MAX_SAFE_INTEGER;

for (const num in frequency) {
    if (frequency[num] > maxFrequency || (frequency[num] === maxFrequency && +num < result)) {
        maxFrequency = frequency[num];
        result = +num;
    }
}

document.writeln(result);
