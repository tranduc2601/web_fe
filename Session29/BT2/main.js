let products = []; // Mảng lưu sản phẩm

function addProduct() {
    let id = products.length + 1;
    let name = prompt("Nhập tên sản phẩm:");
    let price = parseFloat(prompt("Nhập giá sản phẩm:"));
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

    if (!name || isNaN(price) || !category || isNaN(quantity)) {
        alert("Thông tin không hợp lệ!");
        return;
    }

    products.push({ id, name, price, category, quantity });
    alert("Thêm sản phẩm thành công!");
}

function displayAllProducts() {
    if (products.length === 0) {
        alert("Danh sách sản phẩm trống!");
        return;
    }

    let result = "Danh sách sản phẩm:\n";
    products.forEach(p => {
        result += `ID: ${p.id} - Tên: ${p.name} - Giá: ${p.price} - Danh mục: ${p.category} - Số lượng: ${p.quantity}\n`;
    });

    alert(result);
}

function displayProductById() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xem:"));
    let product = products.find(p => p.id === id);

    if (product) {
        alert(`Sản phẩm ID ${id}:\nTên: ${product.name}\nGiá: ${product.price}\nDanh mục: ${product.category}\nSố lượng: ${product.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}

function updateProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    let product = products.find(p => p.id === id);

    if (!product) {
        alert("Không tìm thấy sản phẩm!");
        return;
    }

    product.name = prompt("Nhập tên mới:", product.name) || product.name;
    product.price = parseFloat(prompt("Nhập giá mới:", product.price)) || product.price;
    product.category = prompt("Nhập danh mục mới:", product.category) || product.category;
    product.quantity = parseInt(prompt("Nhập số lượng mới:", product.quantity)) || product.quantity;

    alert("Cập nhật thành công!");
}

function deleteProduct() {
    let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    let index = products.findIndex(p => p.id === id);

    if (index === -1) {
        alert("Không tìm thấy sản phẩm!");
        return;
    }

    products.splice(index, 1);
    alert("Xóa thành công!");
}

function filterProductsByPrice() {
    let minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
    let maxPrice = parseFloat(prompt("Nhập giá tối đa:"));

    if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
        alert("Khoảng giá không hợp lệ!");
        return;
    }

    let filtered = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    if (filtered.length === 0) {
        alert("Không có sản phẩm nào trong khoảng giá này!");
    } else {
        let result = "Sản phẩm trong khoảng giá:\n";
        filtered.forEach(p => {
            result += `ID: ${p.id} - Tên: ${p.name} - Giá: ${p.price}\n`;
        });
        alert(result);
    }
}

function main() {
    while (true) {
        let choice = prompt(
            "Chọn chức năng:\n1. Thêm sản phẩm\n2. Hiển thị tất cả sản phẩm\n3. Xem chi tiết sản phẩm theo ID\n4. Cập nhật sản phẩm\n5. Xóa sản phẩm\n6. Lọc sản phẩm theo giá\n7. Thoát"
        );

        switch (choice) {
            case "1": addProduct(); break;
            case "2": displayAllProducts(); break;
            case "3": displayProductById(); break;
            case "4": updateProduct(); break;
            case "5": deleteProduct(); break;
            case "6": filterProductsByPrice(); break;
            case "7": alert("Tạm biệt!"); return;
            default: alert("Lựa chọn không hợp lệ!");
        }
    }
}

// Chạy chương trình
main();
