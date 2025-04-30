// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    center:true,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

// Bottom to top button
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 2000) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// lightbox
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'disableScrolling': true,
  'fitImagesInViewport': true,
  'positionFromTop': 100,
  'resizeDuration': 500,
});

// Onscroll
window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("mobileMenu");
var sticky = header.offsetTop;
console.log(sticky);
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Toggle
function toggle(){
  var mobileMenu = document.getElementById("mobileMenu")
  mobileMenu.classList.toggle('active')
}

// Loader page
var x;
function loaderFunction() {
  x = setTimeout(showPage, 1500);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
}


const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});





