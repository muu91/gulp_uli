// ========================================

// const { notify } = require("browser-sync");

// const { active } = require("browser-sync");

// $(window).scroll(function () {
//     var top2 = $(document).scrollTop();

//     if (top2 > 160) {
//         $(".main_header").addClass('header__fixed');
//     } else if (top2 < 160) {
//         $(".main_header").removeClass('header__fixed');
//     }
// });
// ========================================
// SCRIPT IMG > SVG
jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
// ========================================

// END LAZY LOAD
// ========================================
$(document).ready(function () {

    // ========================================
    // VARIABLES
    var windowWidth = $(window).width();
    // END VARIABLES
    // ========================================
    // HEADER 
    // --------------------
    // BURGER
    $('.header__burger').click(function (e) {
        e.preventDefault();
        $('.header__burger').toggleClass('active');
        $('.header__mobile').toggleClass('active');
        $(".header__mobile .header__mobile__content").removeClass("active");
        $(".header__mobile .sub_catalog").removeClass("active");
        $('body').toggleClass('lock');
    });
    // $('.btn_close__mobile').click(function (e) {
    //     e.preventDefault();
    //     $('.header__burger').removeClass('active');
    //     $('.header__mobile').removeClass('active');
    //     $('body').removeClass('lock');
    // });
    // END BURGER
    // --------------------
    // HEADER CITIES
    $('.header__cities > a').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).next().show();

    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function (e) {
        var div = $(".header__cities ");
        // var burger = $('.h_burger2');
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header__cities > a').removeClass('active');
            $('.header__cities > ul').hide();
            // скрываем его
        }
    });
    // END REMOVE CLASS ВНЕ БЛОКА
    $('.header__cities > ul > li > a').click(function (e) {
        e.preventDefault();
        var city = $(this).text();
        $('.header__cities > a').text(city);
        $('.header__cities > a').removeClass('active');
        $('.header__cities > ul').hide();

    });

    // END HEADER CITIES
    // --------------------
    $(".header__mobile  .mobile__catalogs ul > li h3").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $(".header__mobile  .mobile__catalogs ul > li h3").removeClass("active");
            $(this).addClass("active");

            $(".header__mobile  .mobile__catalogs ul > li h3").next().slideUp();
            $(this).next().slideDown();
        }
    });
    $(".header__mobile  .mobile__catalogs ul > li").first().find('h3').click();
    // --------------------
    $(".header__mobile  ul > li > ul> li> h4").click(function (e) {
        e.preventDefault();
        $(".header__mobile .header__mobile__content").addClass("active");
        $(this).next().addClass('active');
    });
    $(".header__mobile  .mobile__catalogs .back").click(function (e) {
        e.preventDefault();
        $(".header__mobile .header__mobile__content").removeClass("active");
        $(".header__mobile .sub_catalog").removeClass("active");
    });

    // Раскрвыаем все списки
    $(".header__mobile  .mobile__catalogs .all").click(function (e) {
        e.preventDefault();
        $(this).prev().find('li').show();
        $(this).hide();

        // $(".header__mobile .sub_catalog").removeClass("active");
    });
    // --------------------
    // HEADER DESKTOP  
    $(".burger_desktop").click(function (e) {
        e.preventDefault();
        $(".burger_desktop__menu").addClass("active");
        $('body').addClass('lock');
    });

    $(".btn_close").click(function (e) {
        e.preventDefault();
        $(".burger_desktop__menu").removeClass("active");
        $('body').removeClass('lock');
    });

    $(".burger_desktop__menu ul > li ul > li > ul ").each(function () {
        var countLi = $(this).find('li').length;
        var countLiMore = $(this).find('li').length - 5;

        // console.log(countLiMore);
        if (countLi > 5) {
            $(this).next().addClass('active');
            $(this).next().find('span').html(countLiMore);
        } else {
            $(this).next().removeClass('active');
        }
    });
    $(".show_more").click(function (e) {
        e.preventDefault();
        $(this).prev().find('li').show();
        $(this).remove();
    });
    // END HEADER DESKTOP   
    // --------------------
    // HEADER MENU
    $(".header__menu > a").click(function (e) {
        e.preventDefault();
        $(this).prev('ul').find('li').show();
        $(this).hide();
    });
    // END HEADER MENU
    // --------------------

    // SEARCH
    $(".btn_search").click(function (e) {
        e.preventDefault();
        $('.main_search').show();
    });
    $(".btn_close_search").click(function (e) {
        e.preventDefault();
        $('.main_search').hide();
    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function (e) {
        var div = $(".main_search .main_search__content");
        // var burger = $('.h_burger2');
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.main_search').hide();

            // скрываем его
        }
    });
    // END REMOVE CLASS ВНЕ БЛОКА
    // END SEARCH
    // --------------------


    // --------------------
    // END HEADER
    // ========================================
    // MAIN
    // ========================================
    // PAGE INDEX
    // --------------------
    // SPECIAL
    // --------------------

    $('.minus').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('.number');
        var count = parseInt($input.text()) - 1;
        if (count >= 1) {
            $input.text(count);
            $input.html();
            return false;
        }
    });
    $('.plus').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('.number');
        $input.text(parseInt($input.text()) + 1);
        $input.html();
        return false;
    });

    // BUTTON MINUS DEACTIVATION
    $('.count a').click(function (e) {
        e.preventDefault();
        var $input = $(this).parent().find('.number');
        var count = parseInt($input.text());
        var minus = $(this).parent().find('.minus');
        // console.log(count);
        if (count >= 2) {
            minus.removeClass('deactivation');
        } else {
            minus.addClass('deactivation');
        }
    });

    // --------------------
    // FAVORITES
    $('.favorites').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    // --------------------
    // END SPECIAL
    // --------------------
    // SERVICES
    // $('.bl_services__items ul li h4').click(function (e) {
    //     e.preventDefault();
    //     $('.bl_services__items ul li h4').removeClass('active');
    //     $('.bl_services__items ul li ul').removeClass('active');
    //     $(this).addClass('active');
    //     $(this).next().addClass('active');
    // });

    // // REMOVE CLASS ВНЕ БЛОКА
    // $(document).mouseup(function (e) {
    //     var div = $(".bl_services__items ul li h4");
    //     // var burger = $('.h_burger2');
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         &&
    //         div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         $('.bl_services__items ul li h4').removeClass('active');
    //         $('.bl_services__items ul li ul').removeClass('active');
    //         // скрываем его
    //     }
    // });
    // END REMOVE CLASS ВНЕ БЛОКА
    // --------------------
    // MOBILE SELECT CATEGORY
    $('.btn_choice_service').click(function (e) {
        e.preventDefault();

        $(this).next().toggleClass('active');
        // // REMOVE CLASS ВНЕ БЛОКА
        $(document).mouseup(function (e) {
            var div = $(".bl_service_page__menu");
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.bl_service_page__menu > ul').removeClass('active');
            }
        });
        // END REMOVE CLASS ВНЕ БЛОКА
    });
    // --------------------
    $('.bl_service_page__menu > ul > li > ul > li > h4').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).next().next().slideToggle();
    });
    $('.bl_catalogue_page__menu > ul > li > ul > li > h4').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).next().next().slideToggle();
    });
    // END MOBILE SELECT CATEGORY
    // --------------------
    // END MOBILE SELECT CATEGORY
    // --------------------



    // END SERVICES
    // --------------------
    // END PAGE INDEX
    // --------------------
    // ========================================
    // --------------------
    // SLIDERS
    // --------------------
    // BLOCK HEADER
    $('.big_slides > ul').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });
    $('.small_slides > ul').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    // END BLOCK HEADER
    // --------------------
    // SPECIAL
    $('.bl_special__items > ul').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    // END SPECIAL
    // --------------------
    // OUR WORKS
    $('.bl_our_works__slides  ul').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [

            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".bl_our_works__links .work_filter").click(function (e) {
        e.preventDefault();
        $(".bl_our_works__links .work_filter").removeClass('active');
        $(this).addClass('active');

    });

    $('.bl_our_works__links ul li a').on('click', function (e) {
        e.preventDefault();
        var filterClass = $(this).data('value');
        // $('.filter-class').text(filterClass);
        $('.bl_our_works__slides  ul').slick('slickUnfilter');
        $('.bl_our_works__slides  ul').slick('slickFilter', filterClass);
    });
    // END OUR WORKS
    // --------------------
    // OUR CLIENTS
    $('.bl_our_clients__content  ul').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    // arrows: false,

                }
            }
        ]
    });

    // END OUR CLIENTS
    // --------------------
    // CATALOGUE
    $('.bl_catalogue_page__slide > ul').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 701,
                settings: "unslick"
            }
        ]
    });
    // END CATALOGUE
    // --------------------
    // END SLIDERS
    // --------------------
    // END MAIN
    // ========================================
    // FOOTER
    // --------------------
    $('.f_bottom__content > ul').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        // fade: true,
        // cssEase: 'ease',
        arrows: true,
        dots: false,
        // centerMode: false,
        // focusOnSelect: true
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // $slick.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    //     $(this).find('.slick-next').prop('disabled', nextSlide === slick.slideCount - 1);
    // });

    // --------------------
    // END  FOOTER
    // ========================================
    // SEARCH PAGE
    // --------------------
    // PAGINATION
    $(function () {
        if (windowWidth >= 520) {
            $(".main__pagination > ul").pagination({
                items: 20,
                itemsOnPage: 1,
                cssStyle: 'dark-theme',
                displayedPages: 3,
                edges: 1,
            });
        } else if (windowWidth < 520) {
            $(".main__pagination > ul").pagination({
                items: 20,
                itemsOnPage: 1,
                cssStyle: 'dark-theme',
                displayedPages: 1,
                edges: 1,
            });
        }
    });
    // END PAGINATION
    // --------------------
    // SORTING
    if (windowWidth <= 425) {
        $(".btn_sort").click(function (e) {
            e.preventDefault();
            $('.btn_sort').next().addClass('active');
        });
        $(".main__sorting ul li a").click(function (e) {
            e.preventDefault();
            $('.main__sorting ul').removeClass('active');
            var a_text = $(this).text();
            $('.main__sorting .btn_sort').text(a_text);
        });
        // REMOVE CLASS ВНЕ БЛОКА
        $(document).mouseup(function (e) {
            var div = $(".main__sorting ul ");
            // var burger = $('.h_burger2');
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                $('.main__sorting ul').removeClass('active');

                // скрываем его
            }
        });
        // END REMOVE CLASS ВНЕ БЛОКА
    }
    // END SORTING
    // --------------------
    // END SEARCH PAGE
    // ========================================
    // CONTACTS PAGE
    // --------------------
    $(".map_address ul li").click(function (e) {
        e.preventDefault();
        $('.map_address ul li').removeClass('active');
        $(this).addClass('active');
    });
    $(".map_address ul li:first").click();
    // --------------------
    // END CONTACTS PAGE
    // ========================================
    // OUR WORKS PAGE
    // --------------------
    $(".bl_works_page__menu ul li a").click(function (e) {
        e.preventDefault();
        $('.bl_works_page__menu ul li a').removeClass('active');
        $(this).addClass('active');
    });

    // --------------------
    // END OUR WORKS PAGE
    // ========================================
    // PA DATA
    // --------------------
    // PERSONAL DATA
    $(".bl_pa_data__menu ul li a").click(function (e) {
        e.preventDefault();
        $('.bl_pa_data__menu ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $(".bl_pa_data__menu ul li:first a").click();
    // END PERSONAL DATA
    // --------------------
    // PERSONAL ORDER
    $(".order_menu ul li a").click(function (e) {
        e.preventDefault();
        $('.order_menu ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $(".order_menu ul li:first a").click();
    // --------------------
    $(".order__list > ul").each(function () {
        var countLi = $(this).find('li').length;
        var countLiMore = $(this).find('li').length - 3;
        // console.log(countLiMore);
        if (countLi > 3) {
            // $(this).next().addClass('active');
            $(this).next().show();
            $(this).next().find('span').html(countLiMore);
        } else {
            $(this).next().hide();
        }
    });
    $(".more_pa_data").click(function (e) {
        e.preventDefault();
        $(this).prev().find('li').show();
        $(this).hide();
    });
    // --------------------
    $(".order_buttons > .more").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('more_active')) {
            $(this).closest('.order_content').find('.bl_hidden').slideUp();
            $(this).removeClass('more_active');
            $(this).text('Подробнее');
            if (windowWidth <= 700) {
                $('.order_content > ul > li').slideUp();
            }
        }
        else {
            $(this).closest('.order_content').find('.bl_hidden').slideDown();
            $(this).addClass('more_active');
            $(this).text('Свернуть');
            if (windowWidth <= 700) {
                $('.order_content > ul > li').slideDown();

            }
        }
    });
    // --------------------
    if (windowWidth <= 992) {
        $(".order_mobile_menu").click(function (e) {
            e.preventDefault();
            $(this).next().slideToggle();
            $(this).next().toggleClass('active');
        });
        $(".order_menu > ul > li > a").click(function (e) {
            e.preventDefault();
            var text_a = $(this).text();
            $(this).closest('.order_menu').find('.order_mobile_menu').text(text_a);
            $(this).closest('.order_menu').find('ul').slideUp();
            $(this).closest('.order_menu').find('ul').removeClass('active');
        });
    }
    // --------------------
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
    $(".bl_pa_data__menu > ul > li:first > a").click();
    // --------------------
    // END PERSONAL ORDER
    // --------------------
    // LIKE
    $(".bl_like .btn_delete").click(function (e) {
        e.preventDefault();
        $(this).closest('li').remove();
    });
    $(".bl_like .btn_clear").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(".bl_like .main__content__items ul li").remove();
    });
    // END LIKE
    // --------------------
    // END PA DATA
    // ========================================
    // ORDERING 1
    // --------------------
    $('#order_check').click(function () {
        if ($('#order_check').prop('checked')) {
            $('.order_inputs__active').addClass('active');
        } else {
            $('.order_inputs__active').removeClass('active');
        }
    });
    // --------------------
    var tabNavBtn_order = $("[data-filter_tab_order]");
    tabNavBtn_order.on("click", function (e) {
        e.preventDefault();
        var tabNavBtnClick_order = $(this).data('filter_tab_order');
        $("[data-tab_content_order]").each(function () {
            var tabContent_order = $(this).data('tab_content_order');
            if (tabContent_order != tabNavBtnClick_order) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
    $(".main__content  .order_menu  ul > li:first > a").click();
    // --------------------
    $(".order_choice ul li").click(function (e) {
        e.preventDefault();
        $(this).closest('.order_choice').find('li').removeClass('active');
        $(this).addClass('active');

    });
    // --------------------
    // END ORDERING 1
    // ========================================
    // CARD PAGE
    // --------------------
    $(".card_tab__menu ul li a").click(function (e) {
        e.preventDefault();
        $('.card_tab__menu ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $(".card_tab__menu ul li:first a").click();
    // --------------------
    var tabNavBtn_card = $("[data-filter_tab_card]");
    tabNavBtn_card.on("click", function (e) {
        e.preventDefault();
        var tabNavBtnClick_card = $(this).data('filter_tab_card');
        $("[data-tab_content_card]").each(function () {
            var tabContent_card = $(this).data('tab_content_card');
            if (tabContent_card != tabNavBtnClick_card) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
    $(".card_tab__menu ul > li:first > a").click();
    // --------------------
    $('.slide__additionaly > ul').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: false,
        asNavFor: '.slide__main ul',
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 731,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    });
    $('.slide__main > ul').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__additionaly ul',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        fade: true,
    });
    // --------------------
    // END CARD PAGE
    // ========================================
    // CATALOGUE TABLE
    // --------------------
    // FILTER
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 2500,
            values: [0, 2500],
            slide: function (event, ui) {
                $("#price1_1").val(ui.values[0]);
                $("#price1_2").val(ui.values[1]);
            }
        });
        $("#price1_1").val($("#slider-range").slider("values", 0));
        $("#price1_2").val($("#slider-range").slider("values", 1));
    });
    $('.ui-slider-handle').draggable();

    $(function () {
        $("#slider-range2").slider({
            range: true,
            min: 1200,
            max: 2500,
            values: [1200, 2500],
            slide: function (event, ui) {
                $("#price2_1").val(ui.values[0]);
                $("#price2_2").val(ui.values[1]);
            }
        });
        $("#price2_1").val($("#slider-range2").slider("values", 0));
        $("#price2_2").val($("#slider-range2").slider("values", 1));
    });
    $('.ui-slider-handle').draggable();

    $(function () {
        $("#slider-range3").slider({
            range: true,
            min: 2100,
            max: 2700,
            values: [2100, 2700],
            slide: function (event, ui) {
                $("#price3_1").val(ui.values[0]);
                $("#price3_2").val(ui.values[1]);
            }
        });
        $("#price3_1").val($("#slider-range3").slider("values", 0));
        $("#price3_2").val($("#slider-range3").slider("values", 1));
    });
    $('.ui-slider-handle').draggable();
    // END FILTER
    // --------------------
    $(".filter__checkbox ul  ").each(function () {
        var countLi_filter = $(this).find('li').length;
        var countLiMore_filter = $(this).find('li').length - 5;
        if (countLi_filter > 5) {
            $(this).next().addClass('active');
            $(this).next().find('span').html(countLiMore_filter);
        } else {
            $(this).next().removeClass('active');
        }
    });
    $(".filter__more").click(function (e) {
        e.preventDefault();
        $(this).prev().find('li').fadeIn();
        $(this).hide();
    });
    // --------------------
    $('.btn_filter_mobile').click(function (e) {
        e.preventDefault();
        $('.main_main__filter > aside').addClass('active');
        $('body').addClass('lock');
    });

    $('.btn_close_filter').click(function (e) {
        e.preventDefault();
        $('.main_main__filter > aside').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.btn_close_filter_block').click(function (e) {
        e.preventDefault();
        $('.main_main__filter > aside').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.main_main__filter button').click(function (e) {
        e.preventDefault();
        $('.main_main__filter > aside').removeClass('active');
        $('body').removeClass('lock');
    });
    // --------------------
    // END CATALOGUE TABLE
    // --------------------
    // PORTFOLIO
    var tabNavBtn_card = $("[data-filter_portflio]");
    tabNavBtn_card.on("click", function (e) {
        e.preventDefault();
        var tabNavBtnClick_card = $(this).data('filter_portflio');
        $("[data-tab_content__portflio]").each(function () {
            var tabContent_card = $(this).data('tab_content__portflio');
            if (tabContent_card != tabNavBtnClick_card) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
    $(".bl_works_page_2 ul > li:first > a").click();
    // END PORTFOLIO
    // --------------------

    // ========================================







    // OTHER
    // --------------------
    // SELECT STYLE
    $('.select').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            duration = 250; // длительность анимации 

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });
    // END SELECT STYLE
    // --------------------
    // UL GORIZONT
    $('.btn_gorizont').click(function (e) {
        e.preventDefault();
        $('.main__content__items').addClass('ul_gorizont');
    });
    $('.btn_cube').click(function (e) {
        e.preventDefault();
        $('.main__content__items').removeClass('ul_gorizont');
    });
    // END UL GORIZONT
    // --------------------
    // POPUP
    // close
    $('.btn_close_popup').click(function (e) {
        e.preventDefault();
        $('.bl_popup').css('display', 'none');
        $('body').removeClass('lock');

    });
    $('.bg_btn_close').click(function (e) {
        e.preventDefault();
        $('.bl_popup').css('display', 'none');
        $('body').removeClass('lock');

    });
    // --------------------
    // open
    $('.btn_popup__feedback ').click(function (e) {
        e.preventDefault();
        $('.popup__feedback').css('display', 'flex');
        $('body').addClass('lock');
    });
    $('.btn_popup_free_measuring').click(function (e) {
        e.preventDefault();
        $('.popup_free_measuring').css('display', 'flex');
        $('body').addClass('lock');
    });
    $('.btn_popup_prices').click(function (e) {
        e.preventDefault();
        $('.popup_prices').css('display', 'flex');
        $('body').addClass('lock');
    });

    $('.btn_popup_quick_order').click(function (e) {
        e.preventDefault();
        $('.popup_quick_order').css('display', 'flex');
        $('body').addClass('lock');
    });
    $('.btn_popup_registration').click(function (e) {
        e.preventDefault();
        $('.popup_registration').css('display', 'flex');
        $('body').addClass('lock');
    });
    $('.btn_popup_authorization').click(function (e) {
        e.preventDefault();
        $('.popup_authorization').css('display', 'flex');
        $('body').addClass('lock');
    });

    // END POPUP
    // --------------------

    // --------------------


    // END OTHER
    // ========================================




});