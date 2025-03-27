let matrix = [];

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình"
    ));

    if (choice === 1) {  
        // 1. Nhập mảng 2 chiều
        matrix = [];
        let rows = parseInt(prompt("Nhập số hàng của mảng:"));
        let cols = parseInt(prompt("Nhập số cột của mảng:"));
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                matrix[i][j] = parseInt(prompt(`Nhập phần tử tại [${i}][${j}]:`));
            }
        }
    } 
    
    else if (choice === 2) {  
        // 2. Hiển thị mảng 2 chiều
        let output = "Mảng 2 chiều:\n";
        for (let i = 0; i < matrix.length; i++) {
            output += matrix[i].join("\t") + "\n";
        }
        alert(output);
    } 
    
    else if (choice === 3) {  
        // 3. Tính tổng các phần tử trong mảng
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                sum += matrix[i][j];
            }
        }
        alert("Tổng các phần tử trong mảng: " + sum);
    } 
    
    else if (choice === 4) {  
        // 4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        let max = matrix[0][0];
        let maxRow = 0, maxCol = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] > max) {
                    max = matrix[i][j];
                    maxRow = i;
                    maxCol = j;
                }
            }
        }
        alert(`Phần tử lớn nhất là ${max} tại vị trí [${maxRow}][${maxCol}]`);
    } 
    
    else if (choice === 5) {  
        // 5. Tính trung bình cộng các phần tử của một hàng cụ thể
        let row = parseInt(prompt("Nhập số hàng cần tính trung bình cộng:"));
        if (row >= 0 && row < matrix.length) {
            let sum = 0;
            for (let j = 0; j < matrix[row].length; j++) {
                sum += matrix[row][j];
            }
            alert(`Trung bình cộng của hàng ${row}: ${sum / matrix[row].length}`);
        } else {
            alert("Hàng không hợp lệ!");
        }
    } 
    
    else if (choice === 6) {  
        // 6. Đảo ngược các hàng trong mảng
        for (let i = 0; i < matrix.length; i++) {
            matrix[i] = matrix[i].reverse();
        }
        let output = "Mảng sau khi đảo ngược từng hàng:\n";
        for (let i = 0; i < matrix.length; i++) {
            output += matrix[i].join("\t") + "\n";
        }
        alert(output);
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
