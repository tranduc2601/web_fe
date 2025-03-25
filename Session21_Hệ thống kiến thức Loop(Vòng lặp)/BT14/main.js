let width = parseInt(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = parseInt(prompt("Nhập chiều dọc của hình chữ nhật:"));
// ktr so nguyen duong,
if (width > 1 && height > 1) {
    //canh top
    document.writeln("*".repeat(width) + "<br>");
    //sp btw
    for (let i = 1; i < height - 1; i++) {
        document.writeln("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
    }
    //canh bottom
    document.writeln("*".repeat(width) + "<br>");
} else {
    document.writeln("Vui lòng nhập số lớn hơn 1!");
}
