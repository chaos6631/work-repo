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
			adjust image height based on window size for small desktop windows
****************************************/

$(window).resize(function(){

	var imgHeight = 100;
	var $winHeight = $(window).height();
	var $img = $('.item-image-container > img');

	if ($winHeight < 542){
		imgHeight = imgHeight + ((($winHeight / 542) * -100) +105);
		imgHeight = imgHeight + "vh";
		$img.css("max-height", imgHeight);
	}else{
		$img.css("max-height", "100vh");
	}

});
