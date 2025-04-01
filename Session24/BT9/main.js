let str = ""; 
let str2 = "";

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi ký tự\n" +
        "2. Hiển thị chuỗi ký tự\n" +
        "3. Đếm số lượng ký tự và số lần xuất hiện\n" +
        "4. Chuyển đổi chữ hoa → chữ thường, chữ thường → chữ hoa\n" +
        "5. Trộn lẫn ký tự giữa hai chuỗi\n" +
        "6. Tách chuỗi thành các từ, sắp xếp theo độ dài\n" +
        "7. Thoát chương trình"
    ));

    switch (choice) {
        case 1:
            // 1: Nhập chuỗi ký tự
            str = prompt("Nhập chuỗi:");
            break;

        case 2:
            // 2: Hiển thị chuỗi ký tự
            alert("Chuỗi hiện tại: " + str);
            break;

        case 3:
            // 3: Đếm số lượng ký tự và số lần xuất hiện
            let charCount = {};
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (char in charCount) {
                    charCount[char]++;
                } else {
                    charCount[char] = 1;
                }
            }

            let result = "Số lần xuất hiện của từng ký tự:\n";
            for (let key in charCount) {
                result += `'${key}': ${charCount[key]} lần\n`;
            }
            alert(result);
            break;

        case 4:
            // 4: Chuyển đổi chữ hoa → chữ thường, chữ thường → chữ hoa
            let newStr = "";
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (char >= 'A' && char <= 'Z') {
                    newStr += char.toLowerCase();
                } else if (char >= 'a' && char <= 'z') {
                    newStr += char.toUpperCase();
                } else {
                    newStr += char;
                }
            }

            str = newStr;
            alert("Chuỗi sau khi đổi chữ hoa/thường: " + str);
            break;

        case 5:
            // 5: Trộn lẫn ký tự giữa hai chuỗi
            str2 = prompt("Nhập chuỗi thứ 2:");
            let mixStr = "";
            let maxLength = Math.max(str.length, str2.length);

            for (let i = 0; i < maxLength; i++) {
                if (i < str.length) mixStr += str[i];
                if (i < str2.length) mixStr += str2[i];
            }

            alert("Chuỗi sau khi trộn: " + mixStr);
            break;

        case 6:
            // 6: Tách chuỗi thành các từ, sắp xếp theo độ dài
            let words = str.split(" ");
            words.sort((a, b) => a.length - b.length);

            alert("Từ ngắn nhất: " + words[0] + "\nTừ dài nhất: " + words[words.length - 1]);
            break;

        case 7:
            // 7: Thoát chương trình
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) break;
}