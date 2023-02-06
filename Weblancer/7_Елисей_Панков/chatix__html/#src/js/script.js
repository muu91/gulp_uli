// ========================================

// END LAZY LOAD
// ========================================
jQuery(document).ready(function ($) {

    // ========================================
    // HEADER 
    // --------------------
    // BURGER
    $('.header__burger').click(function (e) {
        e.preventDefault();
        $('.header__burger').toggleClass('active');
        $('.header__m').toggleClass('active');
        $('.header').toggleClass('active');

        $('main').toggleClass('active');
        // $('body').toggleClass('lock');

    });
    $('.btn_close__mobile').click(function (e) {
        e.preventDefault();
        $('.header__burger').removeClass('active');
        $('.header__m').removeClass('active');
        $('.header').removeClass('active');
        $('main').toggleClass('active');

        // $('body').removeClass('lock');

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

});