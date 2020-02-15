;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

	var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'educare-mobile-nav').hide();
                    var hasChildMenu = $('#educare-mobile-nav').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.educare-btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#educare-mobile-nav').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.educare-btn-menu').on('click', function() {         
            $('#educare-mobile-nav').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#educare-mobile-nav li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };

    var headerFixed = function() {
        if ( $('body').hasClass('sticky') ) {
            var nav = $('#header');

            if ( nav.size() !== 0 ) {
                var offsetTop = $('#header').offset().top,
                    headerHeight = $('#header').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);   
                    injectSpace.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop ) {
                        if ( $('#header').hasClass('header-main') ) {
                            injectSpace.show();
                        }
                        $('#header').addClass('downscrolled');                        
                    } else {
                        $('#header').removeClass('header-small downscrolled');
                        injectSpace.hide();
                    }                    
                })
            }
        }
    };

    var TopSearch = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.educare-search').removeClass('show');                
            } 
        });

        $('.show-search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.show-search').on('click', function (event) {
            if(!$('.educare-search').hasClass( "show" )) {
                $('.educare-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.educare-search').removeClass('show');
                event.preventDefault();

            if( !$('.show-search' ).hasClass( "active" ) )
                $( '.show-search' ).addClass( 'active' );
            else
                $( '.show-search' ).removeClass( 'active' );
        });   
    };

   	// Dom Ready
	$(function() {   
        responsiveMenu();
        TopSearch();      
   	});
	
	
	

/*=========================================================================
	Main Slider
=========================================================================*/
	$('#main-slider').owlCarousel({
        loop:true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
		 dots: false,
        nav:true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });

    $("#main-slider").on("translate.owl.carousel", function(){
        $(".main_slide .slider_content").removeClass("animated fadeInLeft").css("opacity", "0");
    });
    
    $("#main-slider").on("translated.owl.carousel", function(){
        $(".main_slide .slider_content").addClass("animated fadeInLeft").css("opacity", "1");
    });	
	
	
	
	    // ------- PARALLAX  -------
    $(".parallaxie").parallaxie({
        speed: 0.6,
        offset: 0,
    });
	
	

	
	
	  //--------------------team page carousel---------------------
    $("#our-partner-slider").owlCarousel({
        items: 6,
        loop: true,
        dots: false,
        nav: true,
		navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        margin: 0,
        stagePadding: 10,
        autoplay: false,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 2,
            },
            768: {
                items: 3
            },
            992: {
                items: 6
            }
        }
    });
	
	

   //--------------------team page carousel---------------------
	
    $("#banner-style6 .team_carousel1").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        margin: 30,
        stagePadding: 25,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });




  //--------------------team page carousel---------------------
    $("#blog-slider .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: false,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 4
            }
        }
    });	

  //--------------------team page carousel---------------------
    $("#educare-2-slider, #nav_slider").owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        nav: false,
        margin: 5,
        stagePadding: 5,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
				stagePadding: 0,
            },
            480: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 4
            }
        }
    });	




   //--------------------team page carousel---------------------
    $("#blog .owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: false,
        margin: 30,
        stagePadding: 25,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            480: {
                items: 1,
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });	




	
    /* Fun Fact
    ============================================== */
    $(".number-counters").appear(function() {
        $(".number-counters [data-to]").each(function() {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 1,
                to: e,
                speed: 3000,
                refreshInterval: 50
            })
        })
    });
	
	
	    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
	
	
	
/* 17. ELEVATEZOOM JS  */
		$("#zoom1").elevateZoom({
			gallery: 'gallery_01',
			responsive: true,
			cursor: 'pointer',
			galleryActiveClass: "active",
			imageCrossfade: true
		});	
	
		
		/* 18. BXSLIDER JS  */
		$('.bxslider').bxSlider({
			slideWidth: 83,
			slideMargin: 10,
			minSlides: 3,
			maxSlides: 4,
			pager: false,
			speed: 500,
			pause: 3000,
			adaptiveHeight: false
		});	
	
    $('.list-group-item').on('click',function(e){
     	  var previous = $(this).closest(".list-group").children(".active");
     	  previous.removeClass('active'); // previous list-item
     	  $(e.target).addClass('active'); // activated list-item
   	});	
	

			function initialize() {
			  var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(48.849251, 2.275298)
			  };

			  var map = new google.maps.Map(document.getElementById('googleMap'),
				  mapOptions);


			  var marker = new google.maps.Marker({
				position: map.getCenter(),
				animation:google.maps.Animation.BOUNCE,
				icon: 'img/map-marker.png',
				map: map
			  });
                
			}
                
			google.maps.event.addDomListener(window, 'load', initialize);	
	
	
})(jQuery);