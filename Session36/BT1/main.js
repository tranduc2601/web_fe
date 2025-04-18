// Lấy các phần tử DOM cần thiết
const inputSection = document.getElementById('input-section');
const greetingSection = document.getElementById('greeting-section');
const nameInput = document.getElementById('name-input');
const saveButton = document.getElementById('save-button');
const displayName = document.getElementById('display-name');
const changeNameButton = document.getElementById('change-name-button');

// Key để lưu tên trong localStorage
const USERNAME_KEY = 'username';

// Hàm hiển thị lời chào
function showGreeting(username) {
    displayName.textContent = username; // Cập nhật tên hiển thị
    inputSection.classList.add('hidden'); // Ẩn phần nhập liệu
    greetingSection.classList.remove('hidden'); // Hiện phần chào mừng
}

// Hàm hiển thị form nhập tên
function showInputForm() {
    inputSection.classList.remove('hidden'); // Hiện phần nhập liệu
    greetingSection.classList.add('hidden'); // Ẩn phần chào mừng
    nameInput.value = ''; // Xóa nội dung input cũ (tùy chọn)
    nameInput.focus(); // Focus vào ô input
}

// Xử lý sự kiện khi nhấn nút "Lưu"
function handleSaveClick() {
    const currentName = nameInput.value.trim(); // Lấy tên từ input và loại bỏ khoảng trắng thừa

    // Kiểm tra xem tên có rỗng không
    if (currentName) {
        localStorage.setItem(USERNAME_KEY, currentName); // Lưu tên vào localStorage
        showGreeting(currentName); // Hiển thị lời chào
    } else {
        // Có thể thêm thông báo lỗi nếu người dùng không nhập gì
        alert('Vui lòng nhập tên của bạn!');
        nameInput.focus();
    }
}

// Xử lý sự kiện khi nhấn nút "Đổi tên"
function handleChangeNameClick() {
    // Xóa tên đã lưu để lần sau tải lại sẽ hiện form nhập
    // localStorage.removeItem(USERNAME_KEY); // Bỏ dòng này nếu muốn giữ tên cũ khi quay lại
    showInputForm(); // Hiển thị lại form nhập tên
}

// === Khởi tạo khi trang được tải ===

// Lấy tên đã lưu từ localStorage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername) {
    // Nếu có tên đã lưu, hiển thị lời chào ngay
    showGreeting(savedUsername);
} else {
    // Nếu chưa có tên, hiển thị form nhập liệu
    showInputForm(); // Đảm bảo form nhập liệu hiển thị đúng
}

// Gán sự kiện click cho các nút
saveButton.addEventListener('click', handleSaveClick);
changeNameButton.addEventListener('click', handleChangeNameClick);

// Cho phép nhấn Enter trong ô input để lưu
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Ngăn hành vi mặc định của Enter (nếu có form)
        handleSaveClick(); // Gọi hàm xử lý lưu
    }
});