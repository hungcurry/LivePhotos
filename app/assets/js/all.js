$(document).ready(function () {
    $(".js-anc01").on("click", function () {
        var offsetTop = $('#js-page01').offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    });
    $(".js-anc02").on("click", function () {
        var offsetTop = $('#js-page02').offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    });
    $(".js-anc03").on("click", function () {
        var offsetTop = $('#js-page03').offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    });
    $(".js-anc04").on("click", function () {
        var offsetTop = $('#js-page04').offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    });
    $(".js-anc05").on("click", function () {
        var offsetTop = $('#js-page05').offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    });
    $(".js-anc06").on("click", function () {
        var offsetTop = $('#js-page06').offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
    });
    $(window).scroll(function () {
        var HH = $(window).scrollTop();
        if (HH > 900) {
            $(".topBack").stop().animate({
                "opacity": "1"
            }, 500);
            $(".topBack").on("click", clickFn)
        } else {
            $(".topBack").stop().animate({
                "opacity": "0"
            }, 500);
        }
    });

    function clickFn() {
        $(".topBack").off("click", clickFn);
        $("html,body").stop().animate({
            scrollTop: 0
        }, 500);
    };

});
