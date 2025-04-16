document.addEventListener('DOMContentLoaded', function() {
  const addNewBtn = document.getElementById('add-new');
  const formContainer = document.getElementById('form-container');
  const form = document.getElementById('member-form');
  const formTitle = document.getElementById('form-title');
  const cancelBtn = document.getElementById('cancel');
  const editBtns = document.querySelectorAll('.edit');

  // Show form for adding new member
  addNewBtn.addEventListener('click', function() {
      formTitle.textContent = 'Add New Member';
      form.reset();
      formContainer.style.display = 'block';
  });

  // Populate form for editing member
  editBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
          const row = btn.closest('tr');
          const id = row.children[0].textContent;
          const name = row.children[1].textContent;
          const email = row.children[2].textContent;
          const role = row.children[3].textContent;

          formTitle.textContent = 'Edit Member';
          document.getElementById('name').value = name;
          document.getElementById('email').value = email;
          document.getElementById('role').value = role;
          formContainer.style.display = 'block';
      });
  });

  // Hide form on cancel
  cancelBtn.addEventListener('click', function() {
      formContainer.style.display = 'none';
  });

  // Handle form submission (placeholder for now)
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      formContainer.style.display = 'none';
      // Add logic here to update table with new/edited member
  });

  // Delete member
  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
          if (confirm('Are you sure you want to delete this member?')) {
              const row = btn.closest('tr');
              row.remove();
          }
      });
  });
});