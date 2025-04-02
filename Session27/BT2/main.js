let students = [];

function inputStudents() {
    let numberOfStudents = Number(prompt("Nhập số lượng sinh viên:"));
    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        alert("Số lượng sinh viên không hợp lệ!");
        return;
    }
    for (let i = 0; i < numberOfStudents; i++) {
        let studentName = prompt("Nhập tên sinh viên thứ " + (i + 1) + ":");
        if (studentName.trim() === "") {
            alert("Tên sinh viên không được để trống!");
            i--;
            continue;
        }
        students.push(studentName);
    }
    alert("Đã nhập xong danh sách sinh viên!");
}

function displayStudents() {
    let arrayLength = students.length;
    if (arrayLength === 0) {
        alert("Danh sách sinh viên trống!");
        return;
    }
    let displayMessage = "Danh sách sinh viên:\n";
    for (let i = 0; i < arrayLength; i++) {
        displayMessage += (i + 1) + ". " + students[i] + "\n";
    }
    alert(displayMessage);
}

function findStudent() {
    let arrayLength = students.length;
    if (arrayLength === 0) {
        alert("Danh sách sinh viên trống!");
        return;
    }
    let searchName = prompt("Nhập tên sinh viên cần tìm:");
    let found = false;
    let resultMessage = "Kết quả tìm kiếm:\n";
    for (let i = 0; i < arrayLength; i++) {
        if (students[i].toLowerCase() === searchName.toLowerCase()) {
            resultMessage += (i + 1) + ". " + students[i] + "\n";
            found = true;
            break;
        }
    }
    if (found) {
        alert(resultMessage);
    } else {
        alert("Không tìm thấy sinh viên có tên: " + searchName);
    }
}

function deleteStudent() {
    let arrayLength = students.length;
    if (arrayLength === 0) {
        alert("Danh sách sinh viên trống!");
        return;
    }
    let deleteName = prompt("Nhập tên sinh viên cần xóa:");
    let foundIndex = -1;
    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase() === deleteName.toLowerCase()) {
            foundIndex = i;
            break;
        }
    }
    if (foundIndex !== -1) {
        students.splice(foundIndex, 1);
        alert("Đã xóa sinh viên: " + deleteName);
    } else {
        alert("Không tìm thấy sinh viên có tên: " + deleteName);
    }
}

function main() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n" +
            "1. Nhập danh sách sinh viên\n" +
            "2. Hiển thị danh sách sinh viên\n" +
            "3. Tìm sinh viên theo tên\n" +
            "4. Xóa sinh viên khỏi danh sách\n" +
            "5. Thoát"
        );
        switch (choice) {
            case "1":
                inputStudents();
                break;
            case "2":
                displayStudents();
                break;
            case "3":
                findStudent();
                break;
            case "4":
                deleteStudent();
                break;
            case "5":
                alert("Tạm biệt!");
                return;
            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
                break;
        }
    }
}

main();