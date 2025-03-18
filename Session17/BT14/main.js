//input bán kính và chiều cao từ người dùng
let r = parseFloat(prompt("Nhập bán kính của hình trụ:"));
let h = parseFloat(prompt("Nhập chiều cao của hình trụ:"));
//kiểm tra giá trị hợp lệ
if (isNaN(r) || isNaN(h) || r <= 0 || h <= 0) {
    console.log("Vui lòng nhập giá trị hợp lệ cho bán kính và chiều cao!");
    alert("Vui lòng nhập giá trị hợp lệ cho bán kính và chiều cao!");
} else {
    //Pd: C=2*pi*r
    let chuViDay = 2 * Math.PI * r;
    //Sxq= 2*π*r*h
    let dienTichXungQuanh = 2 * Math.PI * r * h;
    //Stp = Sxq + 2*Sd(π*r^2)
    let dienTichToanPhan = dienTichXungQuanh + 2 * (Math.PI * r * r);
    //V = π * r^2 * h
    let theTich = Math.PI * r * r * h;
    // output kết quả
    console.log(`Bán kính: ${r}, Chiều cao: ${h}`);
    console.log(` Chu vi đáy: ${chuViDay.toFixed(2)}`);
    console.log(` Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}`);
    console.log(` Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)}`);
    console.log(` Thể tích: ${theTich.toFixed(2)}`);

    alert(
        `Chu vi đáy: ${chuViDay.toFixed(2)}\n` +
        `Diện tích xung quanh: ${dienTichXungQuanh.toFixed(2)}\n` +
        `Diện tích toàn phần: ${dienTichToanPhan.toFixed(2)}\n` +
        `Thể tích: ${theTich.toFixed(2)}`
    );
}
