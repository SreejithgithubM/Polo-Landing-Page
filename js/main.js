// hero swiper slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop:true,
    speed:4000, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 4000,
      },
  });
  // Mobile menu
  let mobileMenuIcon =document.querySelector('header .fa-bars');
  let menu =document.querySelector('header .menu');

  mobileMenuIcon.addEventListener('click',function(){

    menu.classList.toggle("open");

    
  });
 