//input time
const hours = parseInt(prompt("Nhập giờ (0-23):"), 10);
const minutes = parseInt(prompt("Nhập phút (0-59):"), 10);
const seconds = parseInt(prompt("Nhập giây (0-59):"), 10);
// ktr time
if (
    isNaN(hours) || hours < 0 || hours > 23 ||
    isNaN(minutes) || minutes < 0 || minutes > 59 ||
    isNaN(seconds) || seconds < 0 || seconds > 59
) {
    console.error("Thời gian nhập không đúng.");
} else {
    // chuyen doi sang 12h va thong bao
    const period = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours === 0 ? 0 : (hours % 12 || 12);//0h sẽ là 0 A.M thay vì 12 A.M
    const timeIn12HourFormat = `${adjustedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;
    alert(`Định dạng theo A.M || P.M: ${timeIn12HourFormat}`);
}
