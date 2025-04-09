const products = [
  {
    id: 1,
    name: 'Laptop Dell XPS 15',
    price: 35999000,
    image: 'https://th.bing.com/th/id/R.d66d6a48245acad21de37b88f7993a10e?rik=1elegG0LfL5zTIA&pid=ImgRaw&r=0',
    description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro Max',
    price: 32999000,
    image: 'https://th.bing.com/th/id/OIP.P0BM80Vnzd_455at0qGawAHaFj?rs=1&pid=ImgDetMain',
    description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra',
    price: 28999000,
    image: 'https://th.bing.com/th/id/OIP.n52ECo4C01ed2cLhNKfPAHAHaEw?rs=1&pid=ImgDetMain',
    description: 'Smartphone Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
  },
  {
    id: 4,
    name: 'Tai nghe Sony WH-1000XM5',
    price: 7990000,
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-1jv36ef8u9uy3f',
    description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 11990000,
    image: 'https://9to5mac.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
    description: 'Đồng hồ thông minh cho Apple với tính năng đo nhịp tim và hỗ trợ thể thao.'
  },
  {
    id: 6,
    name: 'Loa JBL Charge 5',
    price: 3990000,
    image: 'https://th.bing.com/th/id/OIP.kNp6GeLw1ih9D8X3lkDZSHQHaHa?rs=1&pid=ImgDetMain',
    description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
  }
];

function renderProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("productList");
  list.innerHTML = '';

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

window.onload = renderProducts;
