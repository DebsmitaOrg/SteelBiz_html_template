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

});

/***************************************** LOADING SCREEN */
$(window).on("load", function() {
    $(".ajax_loader").addClass('hideloader');
    //$('.allcontent').removeClass('hidecon');
});
/***************************************** /LOADING SCREEN */