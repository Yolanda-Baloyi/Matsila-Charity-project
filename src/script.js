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
    
const fullText = document.getElementById('aboutText').innerText;
const readMoreBtn = document.getElementById('readMoreBtn');

// Function to compress text to 60 words
function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
}

// Initially show 60 words
document.getElementById('aboutText').innerText = truncateText(fullText, 60);

readMoreBtn.addEventListener('click', () => {
  document.getElementById('aboutText').innerText = fullText;
  readMoreBtn.classList.add('hidden');
});

// Reset text when scrolling past container
window.addEventListener('scroll', () => {
  const container = document.querySelector('.about-container');
  const rect = container.getBoundingClientRect();
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    document.getElementById('aboutText').innerText = truncateText(fullText, 60);
    readMoreBtn.classList.remove('hidden');
  }
}
)



