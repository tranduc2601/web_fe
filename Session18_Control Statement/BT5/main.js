// thuat toan xep loai nhan vien
const years = prompt("Nhập số năm kinh nghiệm của nhân viên:");
let classification;

if (years < 1) {
    classification = "Mới vào nghề";
} else if (years <= 3) {
    classification = "Nhân viên có kinh nghiệm";
} else if (years <= 6) {
    classification = "Chuyên viên";
} else {
    classification = "Quản lý";
}

alert(`Xếp loại: ${classification}`);
