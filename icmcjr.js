var slideIndex = 0;
mostraSlide(slideIndex);
ajusta();

// Ante e Prox
function passaSlide(n) {
  mostraSlide(slideIndex += n);
}

function mostraSlide(n) {
  var i;
  var slides = document.getElementsByClassName("albumslice");
  if (n >= slides.length) {slideIndex = 0;}
  if (n < 0) {slideIndex = slides.length-1;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block"; 
}

/*function ajusta(){
  var i;
  var position = window.innerWidth/2 - 206;
  var box = document.getElementsByClassName("albumtext");
  
  for(i=0;i<box.length;i++){
    box[i].style.left= `${position}px`;}
}*/