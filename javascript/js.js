	$(function() {
$(".startTyper").typed({
strings: [" JavaScript Developer "," BS Computer Science "],
typeSpeed: 50,
backDelay: 100, 
loop: true,

});
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$('.collapseable-nav .menu a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });




$('.menu-btn').click(function(){
        $('.collapseable-nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
