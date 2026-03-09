// Alert button click
document.getElementById('alertBtn').addEventListener('click', () => {
  alert('Button clicked! Thanks for interacting.');
});

// Simple form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const formMessage = document.getElementById('formMessage');

  if (name && email && message) {
    formMessage.textContent = `Thanks for reaching out, ${name}! We'll get back to you soon.`;
    formMessage.style.color = 'green';

    // Clear form
    this.reset();
  } else {
    formMessage.textContent = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  }
});
