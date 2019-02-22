


(function ($) {
    "use strict";

    // Rullaus sektioneihin
    $('.page-scroll a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 40)
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });

    // navigoinnin highlaittaaminen
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

})(jQuery);

