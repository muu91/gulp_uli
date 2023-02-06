// ========================================

$(window).scroll(function () {
    var top2 = $(document).scrollTop();

    if (top2 > 160) {
        $(".main_header").addClass('header__fixed');
    } else if (top2 < 160) {
        $(".main_header").removeClass('header__fixed');
    }
});


// END LAZY LOAD
// ========================================
$(document).ready(function () {

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
    // PAGE MENU
    // --------------------
    $(".bl_menu__menu .menu_tab__link").click(function (e) {
        e.preventDefault();
        $(".bl_menu__menu .menu_tab__link").removeClass('active');
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
    $(".bl_menu__menu > ul > li:first > .menu_tab__link").click();

    // --------------------

    var windowWidthTariff = $(window).width();
    var platItem = $('.bl_menu__carte_des_vins > ul > li > ul > li > .plat__price > .plat__item > p');
    if (windowWidthTariff <= 425) {
        platItem.each(function () {
            if (!$(this).text() || !$(this).text().trim())
                $(this).remove();
        })
    }

    // --------------------
    // END PAGE MENU
    // --------------------
    // ========================================
    // --------------------
    // REVIEWS
    // $('.bl_reviews__slide > ul').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // fade: true,
    //     cssEase: 'ease',
    //     arrows: true,
    //     dots: false,
    //     centerMode: false,
    //     focusOnSelect: true
    // });
    // END REVIEWS
    // --------------------
    // ========================================
    // --------------------
    // PROCESS SLIDER

    // END PROCESS SLIDER
    // --------------------
    // ========================================
    // END MAIN
    // ========================================
    // FOOTER
    // --------------------


    // END  FOOTER
    // ========================================

    // --------------------
    // END INNER PAGE 1
    // --------------------
    // ========================================
    // END SLICK SLIDER
    // ========================================

});