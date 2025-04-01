let arr = ["", false, 0, undefined, null]; 
let result = []; // contain truthy
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== false && arr[i] !== 0 && arr[i] !== "" && arr[i] !== null && arr[i] !== undefined && !Number.isNaN(arr[i])) {
        result[result.length] = arr[i]; //them elm hop le vao mang moi
    }
}
document.writeln(result);