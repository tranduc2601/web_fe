// const statusCode = parseInt(prompt("nhap ma (200-201-400-404-500):"));
// let description;
// if (statusCode === 200) {
//     description = "thnah cong";
// } else if (statusCode === 201) {
//     description = "them thanh cong";
// } else if (statusCode === 400) {
//     description = "loi request";
// } else if (statusCode === 404) {
//     description = "khong tim thay";
// } else if (statusCode === 500) {
//     description = "loi server";
// }
// console.log(description);

// const statusCode = parseInt(prompt("nhap ma (200-201-400-404-500):"));
// let description;
// switch (statusCode) {
//     case 200:
//         description = "thnah cong";
//         break;
//     case 201:
//         description = "them thanh cong";
//         break;
//     case 400:
//         description = "loi request";
//         break;
//     case 404:
//         description = "khong tim thay";
//         break;
//     case 500:
//         description = "loi server";
//         break;
// }
// console.log(description);

// làm menu
let input = -1;
while (input != 0) {
    input = parseInt(prompt("Hãy chọn chức năng:\n1. Chức năng 1\n2. Chức năng 2\n3. Chức năng 3\n4. Chức năng 4\n0. Thoát"));
    if (input === 1) {
        alert("Bạn đã chọn chức năng 1");
    } else if (input === 2) {
        alert("Bạn đã chọn chức năng 2");
    } else if (input === 3) {
        alert("Bạn đã chọn chức năng 3");
    } else if (input === 4) {
        alert("Bạn đã chọn chức năng 4");
    } else if (input === 0) {
        alert("Thoát chương trình");
    } else {
        alert("Không có chức năng này");
    }
}