const audio = document.querySelector('audio');
const body = document.body;

audio.addEventListener('play', () => {
  body.classList.add('play-music');
});

audio.addEventListener('pause', () => {
  body.classList.remove('play-music');
});


  window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('loveAudio');
    audio.play().catch((e) => {
      console.log('Autoplay was prevented:', e);
    });
  });

  
  const slides = document.querySelectorAll('.slideshow');
  let currentSlide = 0;

  setInterval(() => {
    // Hide current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Show the next slide
    slides[currentSlide].classList.add('active');
  }, 3000); // 3000ms = 3 seconds per image


