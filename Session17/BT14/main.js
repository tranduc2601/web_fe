//input bán kính và chiều cao từ người dùng
let r = parseFloat(prompt("Nhập bán kính của hình trụ:"));
let h = parseFloat(prompt("Nhập chiều cao của hình trụ:"));
//damn, lai la toan
const actions = {
    validInput: () => {
        let chuViDay = 2 * Math.PI * r;
        let dienTichXungQuanh = 2 * Math.PI * r * h;
        let dienTichToanPhan = dienTichXungQuanh + 2 * (Math.PI * r * r);
        let theTich = Math.PI * r * r * h;

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
    },
    invalidInput: () => {
        console.log("Vui lòng nhập giá trị hợp lệ cho bán kính và chiều cao!");
        alert("Vui lòng nhập giá trị hợp lệ cho bán kính và chiều cao!");
    }
};
const actionKey = isNaN(r) || isNaN(h) || r <= 0 || h <= 0 ? 'invalidInput' : 'validInput';
actions[actionKey]();
