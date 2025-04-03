const users = [];

function registerUser(name, email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    if (!emailRegex.test(email)) {
        console.log("Email phải chứa @ và kết thúc bằng .com hoặc .vn");
        return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
        console.log("Mật khẩu phải từ 6 ký tự trở lên, gồm ký tự đặc biệt và ký tự viết hoa.");
        return;
    }

    if (users.some(user => user.email === email)) {
        console.log("Email đã tồn tại.");
        return;
    }

    users.push({ name, email, password });
    console.log("Đăng ký thành công!");
}

function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log("Đăng nhập thành công!");
        console.log(`Thông tin người dùng: Tên: ${user.name}, Email: ${user.email}`);
    } else {
        console.log("Đăng nhập không thành công. Vui lòng kiểm tra email và mật khẩu.");
    }
}

function main() {
    let choice;
    do {
        console.log("1. Đăng ký người dùng mới.");
        console.log("2. Đăng nhập người dùng.");
        console.log("3. Thoát.");
        choice = prompt("Nhập lựa chọn của bạn: ");

        switch (choice) {
            case "1":
                const name = prompt("Nhập tên: ");
                const email = prompt("Nhập email: ");
                const password = prompt("Nhập mật khẩu: ");
                registerUser(name, email, password);
                break;
            case "2":
                const loginEmail = prompt("Nhập email: ");
                const loginPassword = prompt("Nhập mật khẩu: ");
                loginUser(loginEmail, loginPassword);
                break;
            case "3":
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== "3");
}

main();
