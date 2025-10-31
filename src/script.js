let viewMore =document.querySelector(".team-more");

viewMore.addEventListener('click', function(){

 let onClick= document.querySelector('.team-inner-container');

 onClick.classList.toggle('d-none');

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


