const menu = {};

function addDish(category, dishName, price, description) {
    if (!menu[category]) {
        menu[category] = [];
    }
    menu[category].push({ name: dishName, price, description });
    console.log(`Added ${dishName} to category ${category}.`);
}

function removeDish(category, dishName) {
    if (menu[category]) {
        menu[category] = menu[category].filter(dish => dish.name !== dishName);
        console.log(`Removed ${dishName} from category ${category}.`);
    } else {
        console.log(`Category ${category} does not exist.`);
    }
}

function updateDish(category, dishName, newDetails) {
    if (menu[category]) {
        const dish = menu[category].find(dish => dish.name === dishName);
        if (dish) {
            Object.assign(dish, newDetails);
            console.log(`Updated ${dishName} in category ${category}.`);
        } else {
            console.log(`${dishName} not found in category ${category}.`);
        }
    } else {
        console.log(`Category ${category} does not exist.`);
    }
}

function displayMenu() {
    console.log("Menu:");
    for (const category in menu) {
        console.log(`Category: ${category}`);
        menu[category].forEach(dish => {
            console.log(`  - ${dish.name}: ${dish.price} (${dish.description})`);
        });
    }
}

function searchDish(dishName) {
    console.log(`Searching for ${dishName}...`);
    for (const category in menu) {
        const dish = menu[category].find(dish => dish.name === dishName);
        if (dish) {
            console.log(`Found in category ${category}: ${dish.name} - ${dish.price} (${dish.description})`);
            return;
        }
    }
    console.log(`${dishName} not found in the menu.`);
}

function main() {
    let choice;
    do {
        console.log("\nMenu Management System:");
        console.log("1. Add Dish");
        console.log("2. Remove Dish");
        console.log("3. Update Dish");
        console.log("4. Display Menu");
        console.log("5. Search Dish");
        console.log("6. Exit");
        choice = parseInt(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                const category = prompt("Enter category: ");
                const dishName = prompt("Enter dish name: ");
                const price = parseFloat(prompt("Enter price: "));
                const description = prompt("Enter description: ");
                addDish(category, dishName, price, description);
                break;
            case 2:
                const removeCategory = prompt("Enter category: ");
                const removeDishName = prompt("Enter dish name to remove: ");
                removeDish(removeCategory, removeDishName);
                break;
            case 3:
                const updateCategory = prompt("Enter category: ");
                const updateDishName = prompt("Enter dish name to update: ");
                const newPrice = parseFloat(prompt("Enter new price: "));
                const newDescription = prompt("Enter new description: ");
                updateDish(updateCategory, updateDishName, { price: newPrice, description: newDescription });
                break;
            case 4:
                displayMenu();
                break;
            case 5:
                const searchName = prompt("Enter dish name to search: ");
                searchDish(searchName);
                break;
            case 6:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 6);
}

main();
