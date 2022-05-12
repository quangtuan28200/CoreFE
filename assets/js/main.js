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

    const countSlideItem = $(".discover_slider li").length;

    $(".discover_slider li:last-child").prependTo(".discover_slider");

    for (let index = 0; index < countSlideItem; index++) {
        $(".discover_dot").append($("<li>").addClass("dot"));
    }

    $(".discover_dot li:first-child").addClass("active");

    function moveRight() {
        $(".discover_slider").animate(
            {
                left: "-100%",
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

    // var slides = document.querySelectorAll(".slide");
    // var dots = document.querySelectorAll(".dot");
    // var index = 0;

    // function prevSlide(n) {
    //     index += n;
    //     console.log("prevSlide is called");
    //     changeSlide();
    // }

    // function nextSlide(n) {
    //     index += n;
    //     changeSlide();
    // }

    // changeSlide();

    // function changeSlide() {
    //     if (index > slides.length - 1) index = 0;

    //     if (index < 0) index = slides.length - 1;

    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";

    //         dots[i].classList.remove("active");
    //     }

    //     slides[index].style.display = "block";
    //     dots[index].classList.add("active");
    // }

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
