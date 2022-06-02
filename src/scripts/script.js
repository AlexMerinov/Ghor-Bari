
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




  // Open Popup
  const body = document.querySelector('body');
  const openPopupButtons = document.querySelectorAll('[data-open-popup]');
  if (openPopupButtons) {
      openPopupButtons.forEach((openPopupButton) => {
          openPopupButton.addEventListener('click', (event) => {

              event.preventDefault();
              const popupName = event.target.dataset.openPopup;
              const popups = document.querySelectorAll('.popup');
              if (popups) {
                  popups.forEach((popup) => {
                      if (popup.dataset.popupName == popupName) {
                          popup.classList.add('popup--active');
                          body.classList.add('lock');
                      } else {
                          body.classList.remove('lock');
                      }
                  });
              }
          });
      });
 
  }

  // Close All Popups Function

   const closeAllPopups = () => {
      const popups = document.querySelectorAll('.popup');
      if (popups) {
         popups.forEach((popup) => {
            popup.classList.remove('popup--active');
            body.classList.remove('lock');
         });
      }
   };


  const closePopupButtons = document.querySelectorAll('[data-close-popup]');
   if (closePopupButtons) {
      closePopupButtons.forEach((closePopupButton) => {
         closePopupButton.addEventListener('click', (event) => {
               event.preventDefault();
               closeAllPopups();
         });
      });
   }

// Close Popup After Outside Click



const popups = document.querySelectorAll('.popup');
if (popups) {
    popups.forEach((popup) => {
        popup.addEventListener('mousedown', (event) => {
            if (!event.target.closest('.popup__window')) {
               event.preventDefault();
               closeAllPopups();
            }
        });
    });
}

// Close Popups After "Escape" Key Press

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
         event.preventDefault();
         closeAllPopups();
    }
});
