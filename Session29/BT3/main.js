const menu = {};

function addDish(category, dishName, price, description) {
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name: dishName, price, description });
    alert(`Đã thêm món "${dishName}" vào danh mục "${category}".`);
}

function removeDish(category, dishName) {
    if (menu[category]) {
        const initialLength = menu[category].length;
        menu[category] = menu[category].filter(dish => dish.name !== dishName);
        if (menu[category].length < initialLength) {
            alert(`Đã xóa món "${dishName}" khỏi danh mục "${category}".`);
        } else {
            alert(`Không tìm thấy món "${dishName}" trong danh mục "${category}".`);
        }
    } else {
        alert(`Danh mục "${category}" không tồn tại.`);
    }
}

function updateDish(category, dishName, newDetails) {
    if (menu[category]) {
        const dish = menu[category].find(dish => dish.name === dishName);
        if (dish) {
            Object.assign(dish, newDetails);
            alert(`Đã cập nhật món "${dishName}" trong danh mục "${category}".`);
        } else {
            alert(`Không tìm thấy món "${dishName}" trong danh mục "${category}".`);
        }
    } else {
        alert(`Danh mục "${category}" không tồn tại.`);
    }
}

function displayMenu() {
    let output = "TOÀN BỘ MENU:\n";
    for (const category in menu) {
        output += `Danh mục: ${category}\n`;
        menu[category].forEach(dish => {
            output += `  ${dish.name} - ${dish.price}đ (${dish.description})\n`;
        });
    }
    alert(output);
}

function searchDish(dishName) {
    for (const category in menu) {
        const dish = menu[category].find(dish => dish.name === dishName);
        if (dish) {
            alert(`Tìm thấy trong danh mục "${category}":\n${dish.name} - ${dish.price}đ\n(${dish.description})`);
            return;
        }
    }
    alert(`Không tìm thấy món "${dishName}" trong menu.`);
}

function main() {
    let choice;
    do {
        choice = prompt(
            "QUẢN LÝ MENU NHÀ HÀNG\n" +
            "1. Thêm món ăn vào danh mục\n" +
            "2. Xóa món ăn khỏi danh mục\n" +
            "3. Cập nhật món ăn\n" +
            "4. Hiển thị toàn bộ menu\n" +
            "5. Tìm kiếm món ăn theo tên\n" +
            "6. Thoát\n\n" +
            "Nhập lựa chọn của bạn (1-6):"
        );

        switch (parseInt(choice)) {
            case 1:
                const catAdd = prompt("Nhập danh mục:");
                const nameAdd = prompt("Nhập tên món:");
                const priceAdd = parseFloat(prompt("Nhập giá món:"));
                const descAdd = prompt("Nhập mô tả:");
                addDish(catAdd, nameAdd, priceAdd, descAdd);
                break;
            case 2:
                const catRemove = prompt("Nhập danh mục:");
                const nameRemove = prompt("Nhập tên món cần xóa:");
                removeDish(catRemove, nameRemove);
                break;
            case 3:
                const catUpdate = prompt("Nhập danh mục:");
                const nameUpdate = prompt("Nhập tên món cần cập nhật:");
                const priceUpdate = parseFloat(prompt("Nhập giá mới:"));
                const descUpdate = prompt("Nhập mô tả mới:");
                updateDish(catUpdate, nameUpdate, { price: priceUpdate, description: descUpdate });
                break;
            case 4:
                displayMenu();
                break;
            case 5:
                const nameSearch = prompt("Nhập tên món cần tìm:");
                searchDish(nameSearch);
                break;
            case 6:
                alert("Đã thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    } while (choice !== "6");
}

main();
