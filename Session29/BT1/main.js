class Contact {
    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class ContactManager {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        console.log("Danh sách danh bạ:");
        this.contacts.forEach(contact => {
            console.log(`ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        });
    }

    searchByPhone(phone) {
        const result = this.contacts.find(contact => contact.phone === phone);
        if (result) {
            console.log(`Tìm thấy: ID: ${result.id}, Name: ${result.name}, Email: ${result.email}, Phone: ${result.phone}`);
        } else {
            console.log("Không tìm thấy liên hệ với số điện thoại này.");
        }
    }

    updateContact(id, name, email, phone) {
        const contact = this.contacts.find(contact => contact.id === id);
        if (contact) {
            contact.name = name;
            contact.email = email;
            contact.phone = phone;
            console.log("Cập nhật thành công.");
        } else {
            console.log("Không tìm thấy liên hệ với ID này.");
        }
    }

    deleteContact(id) {
        const index = this.contacts.findIndex(contact => contact.id === id);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("Xóa thành công.");
        } else {
            console.log("Không tìm thấy liên hệ với ID này.");
        }
    }
}

const manager = new ContactManager();
const prompt = require("prompt-sync")();

while (true) {
    console.log("\n1. Thêm đối tượng Contact vào danh sách liên hệ.");
    console.log("2. Hiển thị danh sách danh bạ.");
    console.log("3. Tìm kiếm thông tin Contact theo số điện thoại.");
    console.log("4. Cập nhật thông tin Contact theo ID.");
    console.log("5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo ID.");
    console.log("6. Thoát.");

    const choice = parseInt(prompt("Nhập lựa chọn của bạn: "));

    switch (choice) {
        case 1:
            const id = parseInt(prompt("Nhập ID: "));
            const name = prompt("Nhập tên: ");
            const email = prompt("Nhập email: ");
            const phone = prompt("Nhập số điện thoại: ");
            manager.addContact(new Contact(id, name, email, phone));
            break;
        case 2:
            manager.displayContacts();
            break;
        case 3:
            const searchPhone = prompt("Nhập số điện thoại cần tìm: ");
            manager.searchByPhone(searchPhone);
            break;
        case 4:
            const updateId = parseInt(prompt("Nhập ID cần cập nhật: "));
            const updateName = prompt("Nhập tên mới: ");
            const updateEmail = prompt("Nhập email mới: ");
            const updatePhone = prompt("Nhập số điện thoại mới: ");
            manager.updateContact(updateId, updateName, updateEmail, updatePhone);
            break;
        case 5:
            const deleteId = parseInt(prompt("Nhập ID cần xóa: "));
            manager.deleteContact(deleteId);
            break;
        case 6:
            console.log("Thoát chương trình.");
            process.exit();
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
}
