document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-btn.next');
  const prevButton = document.querySelector('.carousel-btn.prev');

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = 'translateX(-' + currentIndex * 100 + '%)';
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero1');
    const logoImg = document.querySelector('.logo-img');
  
    if (window.scrollY > hero.offsetHeight) {
      navbar.classList.add('scrolled');
      logoImg.src = "logo-blanc.png"; // logo après scroll
    } else {
      navbar.classList.remove('scrolled');
      logoImg.src = "logo-rouge.png"; // logo dans le Hero
    }
  });
