/* ############################
 			Fancy Box
 #############################*/ 
Fancybox.bind("[data-fancybox]", {});


/* ############################
 			Mobile Mneu
 #############################*/ 
$(document).ready(function(){
	$('#menu-trigger').on('click',function(){
		$('.mobile-menu-bar').toggleClass('add-class');
	});

	$( '.mobile-menu-bar' ).click(function(){
		$(this).removeClass("add-class").addClass('bg');
	});

	$( '.close-menu-bar' ).click(function(){
		$(this).addClass('add-class');
	});
});

/* ############################
 	AOS SCROLL ANIMATION
 #############################*/ 	



	 // AOS.init();






/* ############################
 		Skill  Counter
 ############################# */

jQuery(document).ready(function($) {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 50);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }



//Footer year
	let yearElement = document.querySelector('.all-rights-reserved p span');
	let year = new Date().getFullYear();

	yearElement.innerText = year;

	
});


