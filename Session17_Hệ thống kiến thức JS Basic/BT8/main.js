// input--->YYYY-MM-DD
let date1 = new Date(prompt("Nhập ngày thứ nhất (YYYY-MM-DD):"));
let date2 = new Date(prompt("Nhập ngày thứ hai (YYYY-MM-DD):"));
// khoang cach giua hai ngay
let timeDifference = Math.abs(date2 - date1);
let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//output
alert("Độ lệch giữa hai ngày là: " + dayDifference + " ngày");
