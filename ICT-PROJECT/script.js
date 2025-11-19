// Form Validation
document.getElementById('feedbackForm')?.addEventListener('submit', function(e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  
  if (!name || !email) {
    e.preventDefault();
    alert('Please fill in all required fields.');
  } else if (!email.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid email.');
  }
});

// Simple Image Slider (for Home page - optional enhancement)
// You can expand this later