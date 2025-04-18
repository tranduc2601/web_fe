// main.js

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Element References ---
  const stars = document.querySelectorAll('.stars'); // Chọn tất cả các phần tử sao
  const ratingContainer = document.getElementById('rating'); // Container chứa các sao
  const selectedRatingDisplay = document.getElementById('selected-rating'); // Đoạn văn bản hiển thị đánh giá đã chọn
  const commentInput = document.getElementById('comment-input'); // Textarea nhập bình luận
  const commentList = document.getElementById('comment-list'); // Danh sách ul hiển thị bình luận
  // Lấy nút Gửi bằng cách tìm button bên trong .comment-section
  // (Giả sử chỉ có một button ở đó hoặc là button đầu tiên)
  const submitButton = document.querySelector('.comment-section button');

  // --- State Variable ---
  let currentRating = 0; // Lưu trữ đánh giá hiện tại (0 là chưa chọn)

  // --- Functions ---

  /**
   * Highlight các sao dựa trên giá trị rating được cung cấp.
   * @param {number} ratingValue - Giá trị rating (1-5) để highlight. 0 sẽ xóa hết highlight.
   */
  const highlightStars = (ratingValue) => {
      stars.forEach(star => {
          const starValue = parseInt(star.getAttribute('data-value'), 10); // Lấy giá trị của sao (1-5)
          // Thêm class 'active' nếu giá trị của sao <= ratingValue
          if (starValue <= ratingValue) {
              star.classList.add('active');
              // Bạn có thể đổi textContent thành ★ nếu muốn sao đầy/rỗng thay vì chỉ đổi màu
              // star.textContent = '★';
          } else {
              star.classList.remove('active');
              // star.textContent = '☆';
          }
      });
  };

  /**
   * Cập nhật dòng chữ hiển thị số sao đã chọn.
   * @param {number} ratingValue - Số sao đã chọn (0-5).
   */
  const updateRatingDisplay = (ratingValue) => {
      if (ratingValue > 0) {
          selectedRatingDisplay.textContent = `Bạn đã đánh giá: ${ratingValue} sao`;
      } else {
          selectedRatingDisplay.textContent = 'Bạn chưa đánh giá.';
      }
  };

  /**
   * Tạo chuỗi ký tự sao dựa trên rating (ví dụ: ★★★☆☆).
   * @param {number} ratingValue - Rating (1-5).
   * @returns {string} Chuỗi ký tự sao.
   */
  const generateStarString = (ratingValue) => {
      let starString = '';
      // Tạo chuỗi ★★★★★ dựa trên ratingValue
      for (let i = 1; i <= ratingValue; i++) {
           starString += '★';
      }
      // Thêm các sao rỗng nếu cần (ví dụ ★★★☆☆) - Bỏ qua nếu chỉ muốn hiển thị sao vàng
      // for (let i = ratingValue + 1; i <= 5; i++) {
      //     starString += '☆';
      // }
      return starString; // Chỉ trả về các sao vàng ★
  };

  /**
   * Xử lý việc gửi đánh giá (rating + comment).
   */
  window.submitReview = () => { // Định nghĩa global để onclick trong HTML hoạt động
      const commentText = commentInput.value.trim();

      // Kiểm tra dữ liệu đầu vào
      if (currentRating === 0) {
          alert('Vui lòng chọn số sao đánh giá trước khi gửi.');
          return;
      }
      // Cho phép gửi comment rỗng nếu muốn, nếu không thì thêm kiểm tra:
      // if (!commentText) {
      //     alert('Vui lòng nhập bình luận.');
      //      commentInput.focus();
      //     return;
      // }

      // Tạo phần tử li mới cho bình luận
      const listItem = document.createElement('li');

      // Tạo span chứa các sao đánh giá
      const ratingSpan = document.createElement('span');
      ratingSpan.textContent = generateStarString(currentRating); // Hiển thị dạng ★★★★★
      // Màu vàng đã được CSS xử lý qua class .comment-list span

      // Tạo thẻ b chứa nội dung bình luận (theo ví dụ trong HTML)
      const commentContent = document.createElement('b');
      commentContent.textContent = commentText || " "; // Hiển thị khoảng trắng nếu comment rỗng

      // Gắn các phần tử con vào listItem
      listItem.appendChild(ratingSpan);
      listItem.appendChild(commentContent);

      // Thêm listItem vào danh sách bình luận trên trang
      commentList.appendChild(listItem);

      // Reset lại trạng thái
      commentInput.value = ''; // Xóa nội dung textarea
      currentRating = 0; // Reset rating đã chọn
      highlightStars(0); // Xóa highlight sao
      updateRatingDisplay(0); // Cập nhật lại dòng chữ trạng thái
  };


  // --- Event Listeners ---

  // Thêm sự kiện cho từng ngôi sao
  stars.forEach(star => {
      // Khi di chuột LÊN ngôi sao
      star.addEventListener('mouseover', () => {
          const hoverValue = parseInt(star.getAttribute('data-value'), 10);
          highlightStars(hoverValue); // Highlight các sao tính đến sao đang hover
      });

      // Khi NHẤN CHUỘT vào ngôi sao
      star.addEventListener('click', () => {
          currentRating = parseInt(star.getAttribute('data-value'), 10); // Lưu lại rating
          highlightStars(currentRating); // Giữ highlight theo rating đã chọn
          updateRatingDisplay(currentRating); // Cập nhật dòng chữ hiển thị
      });
  });

  // Khi di chuột RA KHỎI khu vực chứa các sao
  ratingContainer.addEventListener('mouseout', () => {
      // Reset highlight về đúng rating đã chọn (hoặc 0 nếu chưa chọn)
      highlightStars(currentRating);
  });

  // Lắng nghe sự kiện click trên nút Gửi (nếu không dùng onclick)
  // if (submitButton) {
  //     submitButton.addEventListener('click', submitReview);
  // } else {
  //     console.error("Không tìm thấy nút Gửi!");
  // }


  // --- Initial Setup ---
  highlightStars(currentRating); // Đảm bảo các sao không được highlight ban đầu
  updateRatingDisplay(currentRating); // Hiển thị dòng chữ ban đầu

}); // Kết thúc DOMContentLoaded