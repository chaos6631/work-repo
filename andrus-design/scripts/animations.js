angular.module('appAnimations', ['ngAnimate']);

/****************************************
			Element Fade In on Scroll
****************************************/
/***** Reference: http://www.sitepoint.com/scroll-based-animations-jquery-css3/ ******/
// $(function(){
// 	// Cache a reference to window and animation items
// 	var $animationElements = $('.scroll-animate');
// 	var $window = $(window);
// 	function CheckView() {
// 	  var window_height = $window.height();
// 	  var window_top_position = $window.scrollTop();
// 	  var window_bottom_position = (window_top_position + window_height);

// 	  $.each($animationElements, function() {
// 	    var $element = $(this);
// 	    var element_height = $element.outerHeight();
// 	    var element_top_position = $element.offset().top;
// 	    var element_bottom_position = (element_top_position + element_height);

// 	    //check to see if this current container is within viewport
// 	    if ((element_bottom_position >= window_top_position) &&
// 	        (element_top_position <= window_bottom_position)) {
// 	      $element.addClass('in-view');
// 	    } else {
// 	      $element.removeClass('in-view');
// 	    }
// 	  });
// 	}
// 	// Listen for scroll and window resize events
// 	$window.on('scroll resize', CheckView());
// 	// Trigger a scroll event on initial load so that items within view are loaded 
// 	$window.trigger('scroll');
// });

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

