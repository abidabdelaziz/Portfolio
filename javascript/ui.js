$(document).ready(function() {
	$('#pagepiling').pagepiling({
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
        menu: '#myMenu'
    });

	$('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });

});

