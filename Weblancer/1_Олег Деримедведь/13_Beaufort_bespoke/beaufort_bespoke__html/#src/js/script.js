
// ========================================
// $(document).ready(function () {
jQuery(document).ready(function ($) {


    // ========================================
    // HEADER 
    // --------------------
    // BURGER
    $('.header__burger').click(function (e) {
        e.preventDefault();
        $('.header__burger').toggleClass('active');
        $('.header__mobile').toggleClass('active');
        $('body').toggleClass('lock');

    });
    $('.btn_close__mobile').click(function (e) {
        e.preventDefault();
        $('.header__burger').removeClass('active');
        $('.header__mobile').removeClass('active');
        $('body').removeClass('lock');

    });
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
    // BLOCK HEADER
    // --------------------
    $('.bl_header__items > ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    // --------------------
    // END BLOCK HEADER
    // --------------------
    // ========================================
    // --------------------
    // REVIEWS
    $('.bl_reviews__slide > ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        cssEase: 'ease',
        arrows: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // END REVIEWS
    // --------------------
    // ========================================
    // --------------------
    // PROCESS SLIDER
    $('.bl_slider__slide > ul').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'ease',
        arrows: true,
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    dots: false
                }
            }
        ]
    });

    // $('.bl_slider__slide ul li').each(function () {
    //     // var activeLi = $('.bl_slider__slide ul .slick-active');
    //     if ($(this).hasClass('slick-active')) {
    //         $(this).addClass('active_li');
    //     }
    // });

    $('.bl_slider__slide ul .slick-next').click(function () {
        $('.bl_slider__slide ul li').each(function () {
            // var activeLi = $('.bl_slider__slide ul .slick-active');
            if ($(this).hasClass('slick-active')) {
                $(this).addClass('active_li');
                $(this).prev().addClass('active_li');
            }
        });
    })
    $('.bl_slider__slide ul .slick-prev').click(function () {
        $('.bl_slider__slide ul li').each(function () {
            // var activeLi = $('.bl_slider__slide ul .slick-active');
            if ($(this).hasClass('slick-active')) {
                // $(this).removeClass('active_li');
                $(this).next().removeClass('active_li');

            }
        });
    })

    $('.bl_slider__slide ul .slick-next').click(function () {
        $('.bl_slider__slide ul li').each(function () {
            if ($('.bl_slider__slide ul li').first().hasClass('slick-active')) {
                $('.bl_slider__slide ul li').removeClass('active_li');
            }
        });
    });
    $('.bl_slider__slide ul .slick-prev').click(function () {
        $('.bl_slider__slide ul li').each(function () {
            if ($('.bl_slider__slide ul li').last().hasClass('slick-active')) {
                $('.bl_slider__slide ul li').addClass('active_li');
            }
        });
    })






    // END PROCESS SLIDER
    // --------------------
    // ========================================

    // PAGE KITCHENS
    // --------------------
    // KITCHEN
    // $('.bl_kitchens__item > a').click(function (e) {
    //     e.preventDefault();
    //     $('.header__burger').toggleClass('active');
    //     $('.header__mobile').toggleClass('active');
    //     $('body').toggleClass('lock');

    // });
    // END KITCHEN
    // --------------------
    // END PAGE KITCHENS
    // --------------------
    // CONTACTS
    var br = $('#wpcf7-f328-o1  form  p  br');
    br.remove();
    console.log(br);

    // END CONTACTS
    // --------------------

    // ========================================
    // END MAIN
    // ========================================
    // FOOTER
    // --------------------


    // END  FOOTER
    // ========================================
    // SLICK SLIDER
    // --------------------
    // READY PROJECTS
    // --------------------
    // $('.slide__active1').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     fade: true,
    //     asNavFor: '.slides_items1',
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: false
    //             }
    //         }
    //     ]
    // });


    // END CATALOG FASADS FILTER
    // --------------------
    // var windowWidthCatalog = $(window).width();
    // if (windowWidthCatalog <= 768) {
    //     $('.bl_catalog_f__vinil > ul').slick({
    //         centerMode: true,
    //         slidesToScroll: 1,
    //         slidesToShow: 3,
    //         arrows: true,
    //         dots: true,
    //         centerPadding: '0px',
    //     });
    // }
    // END REVIEWS
    // --------------------

    // ========================================

    // --------------------
    // END INNER PAGE 1
    // --------------------
    // ========================================
    // END SLICK SLIDER
    // ========================================
    // POPUP
    // $(".popup__order").click(function (e) {
    //     e.preventDefault();
    //     var popup = $('.bl_popup__order');
    //     popup.css('display', 'flex');
    //     $('body').addClass('lock');

    // });
    // $(".btn_close_popup").click(function (e) {
    //     e.preventDefault();
    //     var popup = $('.bl_popup__order');
    //     popup.css('display', 'none');
    //     $('body').removeClass('lock');
    // });
    // END POPUP
    // ========================================
});