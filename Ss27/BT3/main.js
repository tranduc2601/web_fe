//Shtr
function calcCircleArea() {
    let radius = Number(prompt("Nhập bán kính hình tròn:"));
    //ktr tinh hop le cua r
    if (isNaN(radius) || radius <= 0) {
        alert("Bán kính không hợp lệ! Phải là số dương.");
        return;
    }
    //Shtr= πr^2
    let area = Math.PI * radius * radius;
    //lam tron den 2 so thap phan
    area = area.toFixed(2);
    alert("Diện tích hình tròn: " + area);
}

// Phtr
function calcCirclePerimeter() {
    let radius = Number(prompt("Nhập bán kính hình tròn:"));
    //ktr tinh hop le cua r
    if (isNaN(radius) || radius <= 0) {
        alert("Bán kính không hợp lệ! Phải là số dương.");
        return;
    }
    //Phtr=2πr
    let perimeter = 2 * Math.PI * radius;
    //lam tron den 2 so thap phan
    perimeter = perimeter.toFixed(2);
    alert("Chu vi hình tròn: " + perimeter);
}
//Shcn
function calcRectangleArea() {
    let length = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    //ktr tinh hop le cua input dai & rong
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Chiều dài và chiều rộng không hợp lệ! Phải là số dương.");
        return;
    }
    //Shcn= length*width
    let area = length * width;
    alert("Diện tích hình chữ nhật: " + area);
}
//Phcn
function calcRectanglePerimeter() {
    let length = Number(prompt("Nhập chiều dài hình chữ nhật:"));
    let width = Number(prompt("Nhập chiều rộng hình chữ nhật:"));
    //ktr tinh hop le cua input dai & rong
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert("Chiều dài và chiều rộng không hợp lệ! Phải là số dương.");
        return;
    }
    //Phcn = 2*(width+length)
    let perimeter = 2 * (length + width);
    alert("Chu vi hình chữ nhật: " + perimeter);
}
//Menu
function main() {
    while (true) {
        let choice = prompt(
            "Chọn phép tính:\n" +
            "1. Tính diện tích hình tròn\n" +
            "2. Tính chu vi hình tròn\n" +
            "3. Tính diện tích hình chữ nhật\n" +
            "4. Tính chu vi hình chữ nhật\n" +
            "5. Thoát"
        );
        switch (choice) {
            case "1": //Shtr
                calcCircleArea();
                break;
            case "2": // Phtr
                calcCirclePerimeter();
                break;
            case "3": // Shcn
                calcRectangleArea();
                break;
            case "4": // Phcn
                calcRectanglePerimeter();
                break;
            case "5":
                alert("Thoát chương trình...");
                return;
            default: 
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
                break;
        }
    }
}
main();