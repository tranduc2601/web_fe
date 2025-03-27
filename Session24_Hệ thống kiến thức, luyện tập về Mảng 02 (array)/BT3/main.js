let arr = [];

while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n" +
        "4. Tính tổng và trung bình cộng của các số dương trong mảng\n" +
        "5. Đảo ngược mảng\n" +
        "6. Kiểm tra mảng có đối xứng không\n" +
        "7. Thoát chương trình"
    ));
        //1: Nhập mảng số nguyên
    if (choice === 1) {  
        arr = [];
        let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
        for (let i = 0; i < n; i++) {
            arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
        }
    } 
        //2: Hiển thị mảng
    else if (choice === 2) {  
        alert("Mảng hiện tại: " + arr);
    } 
        //3: Tìm phần tử lớn nhất
    else if (choice === 3) {  
        if (arr.length === 0) {
            alert("Mảng rỗng!");
        } else {
            let max = arr[0];
            let indexMax = 0;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] > max) {
                    max = arr[i];
                    indexMax = i;
                }
            }
            alert(`Phần tử lớn nhất là ${max} tại vị trí ${indexMax}`);
        }
    } 
          //4: Tính tổng và trung bình cộng
    else if (choice === 4) {
        let sum = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sum += arr[i];
                count++;
            }
        }
        if (count === 0) {
            alert("Không có số dương trong mảng.");
        } else {
            alert(`Tổng các số dương: ${sum}`);
            alert(`Trung bình cộng: ${sum / count}`);
        }
    } 
        //5: Đảo ngược mảng
    else if (choice === 5) {  
        let reversedArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i]);
        }
        arr = reversedArr;
        alert("Mảng sau khi đảo ngược: " + arr);
    } 
        //6: Kiểm tra đối xứng
    else if (choice === 6) { 
        let isSymmetric = true;
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] !== arr[arr.length - 1 - i]) {
                isSymmetric = false;
                break;
            }
        }
        alert(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
    } 
         //7: Thoát chương trình
    else if (choice === 7) { 
        console.log("Thoát chương trình!");
        break;
    } 

    else { 
        console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
