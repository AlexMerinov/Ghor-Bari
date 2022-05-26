const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.nav__list')
const body = document.querySelector('body')

burger.addEventListener("click", (e) => {
   burger.classList.toggle('burger--active');
   mobileMenu.classList.toggle('nav__list--active');
   body.classList.toggle('lock');
});


// Slider-----------------------> Recomended

const recomendedSlider = new Swiper('.slider-recomended', {

   // Navigation arrows
   navigation: {
     nextEl: '.recomended-btn--prev',
     prevEl: '.recomended-btn--next',
   },
 
 });