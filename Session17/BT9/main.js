let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));
// delta
let delta = b * b - 4 * a * c;
// ktr pt 2 ngo
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm:`);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log(` Phương trình có nghiệm kép: x = ${x}`);
} else {
    console.log(" Phương trình vô nghiệm (delta < 0).");
}
