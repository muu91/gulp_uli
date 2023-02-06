
if ($(window).innerWidth() <= 728) {
    $(window).scroll(function () {
        var top2 = $(document).scrollTop();
        if (top2 > 130) {
            $(".header__sticky").slideDown();
        } else if (top2 < 130) {
            $(".header__sticky").slideUp();
        }
    });
}

// if ($(window).innerWidth() > 992) {
//     (function () {
//         function scrollHorizontally(e) {
//             e = window.event || e;
//             var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
//             document.getElementById('gorizont_scroll').scrollLeft -= (delta * 40); // Multiplied by 10
//             e.preventDefault();
//         }
//         if (document.getElementById('gorizont_scroll').addEventListener) {
//             document.getElementById('gorizont_scroll').addEventListener("mousewheel", scrollHorizontally, false);
//             document.getElementById('gorizont_scroll').addEventListener("DOMMouseScroll", scrollHorizontally, false);
//         } else {
//             document.getElementById('gorizont_scroll').attachEvent("onmousewheel", scrollHorizontally);
//         }
//     })();
// }

// ========================================
jQuery(document).ready(function ($) {

    // ========================================
    // HEADER 
    // --------------------
    // BURGER
    // $('.header__burger').click(function (e) {
    //     e.preventDefault();
    //     $('.header__burger').toggleClass('active');
    //     $('.header__m').toggleClass('active');
    //     $('body').toggleClass('lock');

    // });
    // $('.btn_close__mobile').click(function (e) {
    //     e.preventDefault();
    //     $('.header__burger').removeClass('active');
    //     $('.header__m').removeClass('active');
    //     $('body').removeClass('lock');

    // });
    // $(document).mouseup(function (e) {
    //     var notBurger = $(".header__mobile");
    //     if (!notBurger.is(e.target)
    //         &&
    //         notBurger.has(e.target).length === 0) {
    //         $('.header__burger').toggleClass('active');
    //         $('.header__mobile').toggleClass('active');
    //         $('html, body').toggleClass('lock');
    //     }
    // });
    // END BURGER
    // --------------------
    // REMOVE CLASS ВНЕ БЛОКА
    // $(document).mouseup(function(e) {
    //     var div = $(".header__mobile");
    //     var burger = $('.h_burger2');
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         &&
    //         div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         $('.h_burger').removeClass('active');
    //         $('.header__mobile').removeClass('active');
    //         $('html, body').removeClass('lock');
    //         // скрываем его
    //     }
    // });
    //END REMOVE CLASS ВНЕ БЛОКА
    // --------------------
    // STICKY
    // $(window).scroll(function () {
    //     var topHeight = $(this).scrollTop();
    //     if (topHeight > 300) {
    //         $('.header__sticky').slideDown(200);
    //     } else if (topHeight <= 300) {
    //         $('.header__sticky').slideUp(200);
    //     }
    // });
    // END STICKY
    // --------------------
    // END HEADER
    // ========================================
    // MAIN
    // ========================================
    // --------------------
    // TEHNOLOGIES

    var windowWidthTariff = $(window).width();

    if (windowWidthTariff > 728) {
        $(".bl_tehnologies__menu > ul > li > a").click(function (e) {
            e.preventDefault();
            $('.bl_tehnologies__menu > ul > li > a').removeClass('active');
            $(this).addClass('active');
        });

        var tabNavBtn = $("[data-filter_tab]");
        tabNavBtn.on("click", function (e) {
            e.preventDefault();
            var tabNavBtnClick = $(this).data('filter_tab');
            $("[data-tab_content]").each(function () {
                var tabContent = $(this).data('tab_content');
                if (tabContent != tabNavBtnClick) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        });
        $(".bl_tehnologies__menu > ul > li:first > a").click();
    }
    // Для мобилки
    if (windowWidthTariff <= 728) {
        $("#tehnologies").change(function () {
            if ($(this).val() == 'barnhouse') {
                $(".bl_tehnologies__item").hide();
                $("[data-tab_content=barnhouse]").show();
            } else if ($(this).val() == 'fahverk') {
                $(".bl_tehnologies__item").hide();
                $("[data-tab_content=fahverk]").show();
            } else if ($(this).val() == 'karkas') {
                $(".bl_tehnologies__item").hide();
                $("[data-tab_content=karkas]").show();
            } else if ($(this).val() == 'penobeton') {
                $(".bl_tehnologies__item").hide();
                $("[data-tab_content=penobeton]").show();
            }

        });
    }
    // --------------------
    // PROJECTS AND PROJECT FINISHED
    $(".bl_projects__content > ul > li > a").click(function (e) {
        e.preventDefault();
        $(this).next(".project_card").addClass("active");
        $('body').addClass('lock');
    });

    $(".proj_comp__content > ul > li > .btn_yell").click(function (e) {
        e.preventDefault();
        $(this).next(".project_card").addClass("active");
        $('body').addClass('lock');
    });

    $(".project_card").click(function (e) {
        e.preventDefault();
        $('.project_card').removeClass('active'); // скрываем его
        $('body').removeClass('lock');
    });

    $('.card').click(function (e) {
        e.stopPropagation();
    });


    // --------------------
    // Показать еще 
    $(".btn_more").click(function (e) {
        e.preventDefault();
        $('.bl_projects__content > ul > .none:lt(6)').removeClass('none');

        $('.bl_projects__content > ul > .none').each(function () {
        })
        if ($('.none').length == 0) {
            $('.btn_more').hide();
        }
    });
    // --------------------
    // STAGES
    if (windowWidthTariff > 728) {

        $(".stages > ul > li > .stages__item").click(function (e) {
            e.preventDefault();
            $(".stages > ul > li > .stages__item").removeClass("active");
            $(this).addClass("active");
            var textStages = $(this).next().find('p').text();
            var textStagesCenter = $('.stages_center_text > p');
            textStagesCenter.html(textStages);
        });
        $(".stages > ul > li").first().find('.stages__item').click();

    }
    if (windowWidthTariff <= 728) {
        $(".stages > ul > li > .stages__item").click(function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next().slideUp();
            } else {
                $(".stages > ul > li > .stages__item").removeClass("active");
                $(this).addClass("active");

                $(".stages > ul > li > .stages__item__text").slideUp();
                $(this).next().slideDown();
            }
        });
        $(".stages > ul > li").first().find('.stages__item').click();
    }
    // --------------------
    // MAP
    if (windowWidthTariff <= 728) {
        $(".btn_arrow").click(function (e) {
            e.preventDefault();
            $(this).next().slideToggle();
            $(this).toggleClass('active');
            $('.bl_map__btn').slideToggle();
        });
    }
    // END MAP
    // --------------------
    // ========================================
    // END MAIN
    // ========================================
    // SLICK SLIDER
    // --------------------
    // PROJECTS
    $('.card__slide > ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        dots: true,

    });


    // // --------------------
    // // PROJECTS COMPLETED
    // $('.proj_comp__content > ul').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // fade: false,
    //     cssEase: 'linear',
    //     arrows: true,
    //     dots: false,
    //     variableWidth: true,

    // });

    // --------------------




    // --------------------

    // ========================================
    // POPUPS
    // --------------------
    var popupHomeKey = $(".btn_home_key");
    var popupCredit = $(".btn_credit");
    var popupLand = $(".btn_land");
    var popupIpoteka = $(".btn_ipoteka");
    var popupPayment = $(".btn_payment");
    var popupFeedback = $(".btn_feedback");
    var popupConsult = $(".btn_consult");
    var popupSuccess = $(".btn_success");


    popupHomeKey.click(function (e) {
        e.preventDefault();
        $("#home_key").css('display', 'flex');

        $('body').addClass('lock');
    });
    popupCredit.click(function (e) {
        e.preventDefault();
        $("#credit").css('display', 'flex');
        $('body').addClass('lock');
    });
    popupLand.click(function (e) {
        e.preventDefault();
        $("#land").css('display', 'flex');
        $('body').addClass('lock');
    });
    popupIpoteka.click(function (e) {
        e.preventDefault();
        $("#ipoteka").css('display', 'flex');
        $('body').addClass('lock');
    });
    popupPayment.click(function (e) {
        e.preventDefault();
        $("#payment").css('display', 'flex');
        $('body').addClass('lock');
    });
    popupFeedback.click(function (e) {
        e.preventDefault();
        $("#feedback").css('display', 'flex');
        $('body').addClass('lock');
    });
    popupConsult.click(function (e) {
        e.preventDefault();
        $("#consult").css('display', 'flex');
        $('body').addClass('lock');
    });
    popupSuccess.click(function (e) {
        e.preventDefault();
        $("#success").css('display', 'flex');
        $('body').addClass('lock');
    });

    $(".main_popup").click(function (e) {
        e.preventDefault();
        $('.main_popup').css('display', 'none'); // скрываем его
        $('body').removeClass('lock');
    });

    $('.bl_popup').click(function (e) {
        e.stopPropagation();
    });


    // --------------------
    // END POPUPS
    // ========================================



});