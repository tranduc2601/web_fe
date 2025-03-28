let numbers = [2, 6, 0, 1, 2, 0, 0, 6, 1, 7];
let inputNumber = parseInt(prompt("nhap mot so nguyen:"));
// ktr dau vao co phai so hay khong
if (isNaN(inputNumber)) {
    document.writeln("hay nhap so hop le");
} else {
    // su dung filter de loc cac phan tu trung voi inputNumber va dem do dai cua mang moi
    let count = numbers.filter(num => num === inputNumber).length;
    // hien thi ket qua
    document.writeln(count > 0 ? `so ${inputNumber} xuat hien ${count} lan trong mang.` : `so ${inputNumber} khong ton tai trong mang.`);
}
