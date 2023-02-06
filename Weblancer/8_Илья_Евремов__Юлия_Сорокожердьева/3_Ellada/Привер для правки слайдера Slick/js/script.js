
$(document).ready(function () {
    $('.slick-carousel').on('init', function (e, slick) {
        $('.nav > div').eq(0).addClass('active');
    }).slick({
        arrows: false,
        slidesToShow: 2,
        infinite: false
    })
    // .on('beforeChange', function (e, slick, currentSlide, nextSlide) {
    // $('.nav > div').removeClass('active').eq(nextSlide).addClass('active');
    // console.log(nextSlide);
    // });
    var slide111 = $('#slide111');
    var slide222 = $('#slide222');
    var slide333 = $('#slide333');
    var slide444 = $('#slide444');
    var slide555 = $('#slide555');
    var slide666 = $('#slide666');

    $('.sl111').on('click', function () {
        $('.slick-carousel').slick('slickGoTo', slide111.index());
        console.log(slide111.index())
    });
    $('.sl222').on('click', function () {
        $('.slick-carousel').slick('slickGoTo', slide222.index());
        console.log(slide222.index())
    });
    $('.sl333').on('click', function () {
        $('.slick-carousel').slick('slickGoTo', slide333.index());
    });
    $('.sl444').on('click', function () {
        $('.slick-carousel').slick('slickGoTo', slide444.index());
    });
    $('.sl555').on('click', function () {
        $('.slick-carousel').slick('slickGoTo', slide555.index());
    });
    $('.sl666').on('click', function () {
        $('.slick-carousel').slick('slickGoTo', slide666.index());
    });


    $('.nav div').on('click', function () {
        $('.nav div').removeClass('active');
        $(this).addClass('active');
    });

});