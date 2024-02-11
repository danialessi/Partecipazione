// TYPEWRITING FUNCTION
let i = 0;
let j = 0;
let title = 'SAI CHI SI SPOSA?';
let hello = document.getElementById("hello");
let stocaText = 'Sto cazzo';
let stoca = document.getElementById("stoca");
let speed = 60;
let stocaSpeed = 250;

function typeTitle() {
  setTimeout(function typeWriter() {
    if (i < title.length) {
      hello.innerHTML += title.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }, 400);
};

function typeStoca() {
  setTimeout(function typeWriterStoca() {
    if (j < stocaText.length) {
      stoca.innerHTML += stocaText.charAt(j);
      j++;
      setTimeout(typeWriterStoca, stocaSpeed);
    }
  }, 2000);
};

typeTitle();
typeStoca();
// end TYPEWRITING FUNCTION

//nascondo titolo
setTimeout(function () {
  document.getElementById("title_container").classList.add("hide");
}, 3200);

//rivelo immagine
setTimeout(function() {
  document.getElementById("fedi-dani-mask").classList.add("show");
}, 4000);

//rivelo sfondo
setTimeout(function() {
  document.getElementById("hero").classList.add("show_hero");
  document.getElementById("burger").classList.add("show");
}, 5000);

//rivelo cta
setTimeout(function() {
  document.getElementById("cta").classList.add("show");
}, 6000);



$( document ).ready(function() {
  $('.burger-menu').click(function() {
      $('.burger-menu-list-container').toggleClass("burger-menu-open");
  })

  $('.burger-menu-list a').click(function() {
      $('.burger-menu-list-container').removeClass("burger-menu-open");
  })

  window.onscroll = function() {
      revealTitle();
  }

  function revealTitle() {
      if (window.scrollY > 250) {
        $('.fedi-dani').addClass('show-title');
      } else {
          $('.fedi-dani').removeClass('show-title');
      }
  }
})


/* COUNTDOWN */
// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2024 11:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "gg " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);