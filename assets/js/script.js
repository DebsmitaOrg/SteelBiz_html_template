/* JAVASCRIPT */

$(document).ready(function() {
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
            autoplay: false,
			autoplayTimeout: 5000,
			animateIn: 'animate__animated animate__fadeIn',
			animateOut: 'animate__animated animate__zoomOut'
        });
        homeBannerOwl.on('changed.owl.carousel', function(event) {
			var item = event.item.index - 2;     // Position of the current item
			
			$('.home-banner .left').removeClass('animated animate__animated animate__fadeInLeft');
			$('.owl-item').not('.cloned').eq(item).find('.left').addClass('animated animate__animated animate__fadeInLeft');

			$('.home-banner .image-wrapper').removeClass('animated animate__animated animate__fadeInRight');
			$('.owl-item').not('.cloned').eq(item).find('.image-wrapper').addClass('animated animate__animated animate__fadeInRight');
		});
    /********************************** /HOME PAGE BANNER SLIDER */

});

/***************************************** LOADING SCREEN */
$(window).on("load", function() {
    $(".ajax_loader").addClass('hideloader');
    //$('.allcontent').removeClass('hidecon');
});
/***************************************** /LOADING SCREEN */