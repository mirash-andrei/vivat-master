$(document).ready(function(){
    $(".slider_baner").slick({
        infinite: !0,
        dots: !0,
        speed: 500,
        nextArrow: '<div class="angle_right"></div>',
        prevArrow: '<div class="angle_left"></div>',
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: !1
            }
        }]
    }),
        $(".slider_product").slick({
            slidesToShow: 4,
            infinite: !0,
            dots: 0,
            speed: 500,
            nextArrow: '<div class="angle_right"></div>',
            prevArrow: '<div class="angle_left"></div>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                    slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }

                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: !1
                    }

                }
            ]

        }),
        $(".center_slider").slick({
            slidesToShow: 5,
            infinite: !0,
            dots: 0,
            speed: 500,
            nextArrow: '<div class="angle_right"></div>',
            prevArrow: '<div class="angle_left"></div>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }},
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }},
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: !1
                    }

                }]
        });

    var e = $(".fade_script");
    $(window).scroll(function() {

        118 < $(this).scrollTop() && e.hasClass("default") ? e.fadeOut("fast", function() {
            $(this).removeClass("default").addClass("fly").fadeIn("fast")
        }) : $(this).scrollTop() <= 118 && e.hasClass("fly") && e.fadeOut("fast", function() {
            $(this).removeClass("fly").addClass("default").fadeIn("fast")
        })
    });

    var left_menu =  $('.viva-menu-container').height()-39;
    var slider_bar =$('.slider_baner');
    var slider_bar_h1=$('.slider-conteiner h1').height();
    var slider_height=left_menu-slider_bar_h1+5;
    slider_bar.css('height',slider_height);

    $(document).load($(window).bind("resize", checkPosition));


    function checkPosition() {
        console.log('check');
        if (window.matchMedia('(min-width: 1200px)').matches) {
            var left_menu =  $('.viva-menu-container').height()-39;
            var slider_bar =$('.slider_baner');
            var slider_bar_h1=$('.slider-conteiner h1').height();
            var slider_height=left_menu-slider_bar_h1+5;
            slider_bar.css('height',slider_height);

        } else {

        }
    }
    $(".navBurger").click(function() {
        $(this).toggleClass("active"), $(".viva-menu-container").toggleClass("open_menu")
    }),

        $(".menu_item").click(function() {
            $(".viva-menu-container").removeClass("open_menu"), $(".navBurger").removeClass("active")
        })







});