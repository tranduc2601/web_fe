//input
let r = parseFloat(prompt("Nhập bán kính của hình cầu:"));
const actions = {
    invalidInput: () => {
        console.log("Vui lòng nhập một số lớn hơn 0.");
        alert("Vui lòng nhập một số lớn hơn 0.");
    },
    validInput: () => {
        // Vc = (4/3) * π * r^3
        let theTich = (4 / 3) * Math.PI * Math.pow(r, 3);
        //A = 4 * π * r^2---> diện tích bề mặt
        let dienTichBeMat = 4 * Math.PI * Math.pow(r, 2);
        //C=2*π*r
        let chuViLonNhat = 2 * Math.PI * r;
        console.log(` Thể tích hình cầu: ${theTich.toFixed(2)}`);
        console.log(` Diện tích bề mặt: ${dienTichBeMat.toFixed(2)}`);
        console.log(` Chu vi lớn nhất của hình cầu: ${chuViLonNhat.toFixed(2)}`);
        // pop up kết quả
        alert(
            `Kết quả:\n` +
            `Thể tích hình cầu: ${theTich.toFixed(2)}\n` +
            `Diện tích bề mặt: ${dienTichBeMat.toFixed(2)}\n` +
            `Chu vi lớn nhất: ${chuViLonNhat.toFixed(2)}`
        );
    }
};
const actionKey = isNaN(r) || r <= 0 ? "invalidInput" : "validInput";
actions[actionKey]();
