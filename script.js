
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.querySelector(".form-message").textContent = "Message envoyé avec succès !";
    this.reset();
  });
  
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const logoImg = document.querySelector('.logo-img');
  
    if (window.scrollY > hero.offsetHeight) {
      navbar.classList.add('scrolled');
      logoImg.src = "logo-blanc.png"; // logo après scroll
    } else {
      navbar.classList.remove('scrolled');
      logoImg.src = "logo-rouge.png"; // logo dans le Hero
    }
  });
