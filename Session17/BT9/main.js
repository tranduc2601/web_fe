let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));
// delta
let delta = b * b - 4 * a * c;

const actions = {
    positive: () => {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phương trình có 2 nghiệm:`);
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    },
    zero: () => {
        let x = -b / (2 * a);
        console.log(` Phương trình có nghiệm kép: x = ${x}`);
    },
    negative: () => {
        console.log(" Phương trình vô nghiệm (delta < 0).");
    }
};

(delta > 0 && actions.positive()) ||
(delta === 0 && actions.zero()) ||
actions.negative();
