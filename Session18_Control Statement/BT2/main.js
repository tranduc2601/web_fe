let math = parseFloat(prompt("Nhập điểm Toán:"));
let literature = parseFloat(prompt("Nhập điểm Văn:"));
let english = parseFloat(prompt("Nhập điểm Anh:"));
// avg
let average = (math + literature + english) / 3;
//phan loai
let classification;
if (average >= 8.0) {
    classification = "Giỏi";
} else if (average >= 6.5) {
    classification = "Khá";
} else if (average >= 5.0) {
    classification = "Trung bình";
} else {
    classification = "Yếu";
}
// xuat tum lum
document.writeln("Điểm trung bình: " + average.toFixed(2) + "<br>");
document.writeln("Xếp loại học lực: " + classification + "<br>");
