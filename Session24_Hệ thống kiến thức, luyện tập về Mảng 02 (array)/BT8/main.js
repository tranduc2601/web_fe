let str = "";

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Tìm tất cả các từ trùng lặp trong chuỗi và số lần xuất hiện\n" +
        "4. Tìm từ dài nhất và ngắn nhất trong chuỗi\n" +
        "5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n" +
        "6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            // 1. Nhập chuỗi ký tự
            str = prompt("Nhập chuỗi:");
            break;

        case 2:
            // 2. Hiển thị chuỗi ký tự
            alert("Chuỗi hiện tại: " + str);
            break;

        case 3:
            // 3. Tìm tất cả các từ trùng lặp trong chuỗi và số lần xuất hiện
            let words = str.split(" ");
            let wordCount = {};

            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word in wordCount) {
                    wordCount[word]++;
                } else {
                    wordCount[word] = 1;
                }
            }

            let result = "Các từ trùng lặp và số lần xuất hiện:\n";
            for (let key in wordCount) {
                if (wordCount[key] > 1) {
                    result += key + ": " + wordCount[key] + "\n";
                }
            }
            alert(result);
            break;

        case 4:
            // 4. Tìm từ dài nhất và ngắn nhất trong chuỗi
            let wordsArr = str.split(" ");
            let longest = wordsArr[0], shortest = wordsArr[0];

            for (let i = 1; i < wordsArr.length; i++) {
                if (wordsArr[i].length > longest.length) {
                    longest = wordsArr[i];
                }
                if (wordsArr[i].length < shortest.length) {
                    shortest = wordsArr[i];
                }
            }

            alert("Từ dài nhất: " + longest + "\nTừ ngắn nhất: " + shortest);
            break;

        case 5:
            // 5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
            let charCount = {};

            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (char in charCount) {
                    charCount[char]++;
                } else {
                    charCount[char] = 1;
                }
            }

            let maxChar = "", maxCount = 0;
            for (let key in charCount) {
                if (charCount[key] > maxCount) {
                    maxChar = key;
                    maxCount = charCount[key];
                }
            }

            alert(`Ký tự xuất hiện nhiều nhất: '${maxChar}' với ${maxCount} lần`);
            break;

        case 6:
            // 6. Chuyển đổi chuỗi ký tự thành dạng snake_case
            let newStr = "";
            for (let i = 0; i < str.length; i++) {
                if (str[i] === " ") {
                    newStr += "_";
                } else {
                    newStr += str[i].toLowerCase();
                }
            }

            str = newStr;
            alert("Chuỗi sau khi chuyển đổi thành snake_case: " + str);
            break;

        case 7:
            // 7. Thoát chương trình
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) {
        break;
    }
}
