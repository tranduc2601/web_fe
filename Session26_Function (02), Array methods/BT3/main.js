function filterEmail(emails) {
    // filter ---> loc nhung email du dieu kien
    return emails.filter(email => 
        email.includes('@') &&    // contain @
        !email.includes(' ')      // || X " "
    );
}
const input = prompt("Nhập danh sách email, cách nhau bởi dấu phẩy:");
if (input) {
    //exclude sp o dau va cuoi
    const emailList = input.split(',') //tach chuoi -> mang
    .map(email => email.trim()); //cut sp 
    // ktr hop le
    if (emailList.length === 0 || emailList.every(email => email === "")) {
        alert("Mảng không có phần tử nào");
    } else {
        const validEmails = filterEmail(emailList);
        alert("Email hợp lệ: " + validEmails);
    }
} else {
    alert("Mảng không có phần tử nào");
}