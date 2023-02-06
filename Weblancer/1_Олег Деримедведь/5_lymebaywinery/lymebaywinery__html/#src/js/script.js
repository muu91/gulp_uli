$(document).ready(function() {



    //=========================================================
    // HEADER MENU 

    $('.w_burger_btn__open').click(function(e) {
        e.preventDefault();

        $('.w_bl_media').addClass('w_active');
        $('html, body').addClass('w_lock');
    });

    $('.w_burger_btn__close, a, button').click(function(e) {
        e.preventDefault();

        $('.w_bl_media').removeClass('w_active');
        $('html, body').removeClass('w_lock');
    });

    $('.burger__logo').click(function(e) {
        $('.header__burger,.burger__content, .burger__top').removeClass('active');
        $('html, body').removeClass('lock');
        $('.burger__close').addClass('active');
    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var div = $(".burger__content");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $('.header__burger, .burger__content, .burger__top').removeClass('active');
            $('html, body').removeClass('lock');

        }
    });
    //END REMOVE CLASS ВНЕ БЛОКА

    // TABS

    // $('.btn_tab').click(function(e) {
    //     e.preventDefault();

    //     $('.burger__tab').slideToggle(300);
    // });

    // END TABS

    //END HEADER MENU 
    //=========================================================
    //=========================================================

    // $('.slider__items').slick({
    //     arrows: true,
    //     slidesToShow: 1,
    //     dots: true,
    //     slidesToScroll: 1,
    //     infinite: true,
    //     // autoplay: true,
    //     autoplaySpeed: 3000,
    //     initialSlide: 4

    // });


    // END BLOCK CLIENTS
});