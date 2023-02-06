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
    // ========================================
    // ========================================
    // PRELOADER

    var counter1 = 0;
    var c = 0;
    var i = setInterval(function() {
        $(".preloader__percent > span").html(c);
        counter1++;
        c++;
        if (counter1 == 101 && c == 101) {
            clearInterval(i);

            $(".main_preloader").delay(1000).fadeOut(500);
        }
    });

    var counter2 = 0;
    var c2 = 0;
    var i2 = setInterval(function() {
        $(".main_preloader2 > .preloader__percent > span").html(c2);
        counter2++;
        c2++;
        if (counter2 == 101) {
            clearInterval(i2);

            // $('.main_preloader').delay(1000).fadeOut(500);
        }
    });

    // $(function() {
    //     $('.main_preloader').fadeIn();
    //     $(window).load(function() {
    //         // $('.main_preloader').delay(0).fadeOut(500);
    //         var counter1 = 0;
    //         var c = 0;
    //         var i = setInterval(function() {
    //             $(".preloader__percent > span").html(c);
    //             counter1++;
    //             c++;
    //             if (counter1 == 101) {
    //                 clearInterval(i);
    //                 $('.main_preloader').delay().fadeOut(500);
    //             }
    //         })
    //         // $({ numberValue: 0 }).animate({ numberValue: 100 }, {
    //         //     easing: "linear",
    //         //     step: function(val) {
    //         //         $(".preloader__percent > span").html(Math.ceil(val));
    //         //     }
    //         // });

    //     });
    // });

    // END PRELOADER
    // ========================================
    // ========================================

    // HEADER MENU

    $(".header__burger").click(function(e) {
        e.preventDefault();

        $(".header__burger,.header__body_media").addClass("active");
        $("html, body").addClass("lock");
    });

    $(".header__burger_close").click(function(e) {
        e.preventDefault();

        $(".header__burger,.header__body_media").removeClass("active");
        $("html, body").removeClass("lock");
    });

    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var div = $(".header__body_media");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".header__burger, .header__body_media").removeClass("active");
        }
    });
    //END REMOVE CLASS ВНЕ БЛОКА

    //END HEADER MENU
    // ========================================
    // ========================================
    // HEADER VIDEO

    // $('.header__play_btn').click(function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('active');

    //     $('.bl_header').css('background-image', 'none');

    //     $('.header__play_btn').each(function() {
    //         if ($('.header__play_btn').hasClass('active')) {
    //             $('.bl_header video').get(0).play();
    //             $('.header__play_btn> .hover_a> img').hide();
    //             $('.header__play_btn> .hover_a').append('<img src="img/icons/pause_header.svg" alt="play">');

    //         } else {
    //             $('.bl_header video').get(0).pause();
    //             $('.header__play_btn> .hover_a> img').hide();
    //             $('.header__play_btn> .hover_a').append('<img src="img/icons/play_header.svg" alt="play">');
    //         }
    //     });
    // });

    //END HEADER VIDEO

    // ========================================
    // ========================================
    // REVIEWS VIDEO

    $(".bl_reviews video").each(function() {
        $(".bl_reviews video").get(0).pause();
        $(".video__item, .minivideo__item").click(function(e) {
            e.preventDefault();
            $(this).find(".video__img").hide();
            $(this).find("video").get(0).play();
            $(this).find("video").css({ "z-index": "20", position: "relative" });
        });
    });

    //END REVIEWS VIDEO
    // ========================================
    // ========================================

    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_other_solutions

    $(".other_solutions__item p").each(function() {
        var size = 120;
        var newsContent = $(this);
        var newsText = newsContent.text();

        if (newsText.length > size) {
            $(this).text(newsText.slice(0, size) + " ...");
        }
    });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_other_solutions
    // -----------------------------------

    var heightBlock = $(".advantages__item").height();

    if (heightBlock < 80) {
        $(".advantages__item").css("justify-content", "center");
    }

    //End BLOCK advantages
    // -----------------------------------

    // ========================================
    // ========================================

    // POPUP FORM

    // $('.#').click(function(e) {
    //     e.preventDefault();

    //     $('.bl_popup_contacts').css("display", "flex").addClass("lock");
    //     $('body').addClass('lock');

    // })

    $(".popup_btn_close").click(function(e) {
        e.preventDefault();

        $(".bl_popup_contacts, .bl_popup_form")
            .css("display", "none")
            .removeClass("lock");
        $("html, body").removeClass("lock");
    });

    // Закрываем по клику вне попапа
    $(".bl_popup_contacts").mouseup(function(e) {
        var div = $(".popup_body");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(".bl_popup_contacts").css("display", "none").removeClass("lock");
            $("html, body").removeClass("lock");
        }
    });

    //Конец Закрываем по клику вне попапа

    // Всплывающее окно формы

    $("#quick_calc").click(function(evant) {
        evant.preventDefault();

        $(".bl_popup_form").css("display", "flex");
        $("html, body").addClass("lock");
    });
    $(".bl_popup_form").mouseup(function(e) {
        var div2 = $(".popup_body");
        if (!div2.is(e.target) && div2.has(e.target).length === 0) {
            $(".bl_popup_form").css("display", "none").removeClass("lock");
            $("html, body").removeClass("lock");
        }
    });

    //Конец Всплывающее окно формы

    // END POPUP  FORM
    // ========================================
    // ========================================
    // БЛОК ДЛЯ УВЕЛИЧЕНИЯ ЧИСЕЛ

    // var target = $('.dashboard__items, .bl_our_development');
    // var targetPos = target.offset().top;
    // var winHeight = $(window).height();
    // var scrollToElem = targetPos - winHeight;
    // $(window).scroll(function() {
    //     var winScrollTop = $(this).scrollTop();
    //     if (winScrollTop > scrollToElem) {

    //         $('.counter-2').each(function() {
    //             var $this = $(this),
    //                 countTo = $this.attr('data-count');
    //             $({ countNum: $this.text() }).animate({
    //                 countNum: countTo
    //             }, {
    //                 duration: 5000,
    //                 easing: 'linear',
    //                 step: function() {
    //                     $this.text(Math.floor(this.countNum));
    //                 },
    //                 complete: function() {
    //                     $this.text(this.countNum);
    //                     //alert('finished');
    //                 }
    //             });
    //         });

    //     }
    // });

    // var target = $('.dashboard__items');
    // var targetPos = target.offset().top;
    // var winHeight = $(window).height();
    // var scrollToElem = targetPos - winHeight;
    // $(window).scroll(function() {
    //     var winScrollTop = $(this).scrollTop();
    //     if (winScrollTop > scrollToElem) {

    //         $({ numberValue: 0 }).animate({ numberValue: 100 }, {
    //             duration: 5000,
    //             easing: "linear",
    //             step: function(val) {
    //                 $(".number100 span").html(Math.ceil(val));
    //             }
    //         });

    //         $({ numberValue: 0 }).animate({ numberValue: 1200 }, {
    //             duration: 5000,
    //             easing: "linear",

    //             step: function(val) {
    //                 $(".number1200 span").html(Math.ceil(val));
    //             }
    //         });

    //         $({ numberValue: 0 }).animate({ numberValue: 34 }, {
    //             duration: 5000,
    //             easing: "linear",
    //             step: function(val) {
    //                 $(".number34k>span>b").html(Math.ceil(val));
    //             }
    //         });

    //         $({ numberValue: 0 }).animate({ numberValue: 3100 }, {
    //             duration: 5000,
    //             easing: "linear",
    //             step: function(val) {
    //                 $(".number3100 span").html(Math.ceil(val));
    //             }
    //         });
    //     }
    // });

    // $(function() {

    //     var target_block1 = $(".dashboard__items"); // Ищем блок
    //     var blockStatus1 = true;
    //     $(window).scroll(function() {
    //         var scrollEvent1 = ($(window).scrollTop() > (target_block1.position().top - $(window).height()));

    //         if (scrollEvent1 && blockStatus1) {

    //             blockStatus1 = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

    //             $({ numberValue: 0 }).animate({ numberValue: 100 }, {
    //                 duration: 5000,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".number100 span").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).animate({ numberValue: 1200 }, {
    //                 duration: 5000,
    //                 easing: "linear",

    //                 step: function(val) {
    //                     $(".number1200 span").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).animate({ numberValue: 34 }, {
    //                 duration: 5000,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".number34k>span>b").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).animate({ numberValue: 3100 }, {
    //                 duration: 5000,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".number3100 span").html(Math.ceil(val));
    //                 }
    //             });
    //         }
    //     });
    // });
    //КОНЕЦ БЛОК ДЛЯ УВЕЛИЧЕНИЯ ЧИСЕЛ
    // ========================================
    // ========================================

    // ДОБАВЛЕНИЕ БУКВЫ К


    $(".dashboard__k").each(function() {
        if ($(this).text().length > 4) {
            $(this).hide();
        }
    });



    //КОНЕЦ ДОБАВЛЕНИЕ БУКВЫ К

    // ========================================
    // ========================================

    //DRY
    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 18 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree18 b").html(Math.ceil(val));
            },
        });
    //END DRY

    //FRESH
    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 2 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree2 b").html(Math.ceil(val));
            },
        });

    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 4 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree4 b").html(Math.ceil(val));
            },
        });
    //END FRESH

    //ULTRA FRESH
    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 2 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree2_ultra b").html(Math.ceil(val));
            },
        });

    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 16 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree16 b").html(Math.ceil(val));
            },
        });
    //END ULTRA FRESH
    //FROZEN
    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 18 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree-18 b").html(Math.ceil(val));
            },
        });

    $({ numberValue: 0 })
        .delay(3000)
        .animate({ numberValue: 25 }, {
            duration: 2000,
            easing: "linear",
            step: function(val) {
                $(".degree-25 b").html(Math.ceil(val));
            },
        });
    //END FROZEN

    // ========================================
    // ========================================
    // OUR DEVELOPMENT

    // var target = $('.bl_our_development');
    // var targetPos = target.offset().top;
    // var winHeight = $(window).height();
    // var scrollToElem = targetPos - winHeight;
    // $(window).scroll(function() {
    //     var winScrollTop = $(this).scrollTop();
    //     if (winScrollTop > scrollToElem) {

    //     }
    // });

    // $(function() {

    //     var target_block2 = $(".bl_our_development"); // Ищем блок
    //     var blockStatus2 = true;
    //     $(window).scroll(function() {
    //         var scrollEvent2 = ($(window).scrollTop() > (target_block2.position().top - $(window).height()));

    //         if (scrollEvent2 && blockStatus2) {

    //             blockStatus2 = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

    //             $({ numberValue: 0 }).delay(0).animate({ numberValue: 1994 }, {
    //                 duration: 3000,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".development1994 > span").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).delay(0).animate({ numberValue: 1994 }, {
    //                 duration: 3500,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".development1994_2 > span >b:first-child").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).delay(0).animate({ numberValue: 2012 }, {
    //                 duration: 3500,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".development1994_2 > span >b:nth-child(2)").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).delay(0).animate({ numberValue: 2013 }, {
    //                 duration: 4000,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".development2013 > span").html(Math.ceil(val));
    //                 }
    //             });

    //             $({ numberValue: 0 }).delay(0).animate({ numberValue: 2014 }, {
    //                 duration: 4500,
    //                 easing: "linear",
    //                 step: function(val) {
    //                     $(".development2014 > span").html(Math.ceil(val));
    //                 }
    //             });

    //         }
    //     });
    // });

    //END OUR DEVELOPMENT
    // ========================================
    // ========================================

    // Плавное появление для элемента заголовка

    // $(function() {

    //     var main_h2 = $(".main_h2"); // Ищем блок
    //     var blockStatus2 = true;
    //     $(window).scroll(function() {
    //         var scrollEvent = ($(window).scrollTop() > (main_h2.position().top - $(window).height()));

    //         if (scrollEvent && blockStatus2) {

    //             // blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
    //             main_h2.addClass("main_h2__animate");
    //         }
    //     });
    // });

    // var target = $('.main_h2');
    // var winHeight = $(window).height();
    // var heihgtTopToElement = $(".main_h2").offset().top - $(window).scrollTop();

    // $(window).scroll(function() {
    //     var windowpos = $(target).scrollTop();
    //     $('.main_h2').each(function() {
    //         if (windowpos => heihgtTopToElement) {
    //             $(this).addClass("main_h2__animate");
    //         }
    //     });
    // });

    // Конец плавное появление для элемента заголовка
    // ========================================
    // ========================================

    // BLOCK CLIENTS
    var quantityElements = $(".clients__items .clients__item").length;

    if (quantityElements > 4) {
        $(".clients__items").slick({
            arrows: true,
            slidesToShow: 4,
            dots: false,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            initialSlide: 4,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
    // END BLOCK CLIENTS
    // ========================================
    // ========================================

    // BLOCK OUR DEVELOPMENT ARROW PREV
    // var lastItem = $("div[data-slick-index=5]");

    // if (lastItem.hasClass("slick-active")) {
    //     // $(".our_development__items .slick-prev").css("display", "block!imortant");
    //     console.log("Privet");
    //     alert("fig");
    //     $(".our_development__items .slick-prev").css("display", "block");
    // }
    //END BLOCK OUR DEVELOPMENT ARROW PREV

    // BLOCK OUR DEVELOPMENT
    var quantityElements2 = $(".our_development__items .our_development__item")
        .length;
    // console.log("init", quantityElements2);

    if (quantityElements2 > 4) {
        $(".our_development__items").slick({
            arrows: true,
            slidesToShow: 4,
            dots: false,
            slidesToScroll: 1,
            infinite: false,
            // autoplay: true,
            // autoplaySpeed: 3000,

            initialSlide: 0,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
        // $(".our_development__items .slick-prev").attr('disabled', '');
        // $(".our_development__items").on("afterChange", function(
        //     event,
        //     slick,
        //     currentSlide,
        //     nextSlide
        // ) {
        //     if (
        //         slick.$slides[slick.$slides.length - 1].classList.contains(
        //             "slick-active"
        //         )
        //     ) {
        //         $(".our_development__items .slick-prev").removeAttr('disabled');
        //     }
        // });
    }
    // END BLOCK OUR DEVELOPMENT
});