//input time
const hours = parseInt(prompt("Enter hours (0-23):"), 10);
const minutes = parseInt(prompt("Enter minutes (0-59):"), 10);
const seconds = parseInt(prompt("Enter seconds (0-59):"), 10);
// ktr time
if (
    isNaN(hours) || hours < 0 || hours > 23 ||
    isNaN(minutes) || minutes < 0 || minutes > 59 ||
    isNaN(seconds) || seconds < 0 || seconds > 59
) {
    console.error("Invalid time input.");
} else {
    // chuyen doi sang 12h va thong bao
    const period = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12; // 0h ---> 12h
    const timeIn12HourFormat = `${adjustedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`;
    alert(`Time in 12-hour format: ${timeIn12HourFormat}`);
}
