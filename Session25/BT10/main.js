// input : Sản phẩm, lựa chọn, tên sản phẩm mua
// output: ds sp, hiển thị tb sản phẩm, giỏ hàng sau khi mua, tổng hóa đơn

let products= [ ["mì tôm", 5, 5000], ["bánh mì", 12, 15000], ["bánh bao", 5, 8000], ["mèn mén", 30, 20000]]

let cart = []

function showProduct() {
    for (let i = 0; i < products.length; i++) { 
       console.log(`${i+1}-${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${products[i][2]} vnđ`);
    }
}

function buyProduct() {
    let productName = prompt("Nhập tên sản phẩm: ");
    for (let i = 0; i < products.length; i++) {
        if (productName == products[i][0]) {
            if (products[i][1] === 0) {
                alert("Sản phẩm đã hết hàng!");
                return;
            }
            let existInCart = false;
            let cartIndex = -1;
            for (let j = 0; j < cart.length; j++) {
                if (cart[j][0] === products[i][0]) {
                    existInCart = true;
                    cartIndex = j;
                    break;
                }
            }
            if (existInCart) {
                cart[cartIndex][1]++; 
                products[i][1]--; 
                alert("Đã thêm vào giỏ hàng!");
            } else {
                cart.push([products[i][0], 1, products[i][2]]);
                products[i][1]--;
                alert("Đã thêm vào giỏ hàng!");
            }
            break;
        }
    }
    
    console.log("Sản phẩm trong giỏ hàng: ");
    for (let i = 0; i < cart.length; i++) {
        console.log(`${i+1}-${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${cart[i][2]} vnđ`);
    }
}

function menu() {
    let choice;
    do {
        console.log("====== MENU ======");
        console.log("1. Hiển thị sản phẩm");
        console.log("2. Thêm vào giỏ hàng");
        console.log("3. Hiển thị hóa đơn");
        console.log("4. Thoát");
        console.log("=================");
        choice = prompt("Nhập lựa chọn của bạn: "); // string
       
        switch (choice) {
            case "1":
                console.log("Hiển thị sản phẩm trong kho");
                showProduct();
                break;
            case "2":
                console.log("Thêm vào giỏ hàng");
                buyProduct();
                break;
            case "3":
                console.log("Hiển thị hóa đơn");
                let total = 0;
                for (let i = 0; i < cart.length; i++) {
                    total += cart[i][1] * cart[i][2];
                }
                console.log("Tổng hóa đơn: " + total + " vnđ");
                break;
            case "4":
                console.log("Thoát");
                break;
            default:
                alert("Lựa chọn không hợp lệ!");
                break;
        }
        
    } while (choice !== "4")
}
menu();