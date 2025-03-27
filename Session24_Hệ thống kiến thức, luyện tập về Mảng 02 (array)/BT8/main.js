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

    if (choice === 1) {  
        // 1. Nhập chuỗi ký tự
        str = prompt("Nhập chuỗi:");
    } 
    
    else if (choice === 2) {  
        // 2. Hiển thị chuỗi ký tự
        alert("Chuỗi hiện tại: " + str);
    } 
    
    else if (choice === 3) {  
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
    } 
    
    else if (choice === 4) {  
        // 4. Tìm từ dài nhất và ngắn nhất trong chuỗi
        let words = str.split(" ");
        let longest = words[0], shortest = words[0];

        for (let i = 1; i < words.length; i++) {
            if (words[i].length > longest.length) {
                longest = words[i];
            }
            if (words[i].length < shortest.length) {
                shortest = words[i];
            }
        }

        alert("Từ dài nhất: " + longest + "\nTừ ngắn nhất: " + shortest);
    } 
    
    else if (choice === 5) {  
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
    } 
    
    else if (choice === 6) {  
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
    } 
    
    else if (choice === 7) {  
        // 7. Thoát chương trình
        alert("Thoát chương trình!");
        break;
    } 
    
    else {  
        alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
