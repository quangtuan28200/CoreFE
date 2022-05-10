jQuery(document).ready(function ($) {
    //handle scroll event
    $(window).scroll(function () {
        const scrollDistance = $(window).scrollTop();
        if (scrollDistance > 0) {
            $("header").addClass("active");
            $(".header_wrap").addClass("active");
        } else {
            $("header").removeClass("active");
            $(".header_wrap").removeClass("active");
        }
    });

    // slider
    // setInterval(function () {
    //     moveRight();
    // }, 2000);

    const slideWidth = $(".discover_slider").width() / 3;
    const countSlideItem = $(".discover_slider li").length;

    for (let index = 0; index < countSlideItem; index++) {
        $(".discover_dot").append($("<li>").addClass("dot"));
    }

    function moveRight() {
        $(".discover_slider").animate(
            {
                left: -slideWidth,
            },
            500,
            function () {
                $(".discover_slider li:first-child").appendTo(
                    ".discover_slider"
                );
                $(".discover_slider").css("left", "");
            }
        );
    }
});
