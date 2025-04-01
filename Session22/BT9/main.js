let numbers = [1, 1, 2, 3, 4, 5, 5, 7, 7, 8 ];
// loai bo phan tu trung nhau bang Set va sap xep tang dan bang sort()
let uniqueNumbers = [...new Set(numbers)]// dung "set" de luu tru gia tri unique ---> dung apread operator (...) de chuyen "set" thah mang + "new" dung de lay cac phan tu tu "set" tao ra 1 mang moi
.sort((a, b) => a - b);
document.writeln("Mang sau khi loai bo phan tu trung va sap xep: [" + uniqueNumbers.join(", ") + "]");
