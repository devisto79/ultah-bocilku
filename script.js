const playButton = document.getElementById('play-btn');
const music = document.getElementById('bg-music');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

// Play or pause music
playButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playButton.textContent = '💙 Pause Music 💙';
  } else {
    music.pause();
    playButton.textContent = '💙 Play Your Song 💙';
  }
});

// Show slide function
const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'prev');
    if (i === index) slide.classList.add('active');
    if (i === currentSlide) slide.classList.add('prev');
  });
};

// Next and Previous Buttons
document.querySelectorAll('.next-btn').forEach((button) => {
  button.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  });
});

document.querySelectorAll('.prev-btn').forEach((button) => {
  button.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide =
      currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    slides[currentSlide].classList.add('active');
  });
});

// Home Button
document.querySelector('.home-btn').addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide = 0;
  slides[currentSlide].classList.add('active');
});

// Initialize slideshow
showSlide(currentSlide);
