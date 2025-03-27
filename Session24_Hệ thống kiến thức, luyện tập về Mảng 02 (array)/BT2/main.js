let arr = [];
while (true) {
    let choice = parseInt(prompt(
        "Chọn chức năng:\n" +
        "1. Nhập mảng số nguyên\n" +
        "2. Hiển thị mảng\n" +
        "3. Tìm các phần tử chẵn và lẻ\n" +
        "4. Tính trung bình cộng của mảng\n" +
        "5. Xóa phần tử tại vị trí chỉ định\n" +
        "6. Tìm phần tử lớn thứ hai trong mảng\n" +
        "7. Thoát chương trình"
    ));
    // 1: Nhập mảng số nguyên
    if (choice === 1) {  
        arr = [];
        let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
        for (let i = 0; i < n; i++) {
            arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
        }
    } 
    // 2: Hiển thị mảng
    else if (choice === 2) {  
        alert("Mảng hiện tại: " + arr);
    } 
    // 3: Tìm các phần tử chẵn và lẻ
    else if (choice === 3) {  
        let even = [];
        let odd = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                even.push(arr[i]);
            } else {
                odd.push(arr[i]);
            }
        }
        alert("Số chẵn: " + even);
        alert("Số lẻ: " + odd);
    } 
    // 4: Tính trung bình cộng của mảng
    else if (choice === 4) {  
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        let avg = arr.length > 0 ? sum / arr.length : 0;
        alert("Trung bình cộng: " + avg);
    } 
    
    // 5: Xóa phần tử tại vị trí chỉ định
    else if (choice === 5) {  
        let index = parseInt(prompt("Nhập vị trí cần xóa (tính từ 0):"));
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1);
            alert("Mảng sau khi xóa: " + arr);
        } else {
            alert("Vị trí không hợp lệ!");
        }
    } 
    
    // 6: Tìm phần tử lớn thứ hai trong mảng
    else if (choice === 6) {  
        if (arr.length < 2) {
            alert("Không có số lớn thứ hai");
        } else {
            let max = -Infinity;
            let secondMax = -Infinity;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] > secondMax && arr[i] < max) {
                    secondMax = arr[i];
                }
            }
            alert(secondMax !== -Infinity ? "Số lớn thứ hai: " + secondMax : "Không có số lớn thứ hai");
        }
    } 
    
    // 7: Thoát chương trình
    else if (choice === 7) {  
        alert("Thoát chương trình!");
        break;
    } 
    else {  
        alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}
