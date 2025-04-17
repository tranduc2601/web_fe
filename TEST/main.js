
document.addEventListener('DOMContentLoaded', () => {
    let danhMucList = taiDanhMucTuBoNho();

    hienThiDanhMuc(danhMucList);

    const modalThemDanhMucEl = document.getElementById("addCategoryModal");
    if (!modalThemDanhMucEl) {
        console.error("Không tìm thấy phần tử modal với ID 'addCategoryModal'");
        return;
    }
    const modalThemDanhMuc = new bootstrap.Modal(modalThemDanhMucEl);

    const nutThemMoi = document.getElementById("addCategoryBtn");
    if (nutThemMoi) {
        nutThemMoi.addEventListener('click', () => {
            document.getElementById("categoryId").value = '';
            document.getElementById("categoryName").value = '';
            document.getElementById("statusActive").checked = true;
            document.getElementById("categoryIdError").style.display = 'none';
            document.getElementById("categoryNameError").style.display = 'none';
            document.getElementById("addCategoryForm").onsubmit = xuLyThemDanhMuc;
            modalThemDanhMuc.show();
        });
    }

    const nutHuy = document.getElementById("cancelBtn");
    if (nutHuy) {
        nutHuy.addEventListener('click', () => {
            modalThemDanhMuc.hide();
            document.getElementById("addCategoryForm").reset();
            document.getElementById("categoryIdError").style.display = 'none';
            document.getElementById("categoryNameError").style.display = 'none';
        });
    }

    function xuLyThemDanhMuc(suKien) {
        suKien.preventDefault();

        const oMa = document.getElementById("categoryId");
        const oTen = document.getElementById("categoryName");
        const trangThai = document.querySelector('input[name="categoryStatus"]:checked').value;

        const ma = oMa.value.trim();
        const ten = oTen.value.trim();

        let hopLe = true;

        if (!ma) {
            document.getElementById("categoryIdError").style.display = 'block';
            oMa.style.border = "1px solid red";
            hopLe = false;
        } else {
            document.getElementById("categoryIdError").style.display = 'none';
            oMa.style.border = "";
        }

        if (!ten) {
            document.getElementById("categoryNameError").style.display = 'block';
            oTen.style.border = "1px solid red";
            hopLe = false;
        } else {
            document.getElementById("categoryNameError").style.display = 'none';
            oTen.style.border = "";
        }

        if (!hopLe) return;

        if (!/^[a-zA-Z0-9]+$/.test(ma)) {
            alert("Mã danh mục chỉ được chứa chữ cái và số.");
            return;
        }
        if (ten.length > 50) {
            alert("Tên danh mục không được dài quá 50 ký tự.");
            return;
        }
        if (danhMucList.some(dm => dm.id === ma)) {
            alert("Mã danh mục đã tồn tại.");
            return;
        }

        themDanhMuc(ma, ten, trangThai);
        modalThemDanhMuc.hide();
        suKien.target.reset();
    }

    document.getElementById("categorySelect").addEventListener("change", (event) => {
        const trangThai = event.target.value;
        const loc = trangThai === "all" ? danhMucList : locDanhMucTheoTrangThai(trangThai);
        hienThiDanhMuc(loc);
    });

    document.getElementById("searchCategoryByName").addEventListener("input", (event) => {
        const tuKhoa = event.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const ketQua = timKiemDanhMucTheoTen(tuKhoa);
        hienThiDanhMuc(ketQua);
    });

    function luuDanhMucVaoBoNho() {
        try {
            localStorage.setItem("categories", JSON.stringify(danhMucList));
        } catch (e) {
            console.error("Lỗi khi lưu vào localStorage:", e);
        }
    }

    function taiDanhMucTuBoNho() {
        try {
            const data = localStorage.getItem("categories");
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Lỗi khi tải từ localStorage:", e);
            return [];
        }
    }

    function locDanhMucTheoTrangThai(trangThai) {
        return danhMucList.filter(dm => dm.status === trangThai);
    }

    function timKiemDanhMucTheoTen(tuKhoa) {
        return danhMucList.filter(dm =>
            dm.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(tuKhoa)
        );
    }

    function hienThiDanhMuc(danhSach) {
        const tbody = document.getElementById("categoryTableBody");
        tbody.innerHTML = "";
        danhSach.forEach(dm => {
            const trangThaiClass = dm.status === "active" ? "status-active" : "status-inactive";
            const row = `
                <tr>
                    <td>${dm.id}</td>
                    <td>${dm.name}</td>
                    <td><span class="${trangThaiClass}">* ${dm.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</span> </td>
                    <td>
                        <button class="btn btn-danger btn-sm delete-btn" data-id="${dm.id}"><i class="fas fa-trash"></i></button>
                        <button class="btn btn-warning btn-sm ms-2 edit-btn" data-id="${dm.id}"><i class="fas fa-edit"></i></button>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

        document.querySelectorAll(".delete-btn").forEach(nut => {
            nut.addEventListener("click", (e) => {
                const ma = e.target.getAttribute("data-id");
                if (confirm(`Bạn có chắc muốn xóa danh mục ${ma}?`)) {
                    xoaDanhMuc(ma);
                }
            });
        });

        document.querySelectorAll(".edit-btn").forEach(nut => {
            nut.addEventListener("click", (e) => {
                const ma = e.target.getAttribute("data-id");
                const danhMuc = danhMucList.find(dm => dm.id === ma);
                if (danhMuc) {
                    document.getElementById("categoryId").value = danhMuc.id;
                    document.getElementById("categoryName").value = danhMuc.name;
                    document.getElementById("statusActive").checked = danhMuc.status === "active";
                    document.getElementById("statusInactive").checked = danhMuc.status === "inactive";
                    document.getElementById("categoryIdError").style.display = 'none';
                    document.getElementById("categoryNameError").style.display = 'none';
                    modalThemDanhMuc.show();

                    document.getElementById("addCategoryForm").onsubmit = (event) => {
                        event.preventDefault();
                        const tenMoi = document.getElementById("categoryName").value.trim();
                        const trangThaiMoi = document.querySelector('input[name="categoryStatus"]:checked').value;

                        if (!tenMoi) {
                            document.getElementById("categoryNameError").style.display = 'block';
                            return;
                        }
                        if (tenMoi.length > 50) {
                            alert("Tên danh mục không được dài quá 50 ký tự.");
                            return;
                        }

                        if (confirm(`Cập nhật danh mục ${ma}?`)) {
                            capNhatDanhMuc(ma, tenMoi, trangThaiMoi);
                            modalThemDanhMuc.hide();
                            event.target.reset();
                            document.getElementById("addCategoryForm").onsubmit = null;
                        }
                    };
                }
            });
        });
    }

    function xoaDanhMuc(ma) {
        danhMucList = danhMucList.filter(dm => dm.id !== ma);
        luuDanhMucVaoBoNho();
        hienThiDanhMuc(danhMucList);
    }

    function capNhatDanhMuc(ma, ten, trangThai) {
        const index = danhMucList.findIndex(dm => dm.id === ma);
        if (index !== -1) {
            danhMucList[index] = { id: ma, name: ten, status: trangThai };
            luuDanhMucVaoBoNho();
            hienThiDanhMuc(danhMucList);
        }
    }

    function themDanhMuc(ma, ten, trangThai) {
        const moi = { id: ma, name: ten, status: trangThai };
        danhMucList.push(moi);
        luuDanhMucVaoBoNho();
        hienThiDanhMuc(danhMucList);
    }
});
