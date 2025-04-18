document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const userTableBody = document.getElementById('userTableBody');
    const addUserBtn = document.getElementById('addUserBtn');
    const userModal = document.getElementById('userModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const userForm = document.getElementById('userForm');
    const modalTitle = document.getElementById('modalTitle');
    const userIdInput = document.getElementById('userId');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const saveBtn = document.getElementById('saveBtn'); // Nút Lưu trong modal

    // === Data (Simulated Database) ===
    let users = [
        { id: 1, name: "Nguyễn Văn An", email: "an.nguyen@example.com" },
        { id: 2, name: "Trần Thị Bình", email: "binh.tran@example.com" },
        { id: 3, name: "Lê Văn Cường", email: "cuong.le@example.com" }
    ];
    let nextUserId = 4; // Để tạo ID cho người dùng mới

    // === Functions ===

    /**
     * Render (vẽ) lại toàn bộ bảng người dùng từ mảng users
     */
    function renderTable() {
        userTableBody.innerHTML = ''; // Xóa nội dung cũ
        if (users.length === 0) {
             userTableBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Không có dữ liệu người dùng.</td></tr>';
             return;
        }
        users.forEach(user => {
            const row = userTableBody.insertRow();
            row.setAttribute('data-id', user.id); // Thêm data-id vào thẻ <tr> để dễ truy vấn
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="btn btn-edit" data-id="${user.id}">Sửa</button>
                    <button class="btn btn-delete" data-id="${user.id}">Xóa</button>
                </td>
            `;
        });
    }

    /**
     * Mở Modal
     * @param {'add' | 'edit'} mode - Chế độ mở modal ('add' hoặc 'edit')
     * @param {object | null} userData - Dữ liệu người dùng (chỉ cần cho mode 'edit')
     */
    function showModal(mode = 'add', userData = null) {
        userForm.reset(); // Xóa dữ liệu form cũ
        userIdInput.value = ''; // Reset trường ID ẩn

        if (mode === 'add') {
            modalTitle.textContent = 'Thêm người dùng mới';
            saveBtn.textContent = 'Thêm'; // Đặt lại text nút Lưu/Thêm
        } else if (mode === 'edit' && userData) {
            modalTitle.textContent = 'Chỉnh sửa người dùng';
            userIdInput.value = userData.id;
            nameInput.value = userData.name;
            emailInput.value = userData.email;
            saveBtn.textContent = 'Cập nhật'; // Đặt lại text nút Lưu/Thêm
            // Điền dữ liệu vào các trường khác nếu có
        }

        modalOverlay.classList.add('active');
        userModal.classList.add('active');
    }

    /**
     * Đóng Modal
     */
    function hideModal() {
        modalOverlay.classList.remove('active');
        userModal.classList.remove('active');
        userForm.reset(); // Đảm bảo form sạch khi đóng
    }

    /**
     * Xử lý sự kiện submit form (Thêm hoặc Sửa)
     * @param {Event} event
     */
    function handleFormSubmit(event) {
        event.preventDefault(); // Ngăn form submit theo cách truyền thống

        const id = userIdInput.value; // Lấy ID từ trường ẩn
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Validation đơn giản
        if (!name || !email) {
            alert('Vui lòng nhập đầy đủ Tên và Email.');
            return;
        }

        const userData = { name, email };

        if (id) {
            // --- Chế độ Sửa ---
            userData.id = parseInt(id, 10); // Chuyển ID sang số nguyên
            const index = users.findIndex(user => user.id === userData.id);
            if (index !== -1) {
                users[index] = userData; // Cập nhật trong mảng dữ liệu
                console.log('Đã cập nhật user:', userData);
                 // Tùy chọn: Cập nhật trực tiếp hàng trong DOM thay vì render lại cả bảng
                 const rowToUpdate = userTableBody.querySelector(`tr[data-id="${userData.id}"]`);
                 if (rowToUpdate) {
                     rowToUpdate.cells[1].textContent = userData.name;
                     rowToUpdate.cells[2].textContent = userData.email;
                 } else {
                      renderTable(); // Hoặc render lại nếu không tìm thấy row
                 }
            } else {
                console.error("Không tìm thấy user để cập nhật với ID:", id);
                // Có thể render lại bảng để đảm bảo đồng bộ
                 renderTable();
            }
        } else {
            // --- Chế độ Thêm ---
            userData.id = nextUserId++; // Gán ID mới và tăng biến đếm
            users.push(userData); // Thêm vào mảng dữ liệu
            console.log('Đã thêm user:', userData);
            // Thêm hàng mới vào bảng (thay vì render lại toàn bộ)
            const newRow = userTableBody.insertRow();
            newRow.setAttribute('data-id', userData.id);
            newRow.innerHTML = `
                <td>${userData.id}</td>
                <td>${userData.name}</td>
                <td>${userData.email}</td>
                <td>
                    <button class="btn btn-edit" data-id="${userData.id}">Sửa</button>
                    <button class="btn btn-delete" data-id="${userData.id}">Xóa</button>
                </td>
            `;
            // Nếu bảng đang trống, xóa thông báo "Không có dữ liệu"
            const emptyRow = userTableBody.querySelector('td[colspan="4"]');
            if (emptyRow) emptyRow.closest('tr').remove();
        }

        hideModal(); // Đóng modal sau khi thêm/sửa thành công
        // renderTable(); // Render lại toàn bộ bảng (cách đơn giản nhất để cập nhật UI)
    }

     /**
     * Xử lý sự kiện click trong bảng (Sửa/Xóa)
     * @param {Event} event
     */
    function handleTableClick(event) {
        const target = event.target; // Element được click

        // --- Xử lý nút Sửa ---
        if (target.classList.contains('btn-edit')) {
            const userId = parseInt(target.getAttribute('data-id'), 10);
            const userToEdit = users.find(user => user.id === userId);
            if (userToEdit) {
                showModal('edit', userToEdit);
            } else {
                 console.error("Không tìm thấy user để sửa với ID:", userId);
            }
        }

        // --- Xử lý nút Xóa ---
        if (target.classList.contains('btn-delete')) {
            const userId = parseInt(target.getAttribute('data-id'), 10);
            const userToDelete = users.find(user => user.id === userId);

            if (userToDelete && confirm(`Bạn có chắc chắn muốn xóa người dùng "${userToDelete.name}" (ID: ${userId}) không?`)) {
                // Xóa khỏi mảng dữ liệu
                users = users.filter(user => user.id !== userId);
                console.log('Đã xóa user ID:', userId);

                // Xóa hàng khỏi bảng trong DOM
                target.closest('tr').remove();

                 // Hiển thị thông báo nếu bảng trống
                 if (users.length === 0) {
                      renderTable();
                 }
            }
        }
    }

    // === Event Listeners ===
    addUserBtn.addEventListener('click', () => showModal('add')); // Mở modal ở chế độ thêm
    closeModalBtn.addEventListener('click', hideModal);          // Đóng modal bằng nút X
    cancelBtn.addEventListener('click', hideModal);            // Đóng modal bằng nút Hủy
    modalOverlay.addEventListener('click', hideModal);         // Đóng modal khi click ra ngoài
    userForm.addEventListener('submit', handleFormSubmit);       // Xử lý khi submit form
    userTableBody.addEventListener('click', handleTableClick);   // Xử lý click Sửa/Xóa trong bảng

    // === Initial Render ===
    renderTable(); // Vẽ bảng lần đầu khi trang tải xong

});