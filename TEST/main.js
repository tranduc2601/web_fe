let contacts = [];

function addContact() {
    let id = contacts.length + 1;
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

    if (name && email && phone) {
        contacts.push({ id, name, email, phone });
        alert("Thêm liên hệ thành công!");
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

function showContacts() {
    let output = document.getElementById("output");
    if (contacts.length === 0) {
        output.innerHTML = "<p>Danh bạ trống.</p>";
        return;
    }
    let html = "<ul>";
    contacts.forEach(contact => {
        html += `<li>${contact.id} - ${contact.name} | ${contact.email} | ${contact.phone}</li>`;
    });
    html += "</ul>";
    output.innerHTML = html;
}

function searchContact() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let found = contacts.find(contact => contact.phone === phone);

    if (found) {
        alert(`Tìm thấy: ${found.name} - ${found.email}`);
    } else {
        alert("Không tìm thấy số điện thoại này!");
    }
}

function updateContact() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần cập nhật:"));
    let contact = contacts.find(contact => contact.id === id);

    if (contact) {
        contact.name = prompt("Nhập tên mới:", contact.name);
        contact.email = prompt("Nhập email mới:", contact.email);
        contact.phone = prompt("Nhập số điện thoại mới:", contact.phone);
        alert("Cập nhật thành công!");
    } else {
        alert("Không tìm thấy liên hệ!");
    }
}

function deleteContact() {
    let id = parseInt(prompt("Nhập ID của liên hệ cần xoá:"));
    let index = contacts.findIndex(contact => contact.id === id);

    if (index !== -1) {
        contacts.splice(index, 1);
        alert("Xóa liên hệ thành công!");
    } else {
        alert("Không tìm thấy ID này!");
    }
}

function exitApp() {
    alert("Ứng dụng đóng!");
}
