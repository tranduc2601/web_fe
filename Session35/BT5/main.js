let employees = [
  { name: "Nguyễn Văn A", position: "Developer" },
  { name: "Trần Thị B", position: "Designer" },
  { name: "Phạm Văn C", position: "Project Manager" },
  { name: "Lê Thị D", position: "QA Engineer" },
  { name: "Vũ Văn E", position: "DevOps" },
  { name: "Hoàng Thị F", position: "HR Manager" },
];

const rowsPerPage = 3;
let currentPage = 1;


function loadEmployeesFromLocalStorage() {
  const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
  employees = storedEmployees.length > 0 ? storedEmployees : employees;
}

function saveEmployeesToLocalStorage() {
  localStorage.setItem("employees", JSON.stringify(employees));
}

function renderTable(page) {
  const tableBody = document.getElementById("employeeTable");
  tableBody.innerHTML = "";

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


function renderPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = ""; 

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


function addEmployee() {
  const nameInput = document.getElementById("employeeName");
  const positionInput = document.getElementById("employeePosition");

  const name = nameInput.value.trim();
  const position = positionInput.value.trim();

  if (name && position) {
      employees.push({ name, position });
      saveEmployeesToLocalStorage();
      nameInput.value = "";
      positionInput.value = "";
      currentPage = Math.ceil(employees.length / rowsPerPage);
      renderTable(currentPage);
  } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
  }
}


document.getElementById("addEmployeeBtn").addEventListener("click", addEmployee);


loadEmployeesFromLocalStorage();
renderTable(currentPage);