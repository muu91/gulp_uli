
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

  // $(document).on('click', 'a[href^="#bl_form"]', function (event) {
  //   event.preventDefault();

  //   $('html, body').animate({
  //     scrollTop: $($.attr(this, 'href')).offset().top
  //   }, 1000);
  // });
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
  // OUR TECHNOLOGY
  $('.bl_our_technology__content > ul > li .bl_our_technology__img, .bl_our_technology__content > ul > li >h4').click(function (e) {
    e.preventDefault();
    $('.element_content').hide();
    $(this).siblings(".element_content").show();
  });
  $('.btn_close').click(function (e) {
    e.preventDefault();
    $(".element_content").hide();
  });

  // REMOVE CLASS ВНЕ БЛОКА
  $(document).mouseup(function (e) {
    var div = $(".element_content");
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      $(".element_content").hide();
    }
  });
  // END REMOVE CLASS ВНЕ БЛОКА

  // END OUR TECHNOLOGY
  // ========================================


  // // REMOVE CLASS ВНЕ БЛОКА
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
  // // END REMOVE CLASS ВНЕ БЛОКА

  // END TYPES
  // ========================================






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
  // $('.bl_header__content > ul').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   dots: true
  // });
  // --------------------





  // END REVIEWS
  // --------------------


  // ========================================


});
