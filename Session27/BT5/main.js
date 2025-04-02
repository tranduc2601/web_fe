let arr = [];
while (true) {
    let input = prompt("Nhập phần tử của mảng (để trống và nhấn OK để kết thúc):");
    if (input === null || input.trim() === "") break;
    let num = parseInt(input);
    if (isNaN(num)) {
        alert("dãy không hợp lệ");
        arr = [];
        break;
    }
    arr.push(num);
}

if (arr.length > 0) {
    let k = parseInt(prompt("Nhập số nhóm muốn chia:"));

    if (isNaN(k) || k <= 0 || k > arr.length) {
        alert("dãy không hợp lệ");
    } else {
        let size = Math.floor(arr.length / k);
        let extra = arr.length % k;
        let result = [];
        let start = 0;

        for (let i = 0; i < k; i++) {
            let groupSize = i < extra ? size + 1 : size;
            let group = arr.slice(start, start + groupSize);
            result.push(group);
            start += groupSize;
        }

        let output = "Kết quả chia mảng thành " + k + " nhóm:\n";
        for (let group of result) {
            output += "[" + group.join(", ") + "]\n";
        }
        alert(output);
        console.log(result);
    }
}