//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
let navbar = document.getElementById('myNavbar');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 ||document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    document.navbar.style.top = "0";
  } else {
    mybutton.style.display = "none";
    document.navbar.style.top = "-500px";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function reverseOrder(){
  var element = document.getElementById("approach-image-container");
  element.classList.add("order-first");
}

timeline.to(".test-text",5,{x:400});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});