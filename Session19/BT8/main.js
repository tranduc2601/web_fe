const month = parseInt(prompt("Nhập vào một tháng bất kỳ (1-12):"));

if (month >= 1 && month <= 3) {
    alert("Mùa xuân");
} else if (month >= 4 && month <= 6) {
    alert("Mùa hạ");
} else if (month >= 7 && month <= 9) {
    alert("Mùa thu");
} else if (month >= 10 && month <= 12) {
    alert("Mùa đông");
} else {
    alert("Biết 1 năm có bao nhiêu tháng không??? Nhập lại!");
}
