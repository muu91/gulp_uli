// ========================================
// LAZY LOAD
// ----------
// B LAZY
(function (q, m) { "function" === typeof define && define.amd ? define(m) : "object" === typeof exports ? module.exports = m() : q.Blazy = m() })(this, function () { function q(b) { var c = b._util; c.elements = E(b.options); c.count = c.elements.length; c.destroyed && (c.destroyed = !1, b.options.container && l(b.options.container, function (a) { n(a, "scroll", c.validateT) }), n(window, "resize", c.saveViewportOffsetT), n(window, "resize", c.validateT), n(window, "scroll", c.validateT)); m(b) } function m(b) { for (var c = b._util, a = 0; a < c.count; a++) { var d = c.elements[a], e; a: { var g = d; e = b.options; var p = g.getBoundingClientRect(); if (e.container && y && (g = g.closest(e.containerClass))) { g = g.getBoundingClientRect(); e = r(g, f) ? r(p, { top: g.top - e.offset, right: g.right + e.offset, bottom: g.bottom + e.offset, left: g.left - e.offset }) : !1; break a } e = r(p, f) } if (e || t(d, b.options.successClass)) b.load(d), c.elements.splice(a, 1), c.count--, a-- } 0 === c.count && b.destroy() } function r(b, c) { return b.right >= c.left && b.bottom >= c.top && b.left <= c.right && b.top <= c.bottom } function z(b, c, a) { if (!t(b, a.successClass) && (c || a.loadInvisible || 0 < b.offsetWidth && 0 < b.offsetHeight)) if (c = b.getAttribute(u) || b.getAttribute(a.src)) { c = c.split(a.separator); var d = c[A && 1 < c.length ? 1 : 0], e = b.getAttribute(a.srcset), g = "img" === b.nodeName.toLowerCase(), p = (c = b.parentNode) && "picture" === c.nodeName.toLowerCase(); if (g || void 0 === b.src) { var h = new Image, w = function () { a.error && a.error(b, "invalid"); v(b, a.errorClass); k(h, "error", w); k(h, "load", f) }, f = function () { g ? p || B(b, d, e) : b.style.backgroundImage = 'url("' + d + '")'; x(b, a); k(h, "load", f); k(h, "error", w) }; p && (h = b, l(c.getElementsByTagName("source"), function (b) { var c = a.srcset, e = b.getAttribute(c); e && (b.setAttribute("srcset", e), b.removeAttribute(c)) })); n(h, "error", w); n(h, "load", f); B(h, d, e) } else b.src = d, x(b, a) } else "video" === b.nodeName.toLowerCase() ? (l(b.getElementsByTagName("source"), function (b) { var c = a.src, e = b.getAttribute(c); e && (b.setAttribute("src", e), b.removeAttribute(c)) }), b.load(), x(b, a)) : (a.error && a.error(b, "missing"), v(b, a.errorClass)) } function x(b, c) { v(b, c.successClass); c.success && c.success(b); b.removeAttribute(c.src); b.removeAttribute(c.srcset); l(c.breakpoints, function (a) { b.removeAttribute(a.src) }) } function B(b, c, a) { a && b.setAttribute("srcset", a); b.src = c } function t(b, c) { return -1 !== (" " + b.className + " ").indexOf(" " + c + " ") } function v(b, c) { t(b, c) || (b.className += " " + c) } function E(b) { var c = []; b = b.root.querySelectorAll(b.selector); for (var a = b.length; a--; c.unshift(b[a])); return c } function C(b) { f.bottom = (window.innerHeight || document.documentElement.clientHeight) + b; f.right = (window.innerWidth || document.documentElement.clientWidth) + b } function n(b, c, a) { b.attachEvent ? b.attachEvent && b.attachEvent("on" + c, a) : b.addEventListener(c, a, { capture: !1, passive: !0 }) } function k(b, c, a) { b.detachEvent ? b.detachEvent && b.detachEvent("on" + c, a) : b.removeEventListener(c, a, { capture: !1, passive: !0 }) } function l(b, c) { if (b && c) for (var a = b.length, d = 0; d < a && !1 !== c(b[d], d); d++); } function D(b, c, a) { var d = 0; return function () { var e = +new Date; e - d < c || (d = e, b.apply(a, arguments)) } } var u, f, A, y; return function (b) { if (!document.querySelectorAll) { var c = document.createStyleSheet(); document.querySelectorAll = function (a, b, d, h, f) { f = document.all; b = []; a = a.replace(/\[for\b/gi, "[htmlFor").split(","); for (d = a.length; d--;) { c.addRule(a[d], "k:v"); for (h = f.length; h--;)f[h].currentStyle.k && b.push(f[h]); c.removeRule(0) } return b } } var a = this, d = a._util = {}; d.elements = []; d.destroyed = !0; a.options = b || {}; a.options.error = a.options.error || !1; a.options.offset = a.options.offset || 100; a.options.root = a.options.root || document; a.options.success = a.options.success || !1; a.options.selector = a.options.selector || ".b-lazy"; a.options.separator = a.options.separator || "|"; a.options.containerClass = a.options.container; a.options.container = a.options.containerClass ? document.querySelectorAll(a.options.containerClass) : !1; a.options.errorClass = a.options.errorClass || "b-error"; a.options.breakpoints = a.options.breakpoints || !1; a.options.loadInvisible = a.options.loadInvisible || !1; a.options.successClass = a.options.successClass || "b-loaded"; a.options.validateDelay = a.options.validateDelay || 25; a.options.saveViewportOffsetDelay = a.options.saveViewportOffsetDelay || 50; a.options.srcset = a.options.srcset || "data-srcset"; a.options.src = u = a.options.src || "data-src"; y = Element.prototype.closest; A = 1 < window.devicePixelRatio; f = {}; f.top = 0 - a.options.offset; f.left = 0 - a.options.offset; a.revalidate = function () { q(a) }; a.load = function (a, b) { var c = this.options; void 0 === a.length ? z(a, b, c) : l(a, function (a) { z(a, b, c) }) }; a.destroy = function () { var a = this._util; this.options.container && l(this.options.container, function (b) { k(b, "scroll", a.validateT) }); k(window, "scroll", a.validateT); k(window, "resize", a.validateT); k(window, "resize", a.saveViewportOffsetT); a.count = 0; a.elements.length = 0; a.destroyed = !0 }; d.validateT = D(function () { m(a) }, a.options.validateDelay, a); d.saveViewportOffsetT = D(function () { C(a.options.offset) }, a.options.saveViewportOffsetDelay, a); C(a.options.offset); l(a.options.breakpoints, function (a) { if (a.width >= window.screen.width) return u = a.src, !1 }); setTimeout(function () { q(a) }) } });
// END B LAZY
// ----------
// var blazy = new Blazy();

// END LAZY LOAD
// ========================================
$(document).ready(function () {
    // ========================================
    // HEADER 
    // --------------------
    // CITIES BTN
    $('.h__top__cities > a').click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });
    $('.h__top__cities > ul > li > a').click(function (e) {
        // e.preventDefault();
        $('.h__top__cities > a').next().slideUp();
    });

    $(document).mouseup(function (e) {
        var notCities = $(".h__top__cities");
        if (!notCities.is(e.target)
            &&
            notCities.has(e.target).length === 0) {
            $('.h__top__cities > a').next().slideUp();
        }
    });
    // END CITIES BTN
    // --------------------
    // При клике меняем город

    $('.header__desktop a[data-city]').click(function () {
        let dataCity = $(this).attr('data-city');
        let headerCity = $('#header_city').html(dataCity);
        console.log(dataCity);

    });



    // --------------------

    // BURGER
    $('.header__burger').click(function (e) {
        e.preventDefault();
        $('.header__burger').addClass('active');
        $('.header__mobile').addClass('active');
        $('body').addClass('lock');

    });
    $('.btn_close__mobile').click(function (e) {
        e.preventDefault();
        $('.header__burger').removeClass('active');
        $('.header__mobile').removeClass('active');
        $(' body').removeClass('lock');

    });
    $('.header__mobile a').click(function (e) {
        // e.preventDefault();
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
    $(window).scroll(function () {
        var topHeight = $(this).scrollTop();
        if (topHeight > 300) {
            $('.header__sticky').slideDown(200);
        } else if (topHeight <= 300) {
            $('.header__sticky').slideUp(200);
        }
    });
    // END STICKY
    // --------------------


    // END HEADER
    // ========================================
    // MAIN
    // ========================================
    // --------------------
    // BLOCK HEADER
    // --------------------
    // INPUT
    $(function () {
        $("#phone1").mask("+7(999) 999 - 99 - 99");
    });
    $(function () {
        $("#phone2").mask("+7(999) 999 - 99 - 99");
    });
    $(function () {
        $("#phone3").mask("+7(999) 999 - 99 - 99");
    });
    $(function () {
        $("#phone4").mask("+7(999) 999 - 99 - 99");
    });
    $(function () {
        $("#phone5").mask("+7(999) 999 - 99 - 99");
    });
    $(function () {
        $("#phone6").mask("+7(999) 999 - 99 - 99");
    });
    // --------------------
    // END BLOCK HEADER
    // --------------------
    // ========================================
    // RUFUS BLACK COUNTER
    // БЛОК ДЛЯ УВЕЛИЧЕНИЯ ЧИСЕЛ


    // --------------------
    // ПОКАЗЫВАЕТ ТЕКСТ ПОЛНОСТЬЮ (.bl_advantage)
    // $(".bl_advantage__text > .read_more_red").click(function (e) {
    //     // e.preventDefault();
    //     var blockHidden = $(this).prev();
    //     blockHidden.css('max-height', 'inherit')
    //     $(this).hide();
    // });
    // END ПОКАЗЫВАЕТ ТЕКСТ ПОЛНОСТЬЮ
    // --------------------
    // END ADVANTAGE
    // --------------------
    // READY PROJECTS

    var windowWidthProject = $(window).width();
    if (windowWidthProject <= 425) {

        $(".ready_projects .project__text .btn_hidden").click(function (e) {
            e.preventDefault();
            $(this).next().slideDown();
            $(this).slideUp();
            $(this).siblings('.project_prices').children('.prices__hidden').slideDown().css('display', 'flex');
            $(this).siblings('.btn_hidden2').slideDown();
        });

        $(".ready_projects .project__text .btn_hidden2").click(function (e) {
            e.preventDefault();
            $(this).slideUp();
            $(this).siblings('.btn_hidden').slideDown();
            $(this).siblings('.block_hidden').slideUp();
            $(this).siblings('.project_prices').children('.prices__hidden').slideUp();
            // $(this).siblings('.btn_hidden2').slideUp();
        });
    }
    // else if (windowWidthProject > 425) {
    //     $(".ready_projects .project__text .btn_hidden").css('display', 'none');
    //     $(".ready_projects .project__text .btn_hidden2").css('display', 'none');
    //     $(".ready_projects .project__text .block_hidden").css('display', 'flex');
    //     // $(".ready_projects .project__text .block_hidden").attr("style", "");

    // }
    // END READY PROJECTS
    // --------------------
    // CALC

    // ----------
    // Связь select c блоками с картинкой

    $('.type_siding__element ').click(function (e) {
        $('.type_siding__element').removeClass('active');
        $(this).addClass('active');
        let dataImg = $(this).attr('data-img');
        let dataImg2 = Number(dataImg) + 0;
        // console.log(dataImg);
        $('#select_fasad> option[data-option=' + dataImg2 + ']').prop('selected', true);

    });
    $('.type_siding__element:first-child').click();

    $('#select_fasad').change(function () {
        $(this).find(":selected").each(function () {
            let dataOption = $(this).attr('data-option');
            $('.type_siding__element').removeClass('active');
            $('[data-img=' + dataOption + ']').addClass('active');
        });
    });
    // ----------

    // CALCULATE


    $('.button_calc').click(function (e) {
        e.preventDefault();
        // ------
        // Площадь
        let lengthFasad = $('#length_fasad').val();
        let widthFasad = $('#width_fasad').val();
        let heightFasad = $('#height_fasad').val();
        let selectFasad = $('#select_fasad').val();
        let area = (Number(lengthFasad) + Number(widthFasad)) * 2 * Number(heightFasad);
        $('#area_td').html(area);
        // ------
        // Откосы окон
        let windowSlopers = parseInt(Number(area) / 20);
        $('#window_slopers_td').html(windowSlopers);

        // ------
        // Срок монтажа
        let installationTime = parseInt(Number(area) / 20);
        $('#installation_time_td').html(installationTime);

        // ------
        // Итого
        let total = (Number(selectFasad) + 200) * area;
        $('#total_span').html(total);

        // ------
        // Со скидкой
        let totalDiscount = parseInt(Number(total) / 10 * 9);
        $('#total_discount_span').html(totalDiscount);

        // ------

        // Площадь фасада(ПФ) = (длина + ширина) * 2 * высоту, м2
        // Утепление всегда 50 мм
        // Откосы окон = parseInt(ПФ / 20), шт
        // Срок монтажа = ПФ / 20, дней

        // Цена:
        // Виниловый = 1200, Фасадные панели = 1350, L - Брус = 1380, Блок - Хаус = 1450, Корабельный брус = 1420, Евробрус = 1380
        //     (нужно где - то в data - атрибутах прописать, чтобы менять можно было)

        // Итого = (Цена + 200) * ПФ
        // Со скидкой = parseInt(Итого - 10 %)

    });
    // END CALCULATE

    // ----------

    // END CALC
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
    $('.slide__active1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slides_items1',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slides_items1').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__active1',
        dots: false,
        centerMode: false,
        focusOnSelect: true

    });
    // --------------------
    $('.slide__active2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slides_items2',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slides_items2').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__active2',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // --------------------
    $('.slide__active3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slides_items3',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slides_items3').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__active3',
        dots: false,
        centerMode: false,
        focusOnSelect: true

    });
    // --------------------
    $('.slide__active4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slides_items4',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slides_items4').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__active4',
        dots: false,
        centerMode: false,
        focusOnSelect: true

    });
    // --------------------
    $('.slide__active5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slides_items5',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slides_items5').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__active5',
        dots: false,
        centerMode: false,
        focusOnSelect: true

    });
    // --------------------
    $('.slide__active6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.slides_items6',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slides_items6').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slide__active6',
        dots: false,
        centerMode: false,
        focusOnSelect: true

    });
    // --------------------

    // END READY PROJECTS
    // --------------------
    // CATALOG FASADS
    // --------------------
    var filterMenu = $("[data-filter]");
    var windowWidthCatalog = $(window).width();

    filterMenu.on("click", function (e) {
        e.preventDefault();
        var aNavCat = $(this).data('filter');

        $("[data-content]").each(function () {
            var filterContent = $(this).data('content');
            if (filterContent != aNavCat) {
                // $(this).hide();
                $(this).css({
                    'opacity': '0',
                    // 'position': 'absolute',
                    'z-index': '-100',
                    'overflow': 'hidden',
                    'transition': '0.3s',
                    'height': '0',

                });

            } else {
                // $(this).show();
                if (windowWidthCatalog > 768) {
                    $(this).animate({
                        opacity: 1
                    }).css({
                        'height': 'auto',
                        'transition': '0.3s',
                    });
                } else if (windowWidthCatalog < 769) {
                    $(this).css({
                        'height': '600px',
                    });
                }
                $(this).delay(300).css({
                    'opacity': '1',
                    // 'position': 'relative',
                    'z-index': '10',
                    'overflow': 'visible',
                    // 'height': 'auto',
                });
            }
        });
        // For Menu
        $('.bl_catalog_f__menu > ul >li > a').removeClass('active');
        $(this).addClass('active');
    });
    var btnClicking = $("[data-filter=blockhouse]");
    btnClicking.click();

    // END CATALOG FASADS FILTER

    // --------------------
    var windowWidthCatalog = $(window).width();
    if (windowWidthCatalog <= 768) {

        $('.bl_catalog_f__blockhouse > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
            lazyLoad: 'ondemand',

        });

        // --------------------

        $('.bl_catalog_f__vinil > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------

        $('.bl_catalog_f__akril > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------

        $('.bl_catalog_f__metal > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });


        // ----------

        $('.bl_catalog_f__derevo > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------


        $('.bl_catalog_f__kirpiсh > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------


        $('.bl_catalog_f__kamen > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------


        $('.bl_catalog_f__brevno > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------


        $('.bl_catalog_f__brus > ul').slick({
            centerMode: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            arrows: true,
            dots: true,
            centerPadding: '0px',
        });

        // ----------

    }
    // --------------------







    // END CATALOG FASADS
    // --------------------
    // CERTIFICATES
    $('.bl_certificates__slides > ul').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        arrows: true,
        dots: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 769,
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
    // END CERTIFICATES
    // --------------------
    // REVIEWS
    // --------------------

    $('.bl_reviews__slides > ul').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        dots: true,
    });
    // --------------------

    // END REVIEWS
    // --------------------




    // LOGOS
    // var logosElements = $(".bl_logos__items > ul > li").length;
    // // var windowWidthTariff = $(window).width();
    // if (logosElements > 5) {
    //     $('.bl_logos__items > ul').slick({
    //         arrows: true,
    //         slidesToShow: 5,
    //         dots: false,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         speed: 300,
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         infinite: true,
    //         responsive: [{
    //             breakpoint: 993,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         }, {
    //             breakpoint: 601,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 426,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         }
    //         ]
    //     });
    // }
    // END LOGOS
    // --------------------
    // ========================================

    // --------------------
    // END INNER PAGE 1
    // --------------------
    // ========================================
    // END SLICK SLIDER
    // ========================================
    // -------------------
    // POPUP
    $(".popup__order").click(function (e) {
        e.preventDefault();
        var popup = $('.bl_popup__order');
        popup.css('display', 'flex');
        $('body').addClass('lock');

    });
    $(".btn_close_popup").click(function (e) {
        e.preventDefault();
        var popup = $('.bl_popup__order');
        popup.css('display', 'none');
        $('body').removeClass('lock');
    });
    // END POPUP
    // -------------------
    // PRIVACY POLICY
    $(".btn__policy").click(function (e) {
        e.preventDefault();
        var popup = $('.bl_popup__policy');
        popup.css('display', 'flex');
        $('body').addClass('lock');

    });
    $(".btn_close_popup").click(function (e) {
        e.preventDefault();
        var popup = $('.bl_popup__policy');
        popup.css('display', 'none');
        $('body').removeClass('lock');
    });

    // END PRIVACY POLICY
    // -------------------


    // ========================================
});

var bLazy = new Blazy({
    container: '.bl_catalog_f__vinil > ul' // Default is window
});
var bLazy2 = new Blazy({
    container: '.bl_catalog_f__akril > ul' // Default is window
});
var bLazy3 = new Blazy({
    container: '.bl_catalog_f__metal > ul' // Default is window
});
var bLazy4 = new Blazy({
    container: '.bl_catalog_f__derevo > ul' // Default is window
});
var bLazy5 = new Blazy({
    container: '.bl_catalog_f__kirpiсh > ul' // Default is window
});
var bLazy6 = new Blazy({
    container: '.bl_catalog_f__kamen > ul' // Default is window
});
var bLazy7 = new Blazy({
    container: '.bl_catalog_f__brevno > ul' // Default is window
});
var bLazy8 = new Blazy({
    container: '.bl_catalog_f__brus > ul' // Default is window
});
var bLazy9 = new Blazy({
    container: '.bl_catalog_f__blockhouse > ul' // Default is window
});



$('.bl_catalog_f__vinil > ul').on('afterChange', function (event, slick, direction) {
    bLazy.revalidate();
});
$('.bl_catalog_f__akril > ul').on('afterChange', function (event, slick, direction) {
    bLazy2.revalidate();
});
$('.bl_catalog_f__metal > ul').on('afterChange', function (event, slick, direction) {
    bLazy3.revalidate();
});
$('.bl_catalog_f__derevo > ul').on('afterChange', function (event, slick, direction) {
    bLazy4.revalidate();
});
$('.bl_catalog_f__kirpiсh > ul').on('afterChange', function (event, slick, direction) {
    bLazy5.revalidate();
});
$('.bl_catalog_f__kamen > ul').on('afterChange', function (event, slick, direction) {
    bLazy6.revalidate();
});
$('.bl_catalog_f__brevno > ul').on('afterChange', function (event, slick, direction) {
    bLazy7.revalidate();
});
$('.bl_catalog_f__brus > ul').on('afterChange', function (event, slick, direction) {
    bLazy8.revalidate();
});
$('.bl_catalog_f__blockhouse > ul').on('afterChange', function (event, slick, direction) {
    bLazy9.revalidate();
});
