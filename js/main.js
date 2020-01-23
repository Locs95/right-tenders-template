$(document).ready(function() {

     
     /*QUOTES CAROUSEL*/
    $('.quotes__carousel').owlCarousel({
    	 items: 4,
	  	 loop: true,
	     autoplay: false,
	     nav: false,
	     dots: false,
	     slideBy: 1,
	     margin: 10,
	     responsive: {
	     	 1200: {
	     	 	items: 3
	     	 },
	     	 992: {
	     	 	items: 3
	     	 },
	     	 768: {
	     	 	items: 2
	     	 },
	     	 576: {
	     	 	items: 1
	     	 },
	     	 0: {
	     	 	items: 1
	     	 }
	     }
    }); 
     /*QUOTES CAROUSEL*/ 

     /*SCROLL TO / LOOK MORE*/
     $('a[data-link]').on('click', function() {
     	  var id = $(this).attr('data-target');
     	  $(window).scrollTo(id, 'slow', {
     	  	 offset: -20
     	  });
     })
     /*SCROLL TO / LOOK MORE*/ 

});