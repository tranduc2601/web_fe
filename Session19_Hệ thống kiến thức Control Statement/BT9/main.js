// chuỗi + số ---> chuỗi + số bị đổi sang chuỗi
let result1 = "javascript" + 5; // kq: "javascript5"
// chuỗi - số ---> str sẽ được chuyển sang number [Number("javascipt")] để tính toán mà "javascript" không thể chuyển sang number nên phép toán sẽ là: NaN - 1 = NaN
let result2 = "javascript" - 1; // kq: NaN
// chuỗi + số ---> chuỗi + số bị đổi sang chuỗi
let result3 = "3" + 2; // kq: "32"
// chuỗi - số ---> chuỗi bị đổi sang số, sau đó thực hiện phép trừ ---> chuỗi có kí tự số là 5 nên chuyển thành số thì ta có phép toán: 5 - 4 = 1
let result4 = "5" - 4; // kq: 1
// isNaN(“123”) ---> kiểm tra "123" có phải là NaN không? "123" có thể ép kiểu thành số nên không phải NaN
let result5 = isNaN("123"); // kq: false
// isNaN(“hello”) ---> "hello" không thể chuyển thành số nên là NaN
let result6 = isNaN("hello"); // kq: true
// Number.isNaN("123") ---> "123" là chuỗi, không phải NaN
let result7 = Number.isNaN("123"); // kq: false
//Number.isNaN(NaN) ---> chỉ NaN mới là NaN ---> không phải str, number hay undefined
let result8 = Number.isNaN(NaN); // kq: true

console.log(result1, result2, result3, result4, result5, result6, result7, result8);
