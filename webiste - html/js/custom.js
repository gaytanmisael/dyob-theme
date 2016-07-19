var $j = jQuery;

$j(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
			// Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.slick-dots',

    // Navigation arrows
    nextButton: '.slick-next',
    prevButton: '.slick-prev',
    })
  });
