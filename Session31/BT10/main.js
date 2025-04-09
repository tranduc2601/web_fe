let employees = [
    { name: "Nguyễn Văn A", position: "Developer" },
    { name: "Trần Thị B", position: "Designer" },
    { name: "Phạm Văn C", position: "Project Manager" },
    { name: "Lê Thị D", position: "QA Engineer" },
    { name: "Vũ Văn E", position: "DevOps" },
    { name: "Hoàng Thị F", position: "HR Manager" },
];

const rowsPerPage = 3; // Số hàng trên mỗi trang
let currentPage = 1;

// Hàm hiển thị danh sách nhân viên
function renderTable(page) {
    const tableBody = document.getElementById("employeeTable");
    tableBody.innerHTML = ""; // Xóa nội dung cũ

    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedEmployees = employees.slice(start, end);

    paginatedEmployees.forEach((employee, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${start + index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        tableBody.appendChild(row);
    });

    renderPagination();
}

// Hàm hiển thị phân trang
function renderPagination() {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = ""; // Xóa nội dung cũ

    const totalPages = Math.ceil(employees.length / rowsPerPage);

    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener("click", () => {
        currentPage--;
        renderTable(currentPage);
    });
    paginationDiv.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.className = currentPage === i ? "active" : "";
        pageButton.addEventListener("click", () => {
            currentPage = i;
            renderTable(currentPage);
        });
        paginationDiv.appendChild(pageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", () => {
        currentPage++;
        renderTable(currentPage);
    });
    paginationDiv.appendChild(nextButton);
}

// Hàm thêm nhân viên mới
function addEmployee() {
    const nameInput = document.getElementById("employeeName");
    const positionInput = document.getElementById("employeePosition");

    const name = nameInput.value.trim();
    const position = positionInput.value.trim();

    if (name && position) {
        employees.push({ name, position });
        nameInput.value = "";
        positionInput.value = "";
        currentPage = Math.ceil(employees.length / rowsPerPage); // Chuyển đến trang cuối
        renderTable(currentPage);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }
}

// Gắn sự kiện cho nút thêm nhân viên
document.getElementById("addEmployeeBtn").addEventListener("click", addEmployee);

// Hiển thị danh sách ban đầu
renderTable(currentPage);