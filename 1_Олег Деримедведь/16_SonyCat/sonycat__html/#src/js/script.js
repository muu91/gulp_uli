
// if ($(window).innerWidth() <= 728) {
// $(window).scroll(function () {
//   var top2 = $(document).scrollTop();
//   if (top2 > 130) {
//     $(".main_header").addClass('header__sticky');
//   } else if (top2 < 130) {
//     $(".main_header").removeClass('header__sticky');
//   }
// });
// }

// ========================================
jQuery(document).ready(function () {
  // ========================================
  // Плавный скролл

  $(document).on('click', 'a[href^="#bl_form"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
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

  $('.header__mobile a').click(function () {
    $('.header__burger').toggleClass('active');
    $('.header__mobile').toggleClass('active');
    $('body').toggleClass('lock');

  });

  // $('.header__mobile a').click(function () {
  //   $('.header__burger').toggleClass('active');
  //   $('.header__mobile').toggleClass('active');
  //   $('.header__mobile > .header__mobile__content > .header_menu').toggleClass('active');
  //   $('.header__mobile > .header__mobile__content > .btn_orange').toggleClass('active');
  //   $('body').toggleClass('lock');

  // })
  // $('.btn_close__mobile').click(function (e) {
  //   e.preventDefault();
  //   $('.header__burger').removeClass('active');
  //   $('.header__mobile').removeClass('active');
  //   $('body').removeClass('lock');

  // });
  //     // $(document).mouseup(function (e) {
  //     //     var notBurger = $(".header__mobile");
  //     //     if (!notBurger.is(e.target)
  //     //         &&
  //     //         notBurger.has(e.target).length === 0) {
  //     //         $('.header__burger').toggleClass('active');
  //     //         $('.header__mobile').toggleClass('active');
  //     //         $('html, body').toggleClass('lock');
  //     //     }
  //     // });
  //     // END BURGER
  //     // --------------------
  //     // REMOVE CLASS ВНЕ БЛОКА
  // $(document).mouseup(function (e) {
  //   var div = $(".header__mobile");
  //   // var burger = $('.h_burger2');
  //   if (!div.is(e.target) // если клик был не по нашему блоку
  //     &&
  //     div.has(e.target).length === 0) { // и не по его дочерним элементам
  //     // $('.h_burger').removeClass('active');
  //     $('.header__mobile').removeClass('active');
  //     $('.header__burger').removeClass('active');

  //     $('html, body').removeClass('lock');
  //     // скрываем его
  //   }
  // });
  //     //END REMOVE CLASS ВНЕ БЛОКА
  //     // --------------------
  //     // STICKY
  //     // $(window).scroll(function () {
  //     //     var topHeight = $(this).scrollTop();
  //     //     if (topHeight > 300) {
  //     //         $('.header__sticky').slideDown(200);
  //     //     } else if (topHeight <= 300) {
  //     //         $('.header__sticky').slideUp(200);
  //     //     }
  //     // });
  //     // END STICKY
  //     // --------------------
  //     // END HEADER
  //     // ========================================
  //     // MAIN
  //     // ========================================
  //     // --------------------
  // FAQ


  // ========================================
  // TYPES
  $(".types__bottom > a").click(function (e) {
    e.preventDefault();
    $(this).parents('li').find('.bl_types__popup').css('display', 'flex');
    $('body').addClass('lock_2');
  });
  // $(".types__bottom > a:first").click();
  // --------------------
  // $(".item__bottom > a").click(function (e) {
  //   e.preventDefault();
  //   $(this).parents('li').find('.bl_types__popup').css('display', 'flex');
  //   $('body').addClass('lock_2');

  // });


  var tabNavBtn = $("[data-filter_tab]");
  tabNavBtn.on("click", function (e) {
    e.preventDefault();
    var tabNavBtnClick = $(this).data('filter_tab');
    $("[data-tab_content]").each(function () {
      var tabContent = $(this).data('tab_content');
      if (tabContent != tabNavBtnClick) {
        $(this).hide();
        // $('body').removeClass('lock_3');
      } else {
        // $(this).show();
        $(this).css('display', 'flex');
        $('body').addClass('lock_2');
      }
    });
  });

  $(".type_2_close").click(function (e) {
    e.preventDefault();
    $(".bl_types__popup").hide();
    $('body').removeClass('lock_2');
  });

  // --------------------

  // REMOVE CLASS ВНЕ БЛОКА
  // $(document).mouseup(function (e) {
  //   var div = $(".popup__content");
  //   // var burger = $('.h_burger2');
  //   if (!div.is(e.target) // если клик был не по нашему блоку
  //     &&
  //     div.has(e.target).length === 0) { // и не по его дочерним элементам
  //     $(".bl_types__popup").hide();
  //     $('body').removeClass('lock_2');
  //     // скрываем его
  //   }
  // });
  // END REMOVE CLASS ВНЕ БЛОКА
  // --------------------

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  // --------------------

  // ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_other_solutions

  $(".bl_types_2 .item__text p:nth-child(4)").each(function () {
    var size = 180;
    var newsContent = $(this);
    var newsText = newsContent.text();

    if (newsText.length > size) {
      $(this).text(newsText.slice(0, size) + " ...");
    }
  });
  //END ОБРЕЗКА ТЕКСТА ДЛЯ БЛОКА bl_other_solutions
  // -----------------------------------

  // END TYPES
  // ========================================


  // $(".bl_faq__content > ul > li> h4").click(function (e) {
  //   e.preventDefault();
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //     $(this).next().slideUp();
  //   } else {
  //     $(".bl_faq__content > ul > li> h4").removeClass("active");
  //     $(this).addClass("active");

  //     $(".bl_faq__content > ul > li> h4").next().slideUp();
  //     $(this).next().slideDown();
  //   }
  // });
  // $(".bl_faq__content > ul > li").first().find('h4').click();




  // Когда доходим до нужного блока
  // var target = $('footer');
  // var targetPos = target.offset().top;
  // var winHeight = $(window).height();
  // var scrollToElem = targetPos - winHeight;


  // if ($(window).innerWidth() < 600) {
  //   $(window).scroll(function () {
  //     var winScrollTop = $(this).scrollTop();
  //     if (winScrollTop > scrollToElem) {
  //       $('.bl_header__text .btn_orange').css('display', 'none');
  //     } else if (winScrollTop <= scrollToElem) {
  //       $('.bl_header__text .btn_orange').css('display', 'block');
  //     }

  //   });
  // }
  // ========================================
  // END MAIN
  // ========================================
  // SLICK SLIDER
  // --------------------
  // HEADER
  $('.bl_header__content > ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
  // --------------------
  // ALL CATS LOVE
  $('.all_cats_love__content > ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
  // --------------------
  // TYPES 2
  $('.bl_types_2__items > ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });

  // --------------------

  // REVIEWS
  $('.bl_reviews__content > ul').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });


  $('.bl_reviews__content .slick-arrow').click(function (e) {
    e.preventDefault();
    var iframe = $('.bl_reviews__content').find('iframe').each(function () {
      var src = $(this).attr('src');
      $(this).attr('src', '').attr('src', src + '?autoplay=0');
    });
  });

  $('.slick-dots li').click(function (e) {
    e.preventDefault();
    var iframe = $('.bl_reviews__content').find('iframe').each(function () {
      var src = $(this).attr('src');
      $(this).attr('src', '').attr('src', src + '?autoplay=0');
    });
  });





  // END REVIEWS
  // --------------------


  // ========================================
  // $('.btn_orange').appear(function () {
  //   console.log('text')
  // });

  // $('.traces > ul li')

  // $('.traces > ul').appear();
  // $('.traces > ul').on('appear', function () {
  //   // $(this).removeClass('on').addClass('off');

  //   $('.traces > ul li:eq(0)').fadeIn(100, function () {
  //     $(this).next().fadeIn(100, arguments.callee);
  //   });
  // });
  // ========================================
  // FOOTER
  // $('.footer__cards a').click(function (e) {
  //   e.preventDefault();
  // });
  // ========================================


});
