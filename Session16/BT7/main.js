// biens deimr t=moi mon hoc
let math = parseFloat(prompt("Nhập điểm môn Toán:"));
let physics = parseFloat(prompt("Nhập điểm môn Vật lý:"));
let chemistry = parseFloat(prompt("Nhập điểm môn Hóa học:"));
// mark avg
let average = (math + physics + chemistry) / 3;
// printf
document.writeln("Điểm trung bình của bạn là: " + average.toFixed(2));
