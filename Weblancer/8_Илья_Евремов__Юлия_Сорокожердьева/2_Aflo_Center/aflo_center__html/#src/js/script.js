

// ========================================
$(window).scroll(function () {
    var top2 = $(document).scrollTop();
    if (top2 > 160) {
        $(".header__fixed").slideDown();
    } else if (top2 < 160) {
        $(".header__fixed").slideUp();
    }
});


// ========================================
// IMG > TO > SVG
// --------------------
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
// --------------------
// END IMG > TO > SVG
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
    // --------------------
    // BURGER DESKTOP
    $('.burger_btn').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.header__menu_desktop').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__menu_desktop .menu_desktop__content a').click(function (e) {
        e.preventDefault();
        $('.burger_btn').removeClass('active');
        $('.header__menu_desktop').removeClass('active');
        $('body').removeClass('lock');
    });
    // END BURGER DESKTOP
    // --------------------
    // --------------------
    // MENU MORE
    $('.header__menu_more > a').click(function (e) {
        e.preventDefault();
        $(this).next().addClass('active');
    });
    $('.header__menu_more > ul > li > a').click(function (e) {
        e.preventDefault();
        $('.header__menu_more > ul ').removeClass('active');
    });

    $('.header__menu_more_2').click(function (e) {
        e.preventDefault();
    });
    // --------------------
    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function (e) {
        var div = $(".header__menu_more > ul ");
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $('.header__menu_more > a').next().removeClass('active');
            // скрываем его
        }
    });
    // END REMOVE CLASS ВНЕ БЛОКА
    // --------------------
    // END MENU MORE
    // --------------------
    // --------------------
    // HEADER MOBILE 
    $('.mobile_burger').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $('.header__mobile').addClass('active');
        $('body').addClass('lock');
    });
    $('.mobile_burger__mobile').click(function (e) {
        e.preventDefault();
        $(this).removeClass('active');
        $('.header__mobile').removeClass('active');
        $('body').removeClass('lock');
    });
    $('.btn_dropdown').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
    // END HEADER MOBILE 
    // --------------------


    // END HEADER
    // ========================================
    // ========================================
    // MAIN
    // ========================================
    // MAP BRANCHES
    // --------------------
    $('.bl_map_branches__menu > ul > li').click(function (e) {
        e.preventDefault();
        $('.bl_map_branches__menu > ul > li').removeClass('active');
        $(this).addClass('active');
    });
    $('.bl_map_branches__menu > ul > li:first').click();
    // --------------------
    // SELECT
    $('select').styler();
    // END SELECT
    // --------------------
    // END MAP BRANCHES
    // --------------------
    // FORM
    // --------------------
    // MENU
    $('.form__menu > ul > li > a').click(function (e) {
        e.preventDefault();
        $('.form__menu > ul > li > a').removeClass('active');
        $(this).addClass('active');
    });
    $('.form__menu > ul > li > a:first').click();
    // END MENU
    // --------------------

    var tabNavBtn = $("[data-filter_tab]");
    tabNavBtn.on("click", function (e) {
        e.preventDefault();
        var tabNavBtnClick = $(this).data('filter_tab');
        $("[data-tab_content]").each(function () {
            var tabContent = $(this).data('tab_content');
            if (tabContent != tabNavBtnClick) {
                $(this).hide(400);
            } else {
                $(this).show(400);
            }
        });
    });
    $(".form__menu > ul > li:first > a").click();


    // END FORM
    // --------------------
    // ========================================
    // END MAIN
    // ========================================
    // ========================================
    // FOOTER
    // --------------------

    // --------------------
    // END  FOOTER
    // ========================================
    // OTHER
    // --------------------
    // PAGINATION
    // $('.pagination-container').pagination({
    //     dataSource: [1, 2, 135],
    //     pageSize: 3,
    //     callback: function (data, pagination) {
    //         // template method of yourself
    //         var html = template(data);
    //         $('.data-container').html(html);
    //     }
    // })

    $(function () {
        if (windowWidth >= 520) {
            $(".main__pagination > ul").pagination({
                items: 100,
                itemsOnPage: 12,
                cssStyle: 'dark-theme',
                displayedPages: 4,
                edges: 1,
            });
        } else if (windowWidth < 520) {
            $(".main__pagination > ul").pagination({
                items: 100,
                itemsOnPage: 12,
                cssStyle: 'dark-theme',
                displayedPages: 1,
                edges: 1,
            });
        }
    });
    // END PAGINATION
    // --------------------
    // END OTHER
    // ========================================
    // ========================================
    // PAGE DOCTORS
    $('.green_menu > ul > li > a').click(function (e) {
        // e.preventDefault();
        $(this).closest('ul').find('a').removeClass('active');
        $(this).addClass('active');
    });
    $('.green_menu ').find('li:first a').click();
    // $('.green_menu').each(function () {
    // });
    // END PAGE DOCTORS
    // ========================================
    // ========================================
    // PAGE 404

    $(function () {
        if (windowWidth <= 700) {
            $('.bl_404_sitemap__menu > ul > li > h4').click(function (e) {
                e.preventDefault();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    $(this).next().slideUp();
                } else {
                    $(".bl_404_sitemap__menu > ul > li > h4").removeClass("active");
                    $(this).addClass("active");

                    $(".bl_404_sitemap__menu > ul > li > h4").next().slideUp();
                    $(this).next().slideDown();
                }
            });

        }
    });

    // END PAGE 404
    // ========================================
    // ========================================
    // PAGE REVIEWS
    // Раскрываем и обрезаем текст при клике

    $('.btn_reviews').click(function (e) {
        e.preventDefault();
        $(this).prev().toggleClass('active');
        $(this).toggleClass('active');
        var bl_reviews__p = $(this).prev();
        var height_block = $(this).prev().children().height();
        if (bl_reviews__p.hasClass("active")) {
            bl_reviews__p.css('max-height', height_block);
        } else {
            if (windowWidth > 425) {
                bl_reviews__p.css('max-height', '54px');
            } else {
                bl_reviews__p.css('max-height', '85px');
            }
        }
        if ($(this).hasClass('active')) {
            $(this).text('Свернуть');

        } else {
            $(this).text('Подробнее');
        }
    });

    // END PAGE REVIEWS
    // ========================================
    // ========================================
    // SERVICE

    var tabNavBtn_service = $("[data-filter_tab]");
    tabNavBtn_service.on("click", function (e) {
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
    $(".service__menu > ul > li:first > a").click();

    // END SERVICE
    // ========================================
    // ========================================
    // SERVICE IN
    // --------------------
    $(".btn_service").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).prev().slideUp();
            $(this).removeClass("active");
            $('.sign_up ul li').removeClass('active');
            if (windowWidth > 600) {
                $(this).text('Подробнее');
            }
        } else {
            $(".sign_up__hidden").slideUp();
            $(".btn_service").removeClass("active");
            $(this).prev().slideDown();
            $(this).addClass('active');
            $('.sign_up ul li').removeClass('active');
            $(this).closest('li').addClass('active');

            if (windowWidth > 600) {
                $(this).text('Свернуть');
            }
        }
    });
    // --------------------
    // MAP
    $(".btn_serv").click(function (e) {
        e.preventDefault();
        $(".services__map").slideDown();
        $('.btn_serv').removeClass('active');
        $(this).addClass('active');
        $('.two_contacts__item').removeClass('active');
        $(this).closest('.two_contacts__item').addClass('active');
    })
    $(".btn_close_serv").click(function (e) {
        e.preventDefault();
        $(".services__map").slideUp();
        $('.btn_serv').removeClass('active');
        $('.two_contacts__item').removeClass('active');
    })

    // END MAP
    // --------------------
    // END SERVICE IN
    // ========================================
    // ========================================
    // AFFILIATES
    // --------------------
    $(".btn_aff_main_open").click(function (e) {
        e.preventDefault();
        $(".main_affiliates_map").slideDown();
        $(this).addClass('active');
    });
    $(".btn_aff_main_close").click(function (e) {
        e.preventDefault();
        $(".main_affiliates_map").slideUp();
        $('.btn_aff_main_open').removeClass('active');
    });
    // --------------------
    $(".btn_on_map").click(function (e) {
        e.preventDefault();
        $(".services__map").slideUp();
        $(this).closest('.address').next('.services__map').slideDown();
        $('.btn_on_map').removeClass('active');
        $(this).addClass('active');
        $('.new_sign_up ul li .services__map').removeClass('active');
        $(this).closest('.address').next('.services__map').addClass('active');
    });

    $(".btn_close_aff").click(function (e) {
        e.preventDefault();
        $(".services__map").slideUp();
        $('.btn_on_map').removeClass('active');
    });
    // --------------------
    // END AFFILIATES
    // ========================================
    // ========================================
    // PA
    // --------------------
    // PA
    var tabNavBtn_pa = $("[data-filter_tab_pa]");
    tabNavBtn_pa.on("click", function (e) {
        e.preventDefault();
        var tabNavBtnClick_pa = $(this).data('filter_tab_pa');
        $("[data-tab_content_pa]").each(function () {
            var tabContent_pa = $(this).data('tab_content_pa');
            if (tabContent_pa != tabNavBtnClick_pa) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
    $(".bl_pa .bl_pa_menu > ul > li:first > a").click();
    // END PA
    // --------------------

    // $("#datepicker").datepicker();
    // --------------------
    $(".btn_patient_more").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).closest('.bottom_btns').prev().slideUp();
            $(this).text('Подробнее');
            $('.patient_items ul li').removeClass('active');
            $(this).closest('.bottom_btns').find('a').addClass('opac_0');
            $(this).closest('.bottom_btns').find('a:first-child').removeClass('opac_0');
        } else {
            $(this).addClass('active');
            $(this).closest('.bottom_btns').prev().slideDown();
            $(this).closest('li').addClass('active');
            $(this).text('Свернуть');
            $(this).closest('.bottom_btns').find('a').removeClass('opac_0');
        }
    });
    // --------------------
    // BLOCK DOCUMENTS
    $(".pdf_select").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text('Выбрано');
        } else {
            $(this).text('Выбрать');

        }
        $(this).closest('li').toggleClass('active');
        $(".bl_documents__pdfs ul li").each(function () {
            if ($(".bl_documents__pdfs ul li").hasClass('active')) {
                $(".bl_documents .bottom__btns a").removeClass('disabled');
                // $(".bl_documents .bottom__btns a").addClass('active');

            } else {
                $(".bl_documents .bottom__btns a").addClass('disabled');
                // $(".bl_documents .bottom__btns a").removeClass('active');
            }
        })
    });
    // -----
    // DOWNLOAD
    // $(".btn_dwonload_all_pdf").click(function (e) {
    //     e.preventDefault();
    //     if ($(this).hasClass('active')) {

    //     }
    // })
    // END DOWNLOAD
    // -----
    // END BLOCK DOCUMENTS
    // --------------------
    // END PA
    // ========================================
    // ========================================
    // E APPOINTMENT
    // --------------------
    // ASIDE
    $(".bl_e_appointment__spec > ul > li").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_branches, .bl_e_a_doctors").slideDown();
    });
    $(".bl_e_a_doctors__item").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_timetable").slideDown();
    });
    $(".timetable__times ul > li").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_timetable__bottom").slideDown();
    });
    // --------------------
    $(".bl_e_appointment__doctors > ul > li").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_branches, .bl_e_a_timetable").slideDown();
    });


    // --------------------
    $(".bl_e_appointment__filter_content  ul  li a").click(function (e) {
        e.preventDefault();
        $(".bl_e_appointment__filter_content  ul  li a").removeClass('active');
        $(this).addClass("active");
    });
    // --------------------

    // END ASIDE
    // --------------------
    $(".btn_more_doctors").click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(".bl_e_appointment__doctors ul li").slideDown();
    });
    // --------------------
    var tabNavBtn_e = $("[data-filter_tab_e]");
    tabNavBtn_e.on("click", function (e) {
        e.preventDefault();
        var tabNavBtnClick_e = $(this).data('filter_tab_e');
        $("[data-tab_content_e]").each(function () {
            var tabContent_e = $(this).data('tab_content_e');
            if (tabContent_e != tabNavBtnClick_e) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    });
    $(".bl_e_appointment__bottom > ul > li:first a").click();
    // --------------------
    $(".bl_e_a_branches__menu ul li").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_branches__menu ul li").removeClass();
        $(this).addClass('active');
    });
    $(".bl_e_a_branches__menu ul li:first").click();
    // --------------------
    // MAP
    $(".btn_e_a_branches__map").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_branches__maps").slideDown();
        $(this).addClass('active');
    })
    $(".btn_close_e_a_branches__map").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_branches__maps").slideUp();
        $('.btn_e_a_branches__map').removeClass('active');
    });
    // END MAP
    // --------------------
    // CLICK DOCTORS
    $(".bl_e_a_doctors__swiper .swiper-slide").click(function (e) {
        e.preventDefault();
        $(".bl_e_a_doctors__swiper .swiper-slide").removeClass('active');
        $(this).addClass('active');
    });
    // END CLICK DOCTORS
    // --------------------
    // TIMETABLE
    $(".timetable__times ul li").click(function (e) {
        e.preventDefault();
        $(".timetable__times ul li").removeClass('active');
        $(this).addClass('active');
    });
    // --------------------
    // END TIMETABLE
    // --------------------
    // END E APPOINTMENT
    // ========================================
    // ========================================
    // POPUPS
    // --------------------
    // Форма Вызвать врача
    $(".btn_call_doctor").click(function (e) {
        e.preventDefault();
        $('.main_popup').addClass('main_call_doctor');
        $('body').addClass('lock');
    });
    // --------------------
    // Форма Получить кончультацию
    $(".btn_get_consultation").click(function (e) {
        e.preventDefault();
        $('.main_popup').addClass('main_get_consultation');
        $('body').addClass('lock');
    });
    // --------------------
    // Форма Корпоротивная заявка
    $(".btn_corporate_application").click(function (e) {
        e.preventDefault();
        $('.main_popup').addClass('main_corporate_application');
        $('body').addClass('lock');
    });
    // --------------------
    // Кнопка закрытия форм
    $(".btn_close_popup, .block_close_popup").click(function (e) {
        e.preventDefault();
        $('.main_popup').removeClass('main_call_doctor');
        $('.main_popup').removeClass('main_get_consultation');
        $('.main_popup').removeClass('main_corporate_application');
        $('.main_popup').removeClass('main_thanks');
        $('body').removeClass('lock');
    });
    // --------------------
    // END POPUPS
    // ========================================
    // ========================================
    // CALENDAR
    $("#calendar").simpleCalendar({
        displayEvent: false,
        events: [
            {
                startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),
                summary: 'Visit of the Eiffel Tower'
            },
            // generate new event for yesterday at noon
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),
                summary: 'Restaurant'
            },
            // generate new event for the last two days
            {
                startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),
                endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),
                summary: 'Visit of the Louvre'
            }
        ],
        disableEventDetails: false,
        disableEmptyDetails: true,
        displayYear: true,
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',],
        // called after init
        onInit: function (calendar) { },
        onMonthChange: function (month, year) { },
        onDateSelect: function (date, events) { },

    });
    // let $calendar = container.data('plugin_simpleCalendar')
    // var newEvent = {
    //     startDate: startDate,
    //     endDate: endDate,
    //     summary: 'New event',
    // }
    // $calendar.addEvent(newEvent);

    // let $calendar2 = container.data('plugin_simpleCalendar2');
    // var events = [{
    //     startDate: startDate,
    //     endDate: endDate,
    //     summary: 'New event 1'
    // },
    // {
    //     startDate: startDate,
    //     endDate: endDate,
    //     summary: 'New event 2'
    // }]
    // $calendar2.setEvents(events);

    // ----------------------
    // Нерабочие дни
    $(".calendar > table > tbody > tr").each(function () {
        $(this).find('td:eq(5) div').addClass('non_working');
        $(this).find('td:eq(6) div').addClass('non_working');
    });
    // ----------------------
    // Пример занятых дней 
    $('.calendar > table > tbody > tr > td:eq(2) div').addClass('busy');
    $('.calendar > table > tbody > tr:eq(2) > td:eq(4) div').addClass('busy');
    $('.calendar > table > tbody > tr:eq(3) > td:eq(1) div').addClass('busy');
    // ----------------------
    $(".calendar > table > tbody > tr > td > div").click(function () {
        if ($(this).hasClass('busy')) {
            $(".calendar > table > tbody > tr > td > div").removeClass('active');
        } else {
            $(".calendar > table > tbody > tr > td > div").removeClass('active');
            $(this).addClass('active');
        }
    });
    // ----------------------

    // END CALENDAR
    // ========================================
    // ========================================






});