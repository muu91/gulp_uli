
$(document).ready(function () {
    var windowWidth = $(window).width();

    var conturnaia = $('#conturnaia');
    var conturnaia_class = $('.conturnaia');

    var blefaro = $('#blefaro');
    var blefaro_class = $('.blefaro');

    var uvelichenie = $('#uvelichenie');
    var uvelichenie_class = $('.uvelichenie');

    var smas_lifting = $('#smas_lifting');
    var smas_lifting_class = $('.smas_lifting');

    var udalenie_rubcov = $('#udalenie_rubcov');
    var udalenie_rubcov_class = $('.udalenie_rubcov');

    $('.photoresults__menu ul li:first a').addClass('active');

    $('.photoresults_slider').on('Init', function (e, slick) {

    }).slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    // centerMode: true,
                    // slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: true,
                    unslick: true
                }
            }
        ],
    }).on('afterChange', function (e, slick, currentSlide, nextSlide) {
        $('.slick-slide').removeClass('active');
        $('.slick-active').next().addClass('active');

        if (conturnaia_class.hasClass('slick-active')) {
            $('.photoresults__menu ul li a').removeClass('active');
            $('.btn_conturnaia').addClass('active');
        } else if (blefaro_class.hasClass('slick-active')) {
            $('.photoresults__menu ul li a').removeClass('active');
            $('.btn_blefaro').addClass('active');
        } else if (uvelichenie_class.hasClass('slick-active')) {
            $('.photoresults__menu ul li a').removeClass('active');
            $('.btn_uvelichenie').addClass('active');
        } else if (smas_lifting_class.hasClass('slick-active')) {
            $('.photoresults__menu ul li a').removeClass('active');
            $('.btn_smas_lifting').addClass('active');
        } else if (udalenie_rubcov_class.hasClass('slick-active')) {
            $('.photoresults__menu ul li a').removeClass('active');
            $('.btn_udalenie_rubcov').addClass('active');
        }
    });



    if (windowWidth <= 992) {
        $('.slick-active').next().addClass('active');
    }

    $('.btn_conturnaia').on('click', function (e) {
        e.preventDefault();
        $('.photoresults_slider').slick('slickGoTo', conturnaia.index() - 2);
    });
    $('.btn_blefaro').on('click', function (e) {
        e.preventDefault();
        $('.photoresults_slider').slick('slickGoTo', blefaro.index() - 2);
    });
    $('.btn_uvelichenie').on('click', function (e) {
        e.preventDefault();
        $('.photoresults_slider').slick('slickGoTo', uvelichenie.index() - 2);
    });
    $('.btn_smas_lifting').on('click', function (e) {
        e.preventDefault();
        $('.photoresults_slider').slick('slickGoTo', smas_lifting.index() - 2);
    });
    $('.btn_udalenie_rubcov').on('click', function (e) {
        e.preventDefault();
        $('.photoresults_slider').slick('slickGoTo', udalenie_rubcov.index() - 2);
    });


    $('.photoresults__menu ul li a').on('click', function () {
        $('.photoresults__menu ul li a').removeClass('active');
        $(this).addClass('active');
    });

});