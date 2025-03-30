let users = [];
function registerEmail(email) {
    //email<- @ ---> end: ".vn" || ".com"
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    if (!emailRegex.test(email)) {
        console.log("Email không hợp lệ!");
        return;
    }
    // ktr appeared
    if (users.includes(email)) {
        console.log("Tài khoản đã tồn tại!");
    } else {
        users.push(email);
        console.log("Đăng ký thành công!");
    }
}
registerEmail("user@example.com");
registerEmail("user@example.com");
registerEmail("invalid_email@xyz");
registerEmail("user@example.vn"); 
