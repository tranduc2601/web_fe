let str = "";
while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập chuỗi\n" +
        "2. Hiển thị chuỗi\n" +
        "3. Loại bỏ khoảng trắng ở đầu và cuối chuỗi\n" +
        "4. Đảo ngược chuỗi ký tự\n" +
        "5. Đếm số lượng từ trong chuỗi ký tự\n" +
        "6. Tìm kiếm và thay thế ký tự trong chuỗi\n" +
        "7. Thoát chương trình"
    ));

    if (choice === 1) {  
        //1: Nhập chuỗi
        str = prompt("Nhập chuỗi:");
    } 
    
    else if (choice === 2) {  
        //2: Hiển thị chuỗi
        alert("Chuỗi hiện tại: " + str);
    } 
    
    else if (choice === 3) {  
        //3: Loại bỏ khoảng trắng ở đầu và cuối chuỗi
        let newStr = "";
        let start = 0, end = str.length - 1;

        while (start < str.length && str[start] === " ") {
            start++;
        }

        while (end >= 0 && str[end] === " ") {
            end--;
        }

        for (let i = start; i <= end; i++) {
            newStr += str[i];
        }

        str = newStr;
        alert("Chuỗi sau khi loại bỏ khoảng trắng: " + str);
    } 
    
    else if (choice === 4) {  
        //4: Đảo ngược chuỗi ký tự
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        str = reversed;
        alert("Chuỗi sau khi đảo ngược: " + str);
    } 
    
    else if (choice === 5) {  
        //5: Đếm số lượng từ trong chuỗi ký tự
        let count = 0, inWord = false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== " " && !inWord) {
                count++;
                inWord = true;
            } else if (str[i] === " ") {
                inWord = false;
            }
        }
        alert("Số lượng từ trong chuỗi: " + count);
    } 
    
    else if (choice === 6) {  
        //6: Tìm kiếm và thay thế ký tự trong chuỗi
        let findChar = prompt("Nhập ký tự cần tìm:");
        let replaceChar = prompt("Nhập ký tự thay thế:");
        let newStr = "";

        for (let i = 0; i < str.length; i++) {
            if (str[i] === findChar) {
                newStr += replaceChar;
            } else {
                newStr += str[i];
            }
        }

        str = newStr;
        alert("Chuỗi sau khi thay thế: " + str);
    } 
    
    else if (choice === 7) {  
        //7: Thoát chương trình
        alert("Thoát chương trình!");
        break;
    } 
    
    else {  
        alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
