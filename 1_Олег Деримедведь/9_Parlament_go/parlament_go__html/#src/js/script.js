$(document).ready(function() {

    //=================================================
    // HEADER MENU 
    $('.header__burger').click(function(e) {
        e.preventDefault();
        $('.header__mobile, .header__burger').toggleClass('active');
        $('html, body').toggleClass('lock');
    });
    // END HEADER MENU 
    //=================================================
    // POPUP
    $('.btn__popup').click(function(e) {
        e.preventDefault();
        $('.bl_popup__form').css('display', 'flex');
        $('html, body').addClass('lock_popup');
    });

    $('.btn_close').click(function(e) {
        e.preventDefault();
        $('.bl_popup__form, .bl_popup__success').css('display', 'none');
        $('html, body').removeClass('lock_popup');
    });

    //END POPUP
    //=============================================




    // REMOVE CLASS ВНЕ БЛОКА
    $(document).mouseup(function(e) {
        var div = $(".popup__bg");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.bl_popup__form, .bl_popup__success').css('display', 'none');
            $('html, body').removeClass('lock_popup');
        }
    });
    // END REMOVE CLASS ВНЕ БЛОКА
    //==============================================
    //==============================================
    // TEXTAREA


    // $("textarea").focus(function() {
    //     $(this).val("");
    // });

    // $("textarea").focusout(function() {
    //     $(this).val("Message                                    if you like, tell us about your problem and preferable date & time to schedule a call ");
    // });


    //END TEXTAREA
    //=========================================================
    //=========================================================
    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_in_the_media
    // $(".bl_in_the_media__text > p").each(function () {
    //    var size = 223;
    //    var newsContent = $(this);
    //    var newsText = newsContent.text();

    //    if (newsText.length > size) {
    //       $(this).text(newsText.slice(0, size) + "...");
    //    }
    // });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_in_the_media
    // --------------------
    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА BLOCK TESTIMONIALS
    // $(".bl_testimonials__item > p").each(function () {
    //    var size2 = 255;
    //    var newsContent2 = $(this);
    //    var newsText2 = newsContent2.text();

    //    if (newsText2.length > size2) {
    //       $(this).text(newsText2.slice(0, size2) + "");
    //    }
    // });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА BLOCK TESTIMONIALS
    // --------------------


    // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА team__text

    // $(".team__text > p").each(function() {
    //     var sizeTeam = 700;
    //     var newsContentTeam = $(this);
    //     var newsTextTeam = newsContentTeam.text();

    //     if (newsTextTeam.length > sizeTeam) {
    //         $(this).text(newsTextTeam.slice(0, sizeTeam) + ' ... ').append('<a href="" class="team_read_more">Read More</a>');

    //         $('.team_read_more').click(function(e) {
    //             e.preventDefault();

    //             $(this).parent().text(newsTextTeam);
    //         });
    //     }
    // });
    //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА team__text
    //=========================================================
    //=========================================================


    // BLOCK bl_header__slider

    $('.bl_header__slider').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        speed: 2000,
        // autoplay: true,
        // autoplaySpeed: 4000,
        initialSlide: 0,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    // $('.bl_header__slider').each(function() {

    //     var heigtSlideBlock = $('.bl_header__slider').height();

    //     $('.bl_header').height(heigtSlideBlock);

    // });


    // События перелистывания слайдера

    $('.bl_header__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var headerText = $('.bl_header__text');
        headerText.css('opacity', '0');
    });

    $('.bl_header__slider').on('afterChange', function(event, slick, currentSlide) {
        var headerText = $('.bl_header__text');
        // console.log('dvscscsd');
        headerText.css('opacity', '1');
    });
    //Конец события перелистывания слайдера

    //END BLOCK bl_header__slider
    // -------------------
    // BLOCK LOGOS

    $('.bl_logos__items').slick({
        arrows: false,
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 1,
        infinite: true,
        // fade: true,
        // cssEase: 'linear',
        // speed: 2000,
        // autoplay: true,
        // autoplaySpeed: 2000,
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
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    // END BLOCK LOGOS
    // BLOCK IN THE MEDIA
    // var windowWidthTariff = $(window).width();
    // if (windowWidthTariff <= 991) {
    //    $('.bl_in_the_media .bl_in_the_media__items').slick({
    //       arrows: false,
    //       slidesToShow: 1,
    //       dots: true,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       autoplaySpeed: 3000
    //    });
    // }
    //END BLOCK IN THE MEDIA
    // -------------------
    // BLOCK TESTIMONIALS
    // $('.bl_testimonials__items').slick({
    //    arrows: false,
    //    slidesToShow: 2,
    //    dots: true,
    //    slidesToScroll: 1,
    //    infinite: true,
    //    // speed: 1000,
    //    //  autoplay: true,
    //    // autoplaySpeed: 3000,
    //    // initialSlide: 4
    //    responsive: [
    //       // {
    //       //    breakpoint: 992,
    //       //    settings: {
    //       //       slidesToShow: 2
    //       //    }
    //       // },
    //       {
    //          breakpoint: 768,
    //          settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //          }
    //       }
    //    ]

    // });
    // END BLOCK TESTIMONIALS
    // -------------------
    //=========================================================
    //=========================================================

    // Для якори

    // var identifier = window.location.hash;

    // if (identifier === "#insurance") {

    //     $('.bl_bottom_form').attr('id', 'insurance');

    //     $(window).load(function() {
    //         $('html, body').animate({
    //             scrollTop: $(".bl_form").offset().top
    //         }, 1000);
    //     });
    // } else if ()

    // Конец Для якори

    // $(window).load(function() {
    //     $('html, body').animate({
    //         scrollTop: $(".bl_form").offset().top
    //     }, 1000);
    // });


    //=========================================================
    //=========================================================

    // $('.grid').masonry({
    //    // options
    //    itemSelector: '.grid-item'
    //    // columnWidth: 200
    // });
    //=========================================================
    //=========================================================

    $(function() {
        window.addEventListener("scroll", function(event) {
            var top = this.pageYOffset;

            var layers = $(".layer");
            var speed, yPos;
            layers.each(function() {
                speed = $(this).attr('data-speed');
                var yPos = -(top * speed / 50);
                $(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            });
        });
    });
});

// document.addEventListener("mousemove", parallax);

// function parallax(e) {
//     this.querySelectorAll('.layer').forEach(layer => {
//         const speed = layer.getAttribute('data-speed')

//         const x = (window.innerWidth - e.pageX * speed) / 1500
//         const y = (window.innerHeight - e.pageY * speed) / 1500

//         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
//         // layer.style.transform = `rotate(${x}deg)`;

//     })
// }