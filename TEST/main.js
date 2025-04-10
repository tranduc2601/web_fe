const products = [
    {
      name: 'Điện thoại Samsung Galaxy A54',
      price: 7490000,
      image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg'
    },
    {
      name: 'Laptop Dell Inspiron 15',
      price: 15990000,
      image: 'https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053'
    },
    {
      name: 'Tai nghe AirPods Pro',
      price: 4990000,
      image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836'
    },
    {
      name: 'Đồng hồ thông minh Apple Watch',
      price: 8990000,
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA'
    },
    {
      name: 'Máy ảnh Canon EOS M50',
      price: 12990000,
      image: 'https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg'
    },
    {
      name: 'Loa Bluetooth JBL Flip 5',
      price: 1990000,
      image: 'https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910'
    }
  ];
  
  const productGrid = document.getElementById('product-grid');
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  let cart = [];
  
  function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
  }
  
  function renderProducts() {
    products.forEach((product, index) => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${formatCurrency(product.price)}</p>
        <button onclick="addToCart(${index})">Thêm vào giỏ hàng</button>
      `;
      productGrid.appendChild(div);
    });
  }
  
  function addToCart(index) {
    cart.push(products[index]);
    renderCart();
  }
  
  function renderCart() {
    cartItems.innerHTML = '';
    if (cart.length === 0) {
      cartItems.innerHTML = '<div class="empty-cart">Giỏ hàng trống</div>';
      cartTotal.textContent = 'Tổng: 0₫';
      return;
    }
  
    cart.forEach(item => {
      const div = document.createElement('div');
      div.textContent = `${item.name} - ${formatCurrency(item.price)}`;
      cartItems.appendChild(div);
    });
  
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Tổng: ${formatCurrency(total)}`;
  }
  
  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('Giỏ hàng đang trống!');
      return;
    }
    alert('Thanh toán thành công!');
    cart = [];
    renderCart();
  });
  
  renderProducts();
  