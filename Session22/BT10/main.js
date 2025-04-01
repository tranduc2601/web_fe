let numbers = [];
while (true) {
    let choice = prompt(
        "\tMENU\n\n" +
        "1. Nhập vào mảng\n" +
        "2. Hiển thị mảng\n" +
        "3. Thêm phần tử\n" +
        "4. Sửa phần tử\n" +
        "5. Xóa phần tử\n" +
        "6. Thoát\n" +
        "\tLựa chọn của bạn:"
    );

    switch (choice) {
        case "1": // nhap vao mang
            // nhap cac so nguyen, tach bang dau phay, chuyen thanh so va luu vao mang
            let input = prompt("nhap cac so nguyen, cach nhau bang dau phay:");
            numbers = []; // khoi tao lai mang
            let parts = input.split(","); // tach chuoi thanh mang chuoi
            for (let i = 0; i < parts.length; i++) {
                numbers.push(Number(parts[i])); // chuyen tung phan tu thanh so va them vao mang
            }
            alert("mang da nhap: " + numbers); // hien thi mang da nhap
            break;

        case "2": // hien thi mang
            // hien thi mang hien tai, neu rong thi thong bao mang rong
            if (numbers.length) {
                let result = ""; // tao chuoi ket qua
                for (let i = 0; i < numbers.length; i++) {
                    result += numbers[i] + (i < numbers.length - 1 ? ", " : ""); // noi cac phan tu
                }
                alert("mang hien tai: " + result);
            } else {
                alert("mang rong!");
            }
            break;

        case "3": // them phan tu
            // nhap so can them vao mang va them vao cuoi mang
            let newElement = Number(prompt("nhap so can them vao mang:"));
            numbers.push(newElement);
            alert("mang sau khi them: " + numbers);
            break;

        case "4": // sua phan tu
            // nhap vi tri can sua va gia tri moi, kiem tra vi tri hop le
            let indexEdit = Number(prompt("nhap vi tri can sua (0 den " + (numbers.length - 1) + "):"));
            if (indexEdit >= 0 && indexEdit < numbers.length) {
                let newValue = Number(prompt("nhap gia tri moi:"));
                numbers[indexEdit] = newValue; // cap nhat gia tri moi
                alert("mang sau khi sua: " + numbers);
            } else {
                alert("vi tri khong hop le!");
            }
            break;

        case "5": // xoa phan tu
            // nhap vi tri can xoa, kiem tra vi tri hop le va xoa phan tu
            let indexDelete = Number(prompt("nhap vi tri can xoa (0 den " + (numbers.length - 1) + "):"));
            if (indexDelete >= 0 && indexDelete < numbers.length) {
                numbers.splice(indexDelete, 1); // xoa phan tu tai vi tri
                alert("mang sau khi xoa: " + numbers);
            } else {
                alert("vi tri khong hop le!");
            }
            break;

        case "6": // thoat
            // ket thuc chuong trinh
            alert("chuong trinh ket thuc!");
            exit();

        default:
            // thong bao lua chon khong hop le
            alert("lua chon khong hop le! vui long chon lai.");
    }
}
// da guc nga sau 2t