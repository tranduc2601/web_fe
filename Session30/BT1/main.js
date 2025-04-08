let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 28000, quantity: 21, category: "món ăn dân tộc Mông" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

function showProductsByCategory() {
    const categories = [...new Set(products.map(p => p.category))];
    let message = "Các danh mục:\n";
    categories.forEach((cat, index) => message += `${index + 1}. ${cat}\n`);
    let choice = prompt(message + "\nNhập tên danh mục muốn xem:");
    let selected = products.filter(p => p.category === choice);
    if (selected.length === 0) {
        alert("Không tìm thấy sản phẩm trong danh mục này.");
    } else {
        let result = `Sản phẩm trong danh mục "${choice}":\n`;
        selected.forEach(p => {
            result += `${p.id}. ${p.name} - ${p.price}đ (SL: ${p.quantity})\n`;
        });
        alert(result);
    }
}

function addToCart() {
    let productList = "Danh sách sản phẩm:\n";
    products.forEach(p => {
        productList += `ID: ${p.id} - ${p.name} | Giá: ${p.price}đ | SL còn: ${p.quantity}\n`;
    });
    alert(productList);

    let productId = parseInt(prompt("Nhập ID sản phẩm muốn mua:"));
    let product = products.find(p => p.id === productId);

    if (!product) {
        alert("Sản phẩm không tồn tại.");
        return;
    }

    if (product.quantity === 0) {
        alert("Sản phẩm đã hết hàng.");
        return;
    }

    let quantity = parseInt(prompt(`Nhập số lượng muốn mua (còn lại: ${product.quantity}):`));
    if (isNaN(quantity) || quantity <= 0) {
        alert("Số lượng không hợp lệ.");
        return;
    }

    if (quantity > product.quantity) {
        alert("Không đủ số lượng trong cửa hàng.");
        return;
    }

    let existing = cart.find(c => c.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    product.quantity -= quantity;
    alert(`Đã thêm ${quantity} "${product.name}" vào giỏ hàng.`);
}


function sortCart(ascending = true) {
    cart.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
    let message = "Giỏ hàng sắp xếp theo giá " + (ascending ? "tăng dần" : "giảm dần") + ":\n";
    cart.forEach(item => {
        message += `${item.name} - ${item.price}đ x${item.quantity}\n`;
    });
    alert(message);
}

function totalCart() {
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng tiền trong giỏ hàng: ${total}đ`);
}

function main() {
    let choice;
    do {
        choice = prompt(
            "=== QUẢN LÝ GIỎ HÀNG ===\n" +
            "1. Hiển thị sản phẩm theo danh mục\n" +
            "2. Chọn sản phẩm để mua\n" +
            "3. Sắp xếp sản phẩm trong giỏ hàng\n" +
            "4. Tính tổng tiền giỏ hàng\n" +
            "5. Thoát\n" +
            "Nhập lựa chọn (1-5):"
        );

        switch (parseInt(choice)) {
            case 1:
                showProductsByCategory();
                break;
            case 2:
                addToCart();
                break;
            case 3:
                let sortType = prompt("Chọn kiểu sắp xếp:\na. Tăng dần\nb. Giảm dần\nNhập a hoặc b:");
                if (sortType === "a") sortCart(true);
                else if (sortType === "b") sortCart(false);
                else alert("Lựa chọn không hợp lệ.");
                break;
            case 4:
                totalCart();
                break;
            case 5:
                alert("Cảm ơn bạn đã sử dụng chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
        }
    } while (choice !== "5");
}

main();
