const arr = [3, 9, 7, 4, 1, 8, 6, 2, 5, 7];
// reduce: dem so lan xuat hien
const repetition = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
// tim so co tan suat cao nhat, neu bang nhau lay so nho nhat
const result = Object.entries(repetition).sort((a, b) => b[1] - a[1] || a[0] - b[0])[0][0];
document.writeln(result);
