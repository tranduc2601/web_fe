let categories = JSON.parse(localStorage.getItem("categories")) || [];
let editIndex = null;

function renderCategories() {
  const tbody = document.getElementById("categoryTable");
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filter = document.getElementById("filterStatus").value;
  tbody.innerHTML = "";

  const filtered = categories.filter(cat => {
    const matchSearch = cat.name.toLowerCase().includes(search);
    const matchStatus = filter === "all" || cat.status === filter;
    return matchSearch && matchStatus;
  });

  filtered.forEach((cat, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>DM${(index + 1).toString().padStart(3, "0")}</td>
      <td>${cat.name}</td>
      <td><span class="status ${cat.status}">${cat.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</span></td>
      <td class="action-icons">
        <i class="fa-light fa-pen" onclick="editCategory(${index})"></i>
        <i class="fa-light fa-trash-can" onclick="deleteCategory(${index})"></i>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function openModal(editing = false) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalTitle").textContent = editing ? "Chỉnh sửa danh mục" : "Thêm danh mục";
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function resetForm() {
  document.getElementById("categoryForm").reset();
  document.getElementById("nameError").textContent = "";
  document.getElementById("code").value = `DM${(categories.length + 1).toString().padStart(3, "0")}`;
}

function deleteCategory(index) {
  if (confirm("Bạn có chắc chắn muốn xoá không?")) {
    categories.splice(index, 1);
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories();
  }
}

function editCategory(index) {
  editIndex = index;
  const cat = categories[index];
  openModal(true);
  document.getElementById("code").value = `DM${(index + 1).toString().padStart(3, "0")}`;
  document.getElementById("name").value = cat.name;
  document.querySelector(`input[name="status"][value="${cat.status}"]`).checked = true;
}

document.getElementById("btnAdd").onclick = () => {
  editIndex = null;
  resetForm();
  openModal(false);
};

document.getElementById("cancelBtn").onclick =
document.getElementById("cancelBtn2").onclick = closeModal;

document.getElementById("categoryForm").onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const status = document.querySelector('input[name="status"]:checked').value;
  const errorEl = document.getElementById("nameError");

  if (!name) {
    errorEl.textContent = "Tên danh mục không được để trống.";
    return;
  }

  errorEl.textContent = "";

  if (editIndex === null) {
    categories.push({ name, status });
  } else {
    categories[editIndex] = { name, status };
  }

  localStorage.setItem("categories", JSON.stringify(categories));
  closeModal();
  renderCategories();
};

document.getElementById("searchInput").oninput = renderCategories;
document.getElementById("filterStatus").onchange = renderCategories;

window.onload = () => {
  renderCategories();
};
