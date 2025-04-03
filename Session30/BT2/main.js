const products = [];

function addProduct(id, name, price, category, quantity) {
    products.push({ id, name, price, category, quantity });
    console.log("Product added successfully.");
}

function displayAllProducts() {
    console.log("All Products:");
    products.forEach(product => console.log(product));
}

function displayProductById(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        console.log("Product Details:", product);
    } else {
        console.log("Product not found.");
    }
}

function updateProductById(id, updatedData) {
    const product = products.find(p => p.id === id);
    if (product) {
        Object.assign(product, updatedData);
        console.log("Product updated successfully.");
    } else {
        console.log("Product not found.");
    }
}

function deleteProductById(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        console.log("Product deleted successfully.");
    } else {
        console.log("Product not found.");
    }
}

function filterProductsByPrice(minPrice, maxPrice) {
    const filteredProducts = products.filter(p => p.price >= minPrice && p.price <= maxPrice);
    console.log("Filtered Products:", filteredProducts);
}

function mainMenu() {
    let choice;
    do {
        console.log("\nProduct Management System:");
        console.log("1. Add Product");
        console.log("2. Display All Products");
        console.log("3. Display Product by ID");
        console.log("4. Update Product by ID");
        console.log("5. Delete Product by ID");
        console.log("6. Filter Products by Price Range");
        console.log("7. Exit");
        choice = parseInt(prompt("Enter your choice: "));

        switch (choice) {
            case 1:
                const id = prompt("Enter product ID: ");
                const name = prompt("Enter product name: ");
                const price = parseFloat(prompt("Enter product price: "));
                const category = prompt("Enter product category: ");
                const quantity = parseInt(prompt("Enter product quantity: "));
                addProduct(id, name, price, category, quantity);
                break;
            case 2:
                displayAllProducts();
                break;
            case 3:
                const searchId = prompt("Enter product ID to search: ");
                displayProductById(searchId);
                break;
            case 4:
                const updateId = prompt("Enter product ID to update: ");
                const updatedName = prompt("Enter new name (leave blank to skip): ");
                const updatedPrice = prompt("Enter new price (leave blank to skip): ");
                const updatedCategory = prompt("Enter new category (leave blank to skip): ");
                const updatedQuantity = prompt("Enter new quantity (leave blank to skip): ");
                updateProductById(updateId, {
                    ...(updatedName && { name: updatedName }),
                    ...(updatedPrice && { price: parseFloat(updatedPrice) }),
                    ...(updatedCategory && { category: updatedCategory }),
                    ...(updatedQuantity && { quantity: parseInt(updatedQuantity) })
                });
                break;
            case 5:
                const deleteId = prompt("Enter product ID to delete: ");
                deleteProductById(deleteId);
                break;
            case 6:
                const minPrice = parseFloat(prompt("Enter minimum price: "));
                const maxPrice = parseFloat(prompt("Enter maximum price: "));
                filterProductsByPrice(minPrice, maxPrice);
                break;
            case 7:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice. Please try again.");
        }
    } while (choice !== 7);
}

mainMenu();
