// const userButton = document.querySelector('.user-button');
// const professionalButton = document.querySelector('.professional-button');

// userButton.addEventListener('click', () => {
//     window.location.href = 'cadastro-usuario.html';
// });

// professionalButton.addEventListener('click', () => {
//     window.location.href = 'cadastro-profissional.html';
// });

// var ul = document.querySelector('nav ul');
// var menuBtn = document.querySelector('.menu-btn i');

// function menuShow() {
//     if (ul.classList.contains('open')) {
//         ul.classList.remove('open');
//     }else{
//         ul.classList.add('open');
//     }
// }
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}