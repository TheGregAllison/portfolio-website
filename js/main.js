window.addEventListener('scroll', function () {
  let navBar = document.getElementById('navbar');
  if (window.scrollY > 1) {
    navBar.classList.add('scrolled');
  } else {
    navBar.classList.remove('scrolled');
  }
});

window.onload = function () {
  const carouselContainer = document.querySelector('.tech-carousel-icons');
  const clone = carouselContainer.innerHTML;
  carouselContainer.innerHTML += clone;
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
