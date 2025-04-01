function formatDates(dateArray) {
    let isArray = Array.isArray(dateArray);
    if (!isArray) {
        return "Dữ liệu không hợp lệ";
    }
    let arrayLength = dateArray.length;
    if (arrayLength === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = [];
    for (let i = 0; i < dateArray.length; i++) {
        let currentDate = dateArray[i];
        let datePattern = /^\d{4}-\d{2}-\d{2}$/;
        let isValidFormat = datePattern.test(currentDate);
        if (!isValidFormat) {
            result.push("Ngày không hợp lệ");
            continue;
        }
        let dateParts = currentDate.split("-");
        let year = dateParts[0];
        let month = dateParts[1];
        let day = dateParts[2];
        let formattedDate = day + "/" + month + "/" + year;
        result.push(formattedDate);
    }
    return result;
}
console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"]));
console.log(formatDates([]));
console.log(formatDates("abc"));