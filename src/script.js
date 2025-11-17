let viewMore =document.querySelector(".team-more");
let onClick= document.querySelector('.team-inner-container');
let moreTeam= document.querySelector('.close-team');

viewMore.addEventListener('click', function(){

 onClick.classList.remove('d-none')
 viewMore.style.display="none";
 moreTeam.style.display="block";

 moreTeam.addEventListener('click', function(){

  onClick.classList.add('d-none')
  viewMore.style.display="block";
  moreTeam.style.display="none";
 })

})


  document.addEventListener("DOMContentLoaded", function () {
      const slides = document.querySelectorAll('.slide');
      const prev = document.querySelector('.prev');
      const next = document.querySelector('.next');
      let current = 0;

      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
      }

      prev.addEventListener('click', () => {
        current = (current === 0) ? slides.length - 1 : current - 1;
        showSlide(current);
      });

      next.addEventListener('click', () => {
        current = (current === slides.length - 1) ? 0 : current + 1;
        showSlide(current);
      });

      showSlide(current);

      // Auto-slide every 5s
      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, 5000);
    });

//hamburger menu

const menu = document.querySelector('.burger-menu');
 const list= document.querySelector('.header-list');
 const closeButton=document.querySelector('.close-menu')
menu.addEventListener('click' , function openMenu(){
console.log('clicked')
 
  

  list.style.display="block";
  menu.style.display="none"
  closeButton.style.display="block"
} )
closeButton.addEventListener('click', function closeMenu(){

   menu.style.display="block";
   closeButton.style.display="none"
   list.style.display="none";
})
