
document.addEventListener('DOMContentLoaded', () => {

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


 //-----------Accordion-footer----------------------------------->
 if (document.body.clientWidth < 768) {
   const contactsItems = Array.from(document.querySelectorAll('.contacts__item'));

   contactsItems.forEach((contactsItem) => {
      contactsItem.addEventListener('click', contactOpen);
   });

   function contactOpen(e) {
      e.preventDefault();
      let currentContact = e.target.closest('.contacts__item');
      let currentLink = e.target.nextElementSibling;
      currentContact.classList.toggle('contacts__item--active');
      if (currentContact.classList.contains('contacts__item--active')) {
         currentLink.style.maxHeight = currentLink.scrollHeight + "px";
      } else {
         currentLink.style.maxHeight = 0;
      }
   }
}

});