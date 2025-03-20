//qua nhieu toan trong tuan nay gau gau
const a = parseFloat(prompt("Nhập hệ số a:"));
const b = parseFloat(prompt("Nhập hệ số b:"));
const c = parseFloat(prompt("Nhập hệ số c:"));
//kiem tra so da nhap va giai ptr
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.writeln("Hãy nhập số đúng.");
} else if (a === 0) {
    document.writeln("Hệ số a phải khác 0 để là phương trình bậc 2.");
} else {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.writeln(`Phương trình có 2 nghiệm phân biệt: x1 = ${root1}, x2 = ${root2}`);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        document.writeln(`Phương trình có nghiệm kép: x = ${root}`);
    } else {
        document.writeln("Phương trình vô nghiệm.");
    }
}
