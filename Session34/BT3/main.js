const dish = [
  { name: 'Rau sạch', category: 'Đồ ăn' },
  { name: 'Thịt lợn', category: 'Đồ ăn' },
  { name: 'Pepsi không calo', category: 'Nước' },
  { name: 'CocaCola', category: 'Nước' },
  { name: 'Cờ lê', category: 'Dụng cụ' },
  { name: 'Tuy vít', category: 'Dụng cụ' }
];

function filterProducts() {
  const selectedCategory = document.getElementById("categorySelect").value;
  const productList = document.getElementById("productList");
  productList.innerHTML = '';

  const filteredDishes = selectedCategory === 'Tất cả'
    ? dish
    : dish.filter(item => item.category === selectedCategory);

  filteredDishes.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Tên đồ ăn:</strong> ${item.name} - <strong>Danh mục:</strong> ${item.category}`;
    productList.appendChild(li);
  });
}

// Tự động hiển thị tất cả sản phẩm khi load trang
window.onload = filterProducts;
