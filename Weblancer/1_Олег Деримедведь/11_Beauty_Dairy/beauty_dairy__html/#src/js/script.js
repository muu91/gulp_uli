$(document).ready(function() {

    //=========================================================
    // HEADER MENU 

    $('.header__burger').click(function(e) {
        e.preventDefault();

        $('.header__desktop, .header__burger, .header__mobile').toggleClass('active');

        // if ($(".header__burger").hasClass('active')) {
        //     $('.header__burger').removeClass('active');
        //     $('.header__menu__mobile').slideUp();
        //     $('.header__miniblock__a').slideUp();
        //     $('html, body').removeClass('lock');
        //     $('.black__bg').removeClass('active');


        // } else {
        //     $('.header__burger').addClass('active');
        //     $('.black__bg').addClass('active');
        //     $('.header__menu__mobile').slideDown();
        //     $('html, body').addClass('lock');
        // }
        // $('html, body').toggleClass('lock');
    });

    // $('.btn_download').click(function(e) {
    //     e.preventDefault();

    //     if ($(".header__burger").hasClass('active')) {
    //         // $('.header__burger').removeClass('active');
    //         $('.header__menu__mobile').slideUp();
    //         // $('.header__burger').toggleClass('active');
    //         $('.header__miniblock__a').slideDown();
    //         // $('.header__miniblock__a').slideDown(); 

    //         // $('html, body').removeClass('lock');
    //     } else {
    //         $('.header__burger').toggleClass('active');
    //         $('.header__miniblock__a').slideToggle();
    //         $('html, body').addClass('lock');
    //         $('.black__bg').toggleClass('active');

    //     }
    // });

    // REMOVE CLASS ВНЕ БЛОКА
    // $(document).mouseup(function(e) {
    //     var div = $(".header__body");
    //     if (!div.is(e.target) && div.has(e.target).length === 0) {
    //         $(".header__burger, .black__bg").removeClass("active");
    //         $(".header__menu__mobile, .header__miniblock__a").slideUp();
    //         $('html, body').removeClass('lock');
    //         $('.black__bg').removeClass('active');
    //     }
    // });
    //END REMOVE CLASS ВНЕ БЛОКА
    //END HEADER MENU 
    //=========================================================
    //=========================================================
    // TEXTAREA


    // $("textarea").focus(function() {
    //     $(this).val("");
    // });

    // $("textarea").focusout(function() {
    //     $(this).val("Message                                    if you like, tell us about your problem and preferable date & time to schedule a call ");
    // });


    //END TEXTAREA
    //=========================================================
    //=========================================================
    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_in_the_media
    // $(".bl_in_the_media__text > p").each(function() {
    //     var size = 223;
    //     var newsContent = $(this);
    //     var newsText = newsContent.text();

    //     if (newsText.length > size) {
    //         $(this).text(newsText.slice(0, size) + "...");
    //     }
    // });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_in_the_media
    // --------------------
    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА BLOCK TESTIMONIALS
    // $(".bl_testimonials__item > p").each(function() {
    //     var size2 = 255;
    //     var newsContent2 = $(this);
    //     var newsText2 = newsContent2.text();

    //     if (newsText2.length > size2) {
    //         $(this).text(newsText2.slice(0, size2) + "");
    //     }
    // });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА BLOCK TESTIMONIALS
    // --------------------


    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА team__text

    // $(".team__text > p").each(function() {
    //     var sizeTeam = 700;
    //     var newsContentTeam = $(this);
    //     var newsTextTeam = newsContentTeam.text();

    //     if (newsTextTeam.length > sizeTeam) {
    //         $(this).text(newsTextTeam.slice(0, sizeTeam) + ' ... ').append('<a href="" class="team_read_more">Read More</a>');

    //         $('.team_read_more').click(function(e) {
    //             e.preventDefault();

    //             $(this).parent().text(newsTextTeam);
    //         });
    //     }
    // });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА team__text
    //=========================================================
    //=========================================================


    // BLOCK bl_discovering__items

    // $('.bl_discovering__items').slick({
    //     arrows: true,
    //     slidesToShow: 3,
    //     dots: true,
    //     slidesToScroll: 2,
    //     infinite: true,
    //     // speed: 1000,
    //     //  autoplay: true,
    //     // autoplaySpeed: 3000,
    //     // initialSlide: 4
    //     responsive: [{
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]

    // });
    //END BLOCK bl_discovering__items
    // -------------------
    // BLOCK IN THE MEDIA
    // var windowWidthTariff = $(window).width();
    // if (windowWidthTariff <= 991) {
    //     $('.bl_in_the_media .bl_in_the_media__items').slick({
    //         arrows: false,
    //         slidesToShow: 1,
    //         dots: true,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         autoplaySpeed: 3000
    //     });
    // }
    //END BLOCK IN THE MEDIA
    // -------------------
    // BLOCK TESTIMONIALS
    // $('.bl_testimonials__items').slick({
    //     arrows: false,
    //     slidesToShow: 2,
    //     dots: true,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     // speed: 1000,
    //     //  autoplay: true,
    //     // autoplaySpeed: 3000,
    //     // initialSlide: 4
    //     responsive: [
    //         // {
    //         //    breakpoint: 992,
    //         //    settings: {
    //         //       slidesToShow: 2
    //         //    }
    //         // },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         }
    //     ]

    // });
    // END BLOCK TESTIMONIALS
    // -------------------
    //=========================================================
    //=========================================================

    // Для якори

    // var identifier = window.location.hash;

    // if (identifier === "#insurance") {

    //     $('.bl_bottom_form').attr('id', 'insurance');

    //     $(window).load(function() {
    //         $('html, body').animate({
    //             scrollTop: $(".bl_form").offset().top
    //         }, 1000);
    //     });
    // } else if ()

    // Конец Для якори

    // $(window).load(function() {
    //     $('html, body').animate({
    //         scrollTop: $(".bl_form").offset().top
    //     }, 1000);
    // });


    //=========================================================
    //=========================================================


});