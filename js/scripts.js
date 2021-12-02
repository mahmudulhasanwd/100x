(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


	// code for owl carusol
	$('.products-slider').owlCarousel({
           	loop: true,
           	margin: 0,
           	center: false,
           	nav: false,
           	dots: false,
           	autoplay:true,
           	autoplayTimeout:5000,
           	responsiveClass: true,
           	responsiveRefreshRate: true,
           	responsive : {
           		0 : {
           			items: 1
           		},
           		768 : {
           			items: 1
           		},
           		960 : {
           			items: 1
           		},
           		1200 : {
           			items: 1
           		},
           		1920 : {
           			items: 1
           		}
           	}
           });

           var owl = $('.products-slider');
           owl.owlCarousel();
           $('#cright').click(function() {
           owl.trigger('next.owl.carousel');
           });
           $('#cleft').click(function() {
           owl.trigger('prev.owl.carousel', [300]);
           });


			  $('.products-slider-two').owlCarousel({
           	loop: true,
           	margin: 0,
           	center: false,
           	nav: false,
           	dots: false,
           	autoplay:true,
           	autoplayTimeout:5000,
           	responsiveClass: true,
           	responsiveRefreshRate: true,
           	responsive : {
           		0 : {
           			items: 1
           		},
           		768 : {
           			items: 1
           		},
           		960 : {
           			items: 1
           		},
           		1200 : {
           			items: 1
           		},
           		1920 : {
           			items: 1
           		}
           	}
           });

           var two = $('.products-slider-two');
           two.owlCarousel();
           $('#cxright').click(function() {
           two.trigger('next.owl.carousel');
           });
           $('#cxleft').click(function() {
           two.trigger('prev.owl.carousel', [300]);
           });

			//   code for responsive menu
			$(".bar").click(function (){
				$('.header-right').slideToggle();
			});

			// code for another menu
			
				
		
		
		
		
		
		
		
		
	});
})(jQuery);
