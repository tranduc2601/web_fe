const defaultProducts = [
  {
    id: 1,
    name: 'Laptop Dell XPS 15',
    price: 35999000,
    image: 'https://product.hstatic.net/200000553329/product/p-dell-xps-15-9530-core-i7-13700h-16g-1tb-ssd-m-2-pci-e-win11p-rtx4050_576805aaed0a49369173ddc230798438.jpg',
    description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 32999000,
    image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/i/p/iphone-15-pro-max_3.png',
    description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 28999000,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-s928-sm-s928bzvcxxv-539307667?$684_547_JPG$',
    description: 'Smartphone Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
  },
  {
    id: 4,
    name: 'Tai nghe Sony WH-1000XM5',
    price: 7990000,
    image: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/t/a/tai-nghe-chup-tai-sony-wh-1000xm5-2-removebg-preview_2.png',
    description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 11990000,
    image: 'https://product.hstatic.net/200000525189/product/apple-watch-s9-41mm-vien-nhom-day-silicone-1_edd599a5bb67406db06620ee14d21557.jpg',
    description: 'Đồng hồ thông minh cho Apple với tính năng đo nhịp tim và hỗ trợ thể thao.'
  },
  {
    id: 6,
    name: 'Loa JBL Charge 5',
    price: 3990000,
    image: 'https://cdn.tgdd.vn/Products/Images/2162/251230/bluetooth-jbl-charge-5-1-750x500.jpg',
    description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
  }
];
function initializeData() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(defaultProducts));
  }
}
function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}
function renderProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("productList");
  list.innerHTML = '';
  const products = getProducts();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm)
  );
  if (filtered.length === 0) {
    list.innerHTML = `<p class="text-danger">Không tìm thấy sản phẩm.</p>`;
    return;
  }

  filtered.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.description}</p>
          <p class="fw-bold text-primary">${product.price.toLocaleString()} đ</p>
          <button class="btn btn-primary">Buy</button>
        </div>
      </div>
    `;
    list.appendChild(col);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initializeData();
  renderProducts();
  document.getElementById("searchInput").addEventListener("input", renderProducts);
});
