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

        case 3: // Tìm phần tử lớn nhất
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
            break;

        case 4: // Tính tổng và trung bình cộng
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
            break;

        case 5: // Đảo ngược mảng
            let reversedArr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                reversedArr.push(arr[i]);
            }
            arr = reversedArr;
            alert("Mảng sau khi đảo ngược: " + arr);
            break;

        case 6: // Kiểm tra đối xứng
            let isSymmetric = true;
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== arr[arr.length - 1 - i]) {
                    isSymmetric = false;
                    break;
                }
            }
            alert(isSymmetric ? "Mảng đối xứng" : "Mảng không đối xứng");
            break;

        case 7: // Thoát chương trình
            console.log("Thoát chương trình!");
            break;

        default: // Lựa chọn không hợp lệ
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }

    if (choice === 7) break;
}
