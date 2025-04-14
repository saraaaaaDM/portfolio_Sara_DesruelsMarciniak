
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelector(".form-message").textContent = "Message envoyé avec succès !";
  this.reset();
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  
  if (window.scrollY > hero.offsetHeight) {
    navbar.classList.add('scrolled'); 
  } else {
    navbar.classList.remove('scrolled'); 
  }
});
