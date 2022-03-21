/* JAVASCRIPT */

$(document).ready(function() {
    //wow
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 300,
            duration: 300
        }
    );
    wow.init();



    /**************************************** MOBILE MENU */
        $("#menuOpen").click(function() {
            $("body").addClass("show-menu");
        });
        $("#menuClose").click(function() {
            $("body").removeClass("show-menu");
        });
    /**************************************** /MOBILE MENU */





    


    /***************************************** HEADER STICKY */
        if ($('#header').length) {
            var stickyNavPos = $('#header').offset().top + 150;
            //stickyNavTop = stickyNavPos + $('.header_top_ban').outerHeight() + 10;
            stickyNavTop = stickyNavPos;
            var stickyNav = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > stickyNavTop) {
                    $('html').addClass('sticky');

                } else {
                    $('html').removeClass('sticky');
                }

            };
            stickyNav();

            $(window).scroll(function () {
                stickyNav();
            });
        }
    /***************************************** /HEADER STICKY */







    /********************************** HOME PAGE BANNER SLIDER */
        var homeBannerOwl = $(".home-banner");
        homeBannerOwl.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
			navText: ["<i class='fas fa-chevron-up'>", "<i class='fas fa-chevron-down'>"],
            items: 1,
            autoplay: true,
			autoplayTimeout: 3000,
			animateIn: 'animated fadeIn',
			animateOut: 'animated zoomOut'
        });
        homeBannerOwl.on('changed.owl.carousel', function(event) {
			var item = event.item.index - 2;     // Position of the current item
			
			$('.home-banner .left').removeClass('animated animated fadeInLeft');
			$('.owl-item').not('.cloned').eq(item).find('.left').addClass('animated animated fadeInLeft');

			$('.home-banner .image-wrapper').removeClass('animated animated fadeInRight');
			$('.owl-item').not('.cloned').eq(item).find('.image-wrapper').addClass('animated animated fadeInRight');
		});
    /********************************** /HOME PAGE BANNER SLIDER */





    /********************************** BLOG SLIDER */
        var blogSliderOwl = $(".home .blog-slider");
        blogSliderOwl.owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
			navText: ["",""],
            items: 3,
            autoplay: true,
			autoplayTimeout: 2000,
            responsive : {
                // breakpoint from 0 up
                0: {            
                    items: 1,
                },
                // breakpoint from 480 up
                767: {
                    items: 2
                },
                // breakpoint from 768 up
                1200: {
                    items: 3
                }
            }
        });
        $(".blog-slider-wrapper .blog-nav .next").click(function() {
            blogSliderOwl.trigger('next.owl.carousel');
        })
        $(".blog-slider-wrapper .blog-nav .prev").click(function() {
            blogSliderOwl.trigger('prev.owl.carousel', [300]);
        });        
    /********************************** /BLOG SLIDER */





    /********************************** PRODUCT SLIDER */
        var productSliderOwl = $(".home .product-slider");
        productSliderOwl.owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
			navText: ["",""],
            items: 4,
            autoplay: true,
			autoplayTimeout: 2000,
            responsive : {
                // breakpoint from 0 up
                0: {            
                    items: 1,
                },
                // breakpoint from 480 up
                767: {
                    items: 2
                },
                // breakpoint from 768 up
                1200: {
                    items: 4
                }
            }
        });
        $(".product-slider-wrapper .product-nav .next").click(function() {
            productSliderOwl.trigger('next.owl.carousel');
        })
        $(".product-slider-wrapper .product-nav .prev").click(function() {
            productSliderOwl.trigger('prev.owl.carousel', [300]);
        });    
    /********************************** /PRODUCT SLIDER */

});

/***************************************** LOADING SCREEN */
$(window).on("load", function() {
    $(".ajax_loader").addClass('hideloader');
    //$('.allcontent').removeClass('hidecon');
});
/***************************************** /LOADING SCREEN */