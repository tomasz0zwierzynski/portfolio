var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" actived", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " actived";
}

var slideIndex0 = 1;
showSlides0(slideIndex0);

// Next/previous controls
function plusSlides0(n) {
  showSlides0(slideIndex0 += n);
}

// Thumbnail image controls
function currentSlide0(n) {
  showSlides0(slideIndex0 = n);
}

function showSlides0(n) {
  var i0;
  var slides0 = document.getElementsByClassName("my-slides-0");
  var dots0 = document.getElementsByClassName("dot-0");
  if (n > slides0.length) {slideIndex0 = 1}
  if (n < 1) {slideIndex0 = slides0.length}
  for (i0 = 0; i0 < slides0.length; i0++) {
      slides0[i0].style.display = "none";
  }
  for (i0 = 0; i0 < dots0.length; i0++) {
      dots0[i0].className = dots0[i0].className.replace(" actived", "");
  }
  slides0[slideIndex0-1].style.display = "block";
  dots0[slideIndex0-1].className += " actived";
}