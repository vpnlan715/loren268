$(document).ready(function() {
	$('.slider-thumb').slick({
		vertical: true, 
		verticalSwiping: true, 
		dots: true,
		arrows: true,
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-down"></i></button>',   
   		dotsClass: 'dots-style'
	});
})                         