jQuery(document).ready(function ($) {
    //handle scroll event
    $(window).scroll(function () {
        const scrollDistance = $(window).scrollTop();
        if (scrollDistance > 0) {
            $("header").addClass("active");
            $(".header_wrap").addClass("active");
            $(".header_sm").addClass("active");
        } else {
            $("header").removeClass("active");
            $(".header_wrap").removeClass("active");
            $(".header_sm").removeClass("active");
        }
    });

    //nav-mobile
    $(".nav__bg").click(function () {
        $("#nav__checkbox").prop("checked", false);
    });

    $(".nav-content ul").click(function () {
        $("#nav__checkbox").prop("checked", false);
    });

    // slider
    setInterval(function () {
        moveRight();
    }, 2000);

    const slideWidth = $(".discover_slider").width() / 3;
    const countSlideItem = $(".discover_slider li").length;

    for (let index = 0; index < countSlideItem; index++) {
        $(".discover_dot").append($("<li>").addClass("dot"));
    }

    $(".discover_dot li:first-child").addClass("active");

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
                $(".discover_dot li:last-child").prependTo(".discover_dot");
            }
        );
    }

    //handle date
    var d = new Date();
    var strDate =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1) +
        "-" +
        (d.getDate() < 10 ? `0${d.getDate()}` : d.getDate());

    $(".contact_form input#date").val(strDate);

    // $(".contact_form input#date").focus(function (e) {
    //     e.preventDefault();
    //     this.type = "date";
    //     this.value = strDate;
    // });

    // $(".contact_form input#date").blur(function (e) {
    //     e.preventDefault();
    //     if ($(this).val() === "") {
    //         this.type = "text";
    //     }
    // });
});
