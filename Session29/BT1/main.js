let contacts = [];
//them
function addContact() {
    let id = contacts.length + 1;
    let name = prompt("Nhập tên liên hệ:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

    if (!name || !email || !phone) {
        alert("Thông tin không hợp lệ!");
        return;
    }

    contacts.push({ id, name, email, phone });
    alert("Thêm liên hệ thành công!");
}
// hien thi
function displayContacts() {
    if (contacts.length === 0) {
        alert("Danh bạ trống!");
        return;
    }

    let result = "Danh sách danh bạ:\n";
    contacts.forEach(c => {
        result += `ID: ${c.id} - Tên: ${c.name} - Email: ${c.email} - SĐT: ${c.phone}\n`;
    });

    alert(result);
}
// tim =sdt
function findContactByPhone() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let found = contacts.find(c => c.phone === phone);

    if (found) {
        alert(`Tìm thấy: ID: ${found.id}, Tên: ${found.name}, Email: ${found.email}, SĐT: ${found.phone}`);
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}
//cap nhat
function updateContact() {
    let id = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
    let contact = contacts.find(c => c.id === id);

    if (!contact) {
        alert("Không tìm thấy liên hệ!");
        return;
    }

    contact.name = prompt("Nhập tên mới:", contact.name) || contact.name;
    contact.email = prompt("Nhập email mới:", contact.email) || contact.email;
    contact.phone = prompt("Nhập số điện thoại mới:", contact.phone) || contact.phone;

    alert("Cập nhật thành công!");
}
//xoaxoa
function deleteContact() {
    let id = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
    let index = contacts.findIndex(c => c.id === id);

    if (index === -1) {
        alert("Không tìm thấy liên hệ!");
        return;
    }

    contacts.splice(index, 1);
    alert("Xóa thành công!");
}
//Menu
function main() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n1. Thêm liên hệ\n2. Hiển thị danh bạ\n3. Tìm theo số điện thoại\n4. Cập nhật liên hệ\n5. Xóa liên hệ\n6. Thoát"
        );

        switch (choice) {
            case "1": addContact(); break;
            case "2": displayContacts(); break;
            case "3": findContactByPhone(); break;
            case "4": updateContact(); break;
            case "5": deleteContact(); break;
            case "6": alert("Tạm biệt!"); return;
            default: alert("Lựa chọn không hợp lệ!");
        }
    }
}
main();
