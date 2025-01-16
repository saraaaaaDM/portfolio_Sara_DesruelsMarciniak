const carouselItems = document.querySelector('.carousel-items');
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');


const itemWidth = 655; 
const visibleItems = 4;
let scrollAmount = itemWidth * visibleItems; 


const totalItems = carouselItems.children.length;
const cloneFirstItems = Array.from(carouselItems.children).slice(0, visibleItems).map(item => item.cloneNode(true));
const cloneLastItems = Array.from(carouselItems.children).slice(-visibleItems).map(item => item.cloneNode(true));


cloneLastItems.forEach(item => carouselItems.prepend(item));
cloneFirstItems.forEach(item => carouselItems.appendChild(item));


carouselItems.style.transform = `translateX(-${scrollAmount}px)`;


nextButton.addEventListener('click', () => {
  scrollAmount += itemWidth;
  carouselItems.style.transition = "transform 0.5s ease-in-out";
  carouselItems.style.transform = `translateX(-${scrollAmount}px)`;


  if (scrollAmount >= itemWidth * (totalItems + visibleItems)) {
    setTimeout(() => {
      carouselItems.style.transition = "none";
      scrollAmount = itemWidth * visibleItems; 
      carouselItems.style.transform = `translateX(-${scrollAmount}px)`;
    }, 500);
  }
});

prevButton.addEventListener('click', () => {
  scrollAmount -= itemWidth;
  carouselItems.style.transition = "transform 0.5s ease-in-out";
  carouselItems.style.transform = `translateX(-${scrollAmount}px)`;


  if (scrollAmount < itemWidth) {
    setTimeout(() => {
      carouselItems.style.transition = "none";
      scrollAmount = itemWidth * totalItems; 
      carouselItems.style.transform = `translateX(-${scrollAmount}px)`;
    }, 500);
  }
});
