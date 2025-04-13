
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.querySelector(".form-message").textContent = "Message envoyé avec succès !";
  this.reset();
});

// Détecter lorsque la navbar dépasse la section "hero" et appliquer la classe "scrolled"
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  
  if (window.scrollY > hero.offsetHeight) {
    navbar.classList.add('scrolled'); // Ajoute la classe "scrolled" quand on dépasse le hero
  } else {
    navbar.classList.remove('scrolled'); // Retire la classe "scrolled" quand on est encore en haut
  }
});
