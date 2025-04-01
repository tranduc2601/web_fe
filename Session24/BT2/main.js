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

    switch (choice) {
        case 1: // Nhập mảng số nguyên
            arr = [];
            let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));
            for (let i = 0; i < n; i++) {
                arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
            }
            break;

        case 2: // Hiển thị mảng
            alert("Mảng hiện tại: " + arr);
            break;

        case 3: // Tìm các phần tử chẵn và lẻ
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
            break;

        case 4: // Tính trung bình cộng của mảng
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            let avg = arr.length > 0 ? sum / arr.length : 0;
            alert("Trung bình cộng: " + avg);
            break;

        case 5: // Xóa phần tử tại vị trí chỉ định
            let index = parseInt(prompt("Nhập vị trí cần xóa (tính từ 0):"));
            if (index >= 0 && index < arr.length) {
                arr.splice(index, 1);
                alert("Mảng sau khi xóa: " + arr);
            } else {
                alert("Vị trí không hợp lệ!");
            }
            break;

        case 6: // Tìm phần tử lớn thứ hai trong mảng
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
            break;

        case 7: // Thoát chương trình
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) break;
}
