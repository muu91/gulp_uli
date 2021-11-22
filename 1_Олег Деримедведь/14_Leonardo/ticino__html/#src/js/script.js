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
    // Плавный скролл

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 120
        }, 1000);
    });
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
    // $(".bl_menu__menu .menu_tab__link").click(function () {
    //     // e.preventDefault();
    //     $(".bl_menu__menu .menu_tab__link").removeClass('active');
    //     $(this).addClass('active');
    // });

    // Долаем липкое меню когда доходим меню

    $(function () {
        $nav = $('.bl_menu__menu ');
        $nav.css('width', $nav.outerWidth());
        $window = $(window);
        $h = $nav.offset().top;
        $window.scroll(function () {
            if ($window.scrollTop() > $h) {
                $nav.addClass('menu_fixed');
            } else {
                $nav.removeClass('menu_fixed');
            }
        });
    });


    // var postion = $('#Entrées').offset().top,
    //     height = $('#Entrées').height();
    // $(document).on('scroll', function () {
    //     var scroll = $(document).scrollTop();
    //     if (scroll > postion && scroll < (postion + height)) {
    //         $('#Entrées').addClass('bg')
    //         $('#Entrées').addClass('bg')
    //     } else {
    //         $('.bl_menu__menu').removeClass('bg')
    //     }
    // })


    jQuery(window).scroll(function () {
        var $sections = $('.bl_menu__list ul li > div');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 130;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('a[href="#' + id + '"]').addClass('active');

            }
        })
    });

    // $(window).scroll(function () {
    //     var sections = $('.bl_menu__list ul li div'),
    //         artop = $('.arrow-top'),
    //         ardist = $('.bl_menu__list ul li div');

    //     sections.each(function (i, el) {
    //         var top = $(el).offset().top - 200;
    //         var bottom = top + $(el).height();
    //         var scroll = $(window).scrollTop();
    //         var id = $(el).attr('id');
    //         if (scroll > top && scroll < bottom) {
    //             $('a.active').removeClass('active');
    //             $('a[href="#' + id + '"]').addClass('active');
    //         }
    //     });

    //     var tt = $(ardist).offset().top;
    //     var scrollt = $(window).scrollTop();


    //     if (tt >= scrollt) {
    //         artop.css('visibility', 'hidden');
    //     } else {
    //         artop.css('visibility', 'visible');
    //     }

    // });

    // $(".bl_menu__menu ul > li a ").on("click", "a", function (event) {
    //     // исключаем стандартную реакцию браузера
    //     event.preventDefault();

    //     // получем идентификатор блока из атрибута href
    //     var id = $(this).attr('href'),

    //         // находим высоту, на которой расположен блок
    //         top = $(id).offset().top;

    //     // анимируем переход к блоку, время: 800 мс
    //     $('body,html').animate({ scrollTop: top }, 3500);
    // });

    // $(document).scroll(function () {
    //     if ($(this).scrollTop() <= ($(".bl_menu__menu").offset().top - $(window).height())) {
    //         //sticky
    //         $('.bl_menu__menu').addClass('menu_fixed')
    //     } else {
    //         //not sticky
    //         $('.bl_menu__menu').removeClass('menu_fixed')

    //     }
    // });

    // var tabNavBtn = $("[data-filter_tab]");
    // tabNavBtn.on("click", function (e) {
    //     e.preventDefault();
    //     var tabNavBtnClick = $(this).data('filter_tab');
    //     $("[data-tab_content]").each(function () {
    //         var tabContent = $(this).data('tab_content');
    //         if (tabContent != tabNavBtnClick) {
    //             $(this).hide();
    //         } else {
    //             $(this).show();
    //         }
    //     });
    // });

    // $(".bl_menu__menu  ul > li:first > .menu_tab__link").click();
    // --------------------

    // Добавляем класс, если li = 1

    $(".bl_menu .bl_menu__list > ul > li > div > ul ").each(function () {
        var li_1 = $(this).find('li').length;
        console.log(li_1);
        if (li_1 == 1) {
            $(this).addClass('center');
        }
    });

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