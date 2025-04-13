document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelector(".form-message").textContent = "Message envoyé avec succès !";
  this.reset();
});
