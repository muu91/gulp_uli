// ========================================

AOS.init({
    // Global settings:
    disable: false, // Указываем где НЕ должно быть анимации: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // Если элемент виден снизу 120px, тогда начнется анмация
    delay: 0, // Задержка анимации
    duration: 800, // Скорость анимации
    easing: "ease", // Тип анимации
    once: true, // Элемент будет анимироваться каждый раз при наведении
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
// ========================================


$(document).ready(function() {

    //=========================================================
    // HEADER MENU 

    $('.header_mobile__burger').click(function(e) {
        e.preventDefault();

        $('.mobile__body, .header_mobile__burger').toggleClass('active');
        $('.click_bottom_close').toggleClass('btn__none');

        $('html, body').toggleClass('lock');
    });
    $('.top_header_close_btn').click(function(e) {
        e.preventDefault();

        $('.mobile__body, .header_mobile__burger').removeClass('active');
        $('.click_bottom_close').toggleClass('btn__none');
        $('html, body').removeClass('lock');

    });

    $('.drop__link_mob').click(function(e) {
        e.preventDefault();
        $(this).next().slideDown();

    });

    // Top Header BTN CLOSE
    $('.top_btn_close').click(function(e) {
        e.preventDefault();
        $(".top_header").hide();

    });
    // END Top Header BTN CLOSE



    //END HEADER MENU 
    //=========================================================
    //=========================================================
    // HEADER BURGER 
    // Скрываем блок при клике на элемент списка меню

    $('.burger__links a').click(function(e) {
        // e.preventDefault();

        $('.mobile__body, .header_mobile__burger').removeClass('active');
        $('html, body').removeClass('lock');
    });

    $('.bottom_header__verify > a').click(function(e) {
        // e.preventDefault();

        $('.mobile__body, .header_mobile__burger').removeClass('active');
        $('html, body').removeClass('lock');
    });



    //END HEADER BURGER 
    //=========================================================
    //=========================================================
    // TEXTAREA


    $("textarea").focus(function() {
        $(this).val("");
    });

    // $("textarea").focusout(function() {
    //     $(this).val("Message                                    if you like, tell us about your problem and preferable date & time to schedule a call ");
    // });


    //END TEXTAREA
    //=========================================================
    //=========================================================
    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА faq_read__item

    $(".faq_read__length").each(function() {
        var size = 200;
        var newsContent = $(this);
        var newsText = newsContent.text();

        if (newsText.length > size) {
            $(this).text(newsText.slice(0, size) + " ...");
        }
    });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА faq_read__item

    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА team__text

    $(".team__text > p").each(function() {
        var sizeTeam = 700;
        var newsContentTeam = $(this);
        var newsTextTeam = newsContentTeam.text();

        if (newsTextTeam.length > sizeTeam) {
            $(this).text(newsTextTeam.slice(0, sizeTeam) + ' ... ').append('<a href="" class="team_read_more">Read More</a>');

            $('.team_read_more').click(function(e) {
                e.preventDefault();

                $(this).parent().text(newsTextTeam);
            });
        }
    });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА team__text
    //=========================================================
    //=========================================================


    // BLOCK ACCREDITATIONS

    $('.accreditations__items').slick({
        arrows: true,
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        infinite: true,
        // speed: 1000,
        autoplay: true,
        // autoplaySpeed: 3000,
        // initialSlide: 4

    });
    //END BLOCK ACCREDITATIONS
    // -------------------
    // -------------------
    // BLOCK SERVICES
    $('.services__items').slick({
        arrows: true,
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        infinite: true,
        // speed: 1000,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // initialSlide: 4

    });
    //END BLOCK SERVICES
    // -------------------
    // -------------------
    // BLOCK TESTIMOIALS
    $('.testimonials__items').slick({
        arrows: true,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        // speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        // initialSlide: 4

    });
    //END BLOCK TESTIMOIALS
    // -------------------
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

    $(window).load(function() {
        $('html, body').animate({
            scrollTop: $(".bl_form").offset().top
        }, 1000);
    });


    //=========================================================
    //=========================================================
    // Добавляем айдишки
    $('.bl_bottom_form').attr('id', 'insurance');


});