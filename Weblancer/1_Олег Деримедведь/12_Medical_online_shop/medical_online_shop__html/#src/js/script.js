$(document).ready(function() {
    // ========================================
    // HEADER 
    // --------------------
    // BURGER
    $('.burger').click(function(e) {
        e.preventDefault();
        $('.header__burger').toggleClass('active');
    });
    // END BURGER
    // --------------------
    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var div = $(".header__burger");
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header__burger').removeClass('active'); // скрываем его
        }
    });
    //END REMOVE CLASS ВНЕ БЛОКА
    // --------------------
    // BLOCK SEARCH DESKTOP
    $('.header__loupe > a').click(function(e) {
        e.preventDefault();
        $('.header__loupe').addClass('active');
    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var search = $(".header__loupe > form");
        if (!search.is(e.target) // если клик был не по нашему блоку
            &&
            search.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header__loupe').removeClass('active'); // скрываем его
        }
    });
    //END REMOVE CLASS ВНЕ БЛОКА
    // END  BLOCK SEARCH DESKTOP
    // --------------------
    // Выбор города
    $('.city_choice, .city_choice_mobile').click(function(e) {
        e.preventDefault();
        $('.cities').toggleClass('active');
    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var city = $(".cities");
        if (!city.is(e.target)) { // и не по его дочерним элементам
            $('.cities').removeClass('active');
            // скрываем его
        }
    });
    //END REMOVE CLASS ВНЕ БЛОКА
    $('.cities > ul > li > a').on('click', function() {
        var cityText = $(this).text();
        var city = $('.header__city > div > p > b');
        var cityLiAddress = $(this).next().text();
        console.log(cityLiAddress);
        var cityAddress = $('.city_address');
        city.html(cityText);
        cityAddress.html(cityLiAddress);

        $('.cities > ul > li > a').each(function() {
            $('.cities > ul > li > a').removeClass('active');
        });
        $(this).addClass('active');

    });

    // Енд Выбор города
    // --------------------


    // END HEADER
    // ========================================
    // MAIN
    // --------------------
    // BLOCK TABS
    $('.bl_tabs1 .tabs__menu > ul > li > a').click(function(e) {
        e.preventDefault();
        $('.bl_tabs1 .tabs__menu > ul > li > a').removeClass('tab_btn_active');
        $('.bl_tabs1 .tabs__contents > ul > li > .tabs__content').removeClass('tab_active');

        $(this).addClass('tab_btn_active')
        $($(this).attr('href')).addClass('tab_active');
    });
    $('.bl_tabs1 .tabs__menu > ul > li > a:first').click();
    // --------------------

    $('.bl_tabs__natco .tabs__menu > ul > li > a').click(function(e) {
        e.preventDefault();
        $('.bl_tabs__natco .tabs__menu > ul > li > a').removeClass('tab_btn_active');
        $('.bl_tabs__natco .tabs__contents > ul > li > .tabs__content').removeClass('tab_active');

        $(this).addClass('tab_btn_active')
        $($(this).attr('href')).addClass('tab_active');
    });
    $('.bl_tabs__natco .tabs__menu > ul > li > a:first').click();
    // --------------------

    $('.bl_tabs__brands .tabs__menu > ul > li > a').click(function(e) {
        e.preventDefault();
        $('.bl_tabs__brands .tabs__menu > ul > li > a').removeClass('tab_btn_active');
        $('.bl_tabs__brands .tabs__contents > ul > li > .tabs__content').removeClass('tab_active2');

        $(this).addClass('tab_btn_active')
        $($(this).attr('href')).addClass('tab_active2');
    });
    $('.bl_tabs__brands .tabs__menu > ul > li > a:first').click();
    // --------------------
    // --------------------
    // Кнопка подробнее
    $('.tabs__content__text > a').click(function(e) {
        // e.preventDefault();
        $(this).hide();
        $(this).prev().css({ 'max-height': 'fit-content', 'overflow': 'auto' });
    });
    // Енд Кнопка подробнее
    // --------------------
    // END BLOCK TABS
    // --------------------
    // ========================================
    // --------------------
    // REVIEWS
    // Кнопка подробнее
    $('.bl_reviews__item > a').click(function(e) {
        // e.preventDefault();
        $(this).hide();
        $(this).prev().css({ 'max-height': 'fit-content', 'overflow': 'auto', 'margin-bottom': '0' });
    });
    // Енд Кнопка подробнее
    // END REVIEWS
    // --------------------
    // ========================================

    // ASIDE BURGER
    // --------------------
    $('.aside__burger').click(function(e) {
        e.preventDefault();
        $('.aside__burger').toggleClass('active');
        $('.aside__menu').slideToggle();
    });
    // --------------------
    // END ASIDE BURGER
    // ========================================
    // BLOCK POPUP
    // --------------------
    $('.btn_form').click(function(e) {
        e.preventDefault();
        $('.bl_popup1').css('display', 'flex');
        $('html, body').addClass('lock_popup');
    });

    $('.btn_form2').click(function(e) {
        e.preventDefault();
        $('.bl_popup2').css('display', 'flex');
        $('html, body').addClass('lock_popup');
    });

    $('.btn_form__reviews').click(function(e) {
        e.preventDefault();
        $('.bl_popup__reviews').css('display', 'flex');
        $('html, body').addClass('lock_popup');
    });
    // --------------------
    // Btn close
    $('.bl_popup__btn').click(function(e) {
        e.preventDefault();
        $('.bl_popup1, .bl_popup2, .bl_popup__reviews').css('display', 'none');
        $('html, body').removeClass('lock_popup');
    });
    // End Btn close
    // --------------------
    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var popup = $(".bl_popup__form, .bl_popup__success ");
        if (!popup.is(e.target) // если клик был не по нашему блоку
            &&
            popup.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.bl_popup1, .bl_popup2, .bl_popup__reviews').css('display', 'none');
            $('html, body').removeClass('lock_popup');
            // скрываем его
        }
    });
    // END REMOVE CLASS ВНЕ БЛОКА
    // --------------------
    // END BLOCK POPUP
    // ========================================
    // ОБРЕЗКА ТЕКСТА 

    // $(".tabs__content__text .obrezka").each(function() {
    //     var size = 100;
    //     var block1 = $('.tabs__content__text');
    //     var block2 = block1.children('p').text().length;
    //     var newsContent = block2.length;
    //     console.log(newsContent);
    // var newsText = newsContent.text();
    // var newsText2 = newsContent.text();



    // if (newsText.length > size) {
    //     $(this).text(newsText.slice(0, size) + " ...");
    // }
    // $(this).next().click(function() {
    //     $(this).prev().text(newsText.slice(0, newsTexts))
    // })
    // });
    // END ОБРЕЗКА ТЕКСТА 
    // ========================================
    // POLEZNOE
    // --------------------
    // Menu

    $('.aside__menu > ul > li').click(function() {
        $('.aside__menu > ul > li').each(function() {
            $('.aside__menu > ul > li').removeClass('active');
        });
        $(this).addClass('active');
    });

    // End Menu    
    // --------------------
    // Sorting
    var filter = $("[data-filter]");
    filter.on("click", function(e) {
        // e.preventDefault();
        var aNavCat = $(this).data('filter');
        $("[data-tovary]").each(function() {
            var videoContents = $(this).data('tovary');
            if (videoContents != aNavCat) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
    // End Sorting
    // --------------------
    // END POLEZNOE
    // ========================================
    // QUIZ
    // --------------------

    $('.bl_checkbox__step > form > label > input[name="radio1"]').on('change', function() {
        $('.bl_checkbox__step > form > label > input[name="radio1"]').not(this).prop('checked', false);
    });

    $('.bl_checkbox__step > form > label > input[name="radio2"]').on('change', function() {
        $('.bl_checkbox__step > form > label > input[name="radio2"]').not(this).prop('checked', false);
    });

    $('.bl_checkbox__step > form > label > input[name="radio3"]').on('change', function() {
        $('.bl_checkbox__step > form > label > input[name="radio3"]').not(this).prop('checked', false);
    });

    $('.bl_checkbox__step > form > label > input[name="radio4"]').on('change', function() {
        $('.bl_checkbox__step > form > label > input[name="radio4"]').not(this).prop('checked', false);
    });

    $('.bl_checkbox__step > form > label > input[name="radio5"]').on('change', function() {
        $('.bl_checkbox__step > form > label > input[name="radio5"]').not(this).prop('checked', false);
    });

    // --------------------

    $('.btn_quiz').click(function() {
        $('.bl_checkbox__left > ul > .active:last').each(function() {
            $('.bl_checkbox__left > ul > .active').prev().css('position', 'absolute');
            $(this).append().css({
                'position': 'absolute',
                'top': '-200%'
            });
            $('.bl_checkbox__left > ul > .active').next().addClass('active');
        });

        $('.bl_checkbox__left > ul > li').each(function() {
            if ($('.bl_checkbox__left > ul > li').last().hasClass('active')) {
                $('.btn_quiz').hide();
            }
        });
        $('.bl_checkbox__left > ul > li').each(function() {
            var fifty = 50;
            var thisActive = $('.bl_checkbox__left > ul > .active').length;
            var allSum = fifty * thisActive - 50;
            console.log(allSum);
            $('.bl_checkbox__right').find('.sum').html(allSum);
        });

        // $('.bl_checkbox__left > ul > li > .bl_checkbox__step > form').each(function() {

        //     if ($('.bl_checkbox__left > ul > li > .bl_checkbox__step > form > label > input').prop('checked', true)) {
        //         $('.bl_checkbox__left > button').removeAttr('disabled');
        //         alert('sdvdfvjh h h hj');

        //     }

        //     if ($('.bl_checkbox__left > ul > li').last().hasClass('active')) {
        //         $('.btn_quiz').hide();
        //     }
        // });

    });

    // --------------------
    // END QUIZ
    // ========================================
    // END MAIN
    // ========================================
    // FOOTER
    // --------------------
    // MAIN ACCORDEON
    // --------------------
    // ACCORDEON 1
    $('.bl_accordeon1 .bl_accordeon__content > ul > li > h4').click(function() {
        //    e.preventDefault();
        var btnClick = $(this).parent();
        var textHidden = $(this).next();

        if (btnClick.hasClass('active_accordeon')) {
            btnClick.removeClass('active_accordeon');
            textHidden.slideUp();
        } else {
            $('bl_accordeon1 .bl_accordeon__content > ul > li').removeClass('active_accordeon');
            $('bl_accordeon1 .bl_accordeon__content > ul > li > div').slideUp();
            btnClick.addClass('active_accordeon');
            textHidden.slideDown(300);
        }
    });
    $('.bl_accordeon1 .bl_accordeon__content > ul > li:first > h4').click();
    // END ACCORDEON 1
    // --------------------
    // ACCORDEON 2
    $('.bl_accordeon2 .bl_accordeon__content > ul > li > h4').click(function() {
        //    e.preventDefault();
        var btnClick = $(this).parent();
        var textHidden = $(this).next();

        if (btnClick.hasClass('active_accordeon')) {
            btnClick.removeClass('active_accordeon');
            textHidden.slideUp();
        } else {
            $('bl_accordeon2 .bl_accordeon__content > ul > li').removeClass('active_accordeon');
            $('bl_accordeon2 .bl_accordeon__content > ul > li > div').slideUp();
            btnClick.addClass('active_accordeon');
            textHidden.slideDown(300);
        }
    });
    $('.bl_accordeon2 .bl_accordeon__content > ul > li:first > h4').click();
    // END  ACCORDEON 2
    // --------------------
    // ACCORDEON FOOTER
    var windowWidth = $(window).width();
    if (windowWidth <= 768) {
        $('.footer__right__top > ul > li > h5').click(function() {
            //    e.preventDefault();
            var btnClick = $(this).parent();
            var textHidden = $(this).next();
            if (btnClick.hasClass('active_accordeon__footer')) {
                btnClick.removeClass('active_accordeon__footer');
                textHidden.slideUp();
            } else {
                $('.footer__right__top > ul > li').removeClass('active_accordeon__footer');
                $('.footer__right__top > ul > li > ul').slideUp();
                btnClick.toggleClass('active_accordeon__footer');
                textHidden.slideToggle();
            }
        });
        $('.footer__right__top > ul > li:first > h5').click();

    }
    // END  ACCORDEON FOOTER
    // --------------------
    // END MAIN ACCORDEON
    // --------------------
    // Выбор города для подвала
    $('.footer_btn_city').click(function(e) {
        e.preventDefault();
        $('.footer__cities').toggleClass('active');
    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var city2 = $(".footer__cities");
        if (!city2.is(e.target)) { // и не по его дочерним элементам
            $('.footer__cities').removeClass('active');
            // скрываем его
        }
    });
    //END REMOVE CLASS ВНЕ БЛОКА
    $('.footer__cities > ul > li > a').on('click', function(e) {
        e.preventDefault();
        var cityText2 = $(this).text();
        var city2 = $('.footer_btn_city').find('span');
        var cityLiAddress2 = $(this).next().text();
        console.log(cityLiAddress2);
        var cityAddress2 = $('.footer_btn_city').next();
        city2.html(cityText2);
        cityAddress2.html(cityLiAddress2);

        $('.footer__cities > ul > li > a').each(function() {
            $('.footer__cities > ul > li > a').removeClass('active');
        });
        $(this).addClass('active');

    });

    // Енд Выбор города для подвала
    // --------------------
    // END  FOOTER
    // ========================================
    // SLICK SLIDER
    // --------------------
    // BLOCK BUY
    var windowWidthTariff = $(window).width();
    if (windowWidthTariff <= 768) {
        $('.bl_buy__items > ul').slick({
            arrows: true,
            slidesToShow: 2,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 551,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
    }
    // END BLOCK BUY
    // --------------------
    // BLOCK CERTIFICATE
    var quantityElements = $(".bl_certificate__items > ul > li").length;
    if (quantityElements > 4) {
        $('.bl_certificate__items > ul').slick({
            arrows: true,
            slidesToShow: 4,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    // END BLOCK CERTIFICATE
    // --------------------
    // BLOCK REVIEWS 
    var reviewsElements = $(".bl_reviews__items > ul > li").length;
    if (reviewsElements > 3) {
        $('.bl_reviews__items > ul').slick({
            arrows: true,
            slidesToShow: 3,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    var reviewsElements2 = $(".bl_reviews__material > ul > li").length;
    if (reviewsElements2 > 3) {
        $('.bl_reviews__material > ul').slick({
            arrows: true,
            slidesToShow: 2,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    // END BLOCK REVIEWS 
    // --------------------
    // BLOCK NEWS
    var reviewsElements = $(".bl_news__items > ul > li").length;
    if (reviewsElements > 3) {
        $('.bl_news__items > ul').slick({
            arrows: true,
            slidesToShow: 3,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    var reviewsElements3 = $(".bl_news__items__material > ul > li").length;
    if (reviewsElements3 > 3) {
        $('.bl_news__items__material > ul').slick({
            arrows: true,
            slidesToShow: 2,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: 0,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    // END BLOCK NEWS
    // --------------------

    // END SLICK SLIDER
    // ========================================



});