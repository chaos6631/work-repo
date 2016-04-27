angular.module('appAnimations', ['ngAnimate']);


/****************************************
			Toggle Nav
****************************************/
/* Open when someone clicks on the Nav button */
function openNav() {
  document.getElementById("fullNav").style.width = "100%";
}

/* Close when someone clicks anywhere inside the overlay that isn't a link */
function closeNav() {
  document.getElementById("fullNav").style.width = "0%";
}

// Auto collapse navbar on link click
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
      $(this).collapse('hide');
  }
});

/****************************************
			Cycle Images
****************************************/
$('.carousel').carousel({
	interval: 10000,	
});