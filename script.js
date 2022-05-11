/*Slideshow*/

let slideIndex = 1;

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

window.onload = function() {
  showSlides(slideIndex);
}


/*'Upp' knappen*/
document.addEventListener("scroll", (e) => {
  let scroll = window.scrollY;
  let btn = document.getElementsByClassName("go-top")[0];
  if (scroll > 0) {
      btn.style = "opacity: 1;";
  } else {
      btn.style = "opacity: 0;";
  }
});

function smoothScrollTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}
