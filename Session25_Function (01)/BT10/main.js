let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = []; 

function showProducts() {
    console.log("Danh sách sản phẩm có sẵn:");
    products.forEach(product => {
        console.log(`- ${product[0]} | Số lượng: ${product[1]} | Giá: ${product[2]} VND`);
    });
}

function addToCart(productName) {
    let product = products.find(p => p[0].toLowerCase() === productName.toLowerCase());

    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return;
    }

    if (product[1] === 0) {
        console.log("Sản phẩm đã hết hàng.");
        return;
    }

    let cartItem = cart.find(p => p[0] === product[0]);
    if (cartItem) {
        cartItem[1] += 1;
    } else {
        cart.push([product[0], 1, product[2]]);
    }

    product[1] -= 1;
    console.log(`Đã thêm ${product[0]} vào giỏ hàng.`);
}

function showCart() {
    console.log("Giỏ hàng của bạn:");
    cart.forEach(item => {
        console.log(`- ${item[0]} | Số lượng: ${item[1]} | Giá: ${item[2]} VND`);
    });
}

function checkout() {
    let total = cart.reduce((sum, item) => sum + item[1] * item[2], 0);
    console.log("Hóa đơn thanh toán:");
    showCart();
    console.log(`Tổng tiền: ${total} VND`);
}

// Chương trình chính
function shopping() {
    while (true) {
        console.log("\n1. Xem sản phẩm\n2. Mua hàng\n3. Xem giỏ hàng\n4. Thanh toán\n5. Thoát");
        let choice = prompt("Nhập lựa chọn của bạn:");

        switch (choice) {
            case "1":
                showProducts();
                break;
            case "2":
                let productName = prompt("Nhập tên sản phẩm muốn mua:");
                addToCart(productName);
                break;
            case "3":
                showCart();
                break;
            case "4":
                checkout();
                return;
            case "5":
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
        }
    }
}

// Chạy chương trình mua sắm
shopping();
