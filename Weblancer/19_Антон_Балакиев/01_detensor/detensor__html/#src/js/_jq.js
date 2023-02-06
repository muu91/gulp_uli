
$(document).ready(function () {
  // ========================================
  // ---------- BASE ----------
  // ----------------------------------------
  // ---------- IMG > TO > SVG ----------
  jQuery('img.svg').each(function () {
    let img = jQuery(this);
    let imgID = img.attr('id');
    let imgClass = img.attr('class');
    let imgURL = img.attr('src');
    jQuery.get(imgURL, function (data) {
      let svg = jQuery(data).find('svg');
      if (typeof imgID !== 'undefined') {
        svg = svg.attr('id', imgID);
      }
      if (typeof imgClass !== 'undefined') {
        svg = svg.attr('class', imgClass + ' replaced-svg');
      }
      svg = svg.removeAttr('xmlns:a');
      img.replaceWith(svg);
    }, 'xml');
  });
  // ---------- END IMG > TO > SVG ----------
  // ----------------------------------------
  //     // ---------- ADDING A FIXED BLOCK ----------
  $(window).scroll(function () {
    let top = $(document).scrollTop();
    if (top > 110) {
      $(".header__desktop").addClass("active");
    } else if (top < 110) {
      $(".header__desktop").removeClass("active");
    }
  });
  //     // ---------- END ADDING A FIXED BLOCK ----------
  //     // ----------------------------------------
  //     // ---------- END BASE ----------
  //     // ========================================
  //     // ---------- VARIABLES ----------
  let windowWidthJq = $(window).width();
  //     // ---------- END VARIABLES ----------
  //     // ========================================
  //     // ---------- HEADER ----------
  //     // ----------------------------------------
  // ----- BURGER -----
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".h-fixed").toggleClass('active');
    $('body').toggleClass('lock');
  });

  //     // $('.btn_burger_click__close').click(function () {
  //     //     $('.header__fixed_menu').removeClass('active');
  //     //     $('body').removeClass('lock');
  //     // });

  $(".btn-accordeon-header").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(".btn-accordeon-header").removeClass("active");
      $(this).addClass("active");
      $(".btn-accordeon-header").next().slideUp();
      $(this).next().slideDown();
    }
  });
  // $(".h-fixed__menu > ul > li ").first().find('.btn-accordeon-header').click();

  // ----- END BURGER -----
  // ----------------------------------------
  // ----- CITY-----
  $(".h-city__select-yes").click(function () {
    $(".h-city-popup").fadeOut(300);
  });

  $(".h-city__select-other").click(function () {
    $(".h-city-popup").fadeOut(300);
    $(".h-city-search").fadeIn(300);
  });

  $(".btn-h-city-search__close").click(function () {
    $(".h-city-search").fadeOut(300);
  });
  // ----- END CITY-----
  // ----------------------------------------
  // ---------- END HEADER ----------
  // ========================================
  // ---------- INDEX ----------
  // ----------------------------------------

  // ----------------------------------------
  // ---------- END INDEX ----------
  // ========================================
  // ---------- CATALOG ----------
  // ----------------------------------------
  $(".bl-catalog__menu button").click(function () {
    $(this).toggleClass('active');
    // $(".bl-catalog__menu button").each(function () {
    //   console.log($(this).length);
    // })
  });
  $(".bl-catalog__menu > ul > li ").first().find('button').click();

  $(".btn-cat-accordeon").click(function () {
    $(this).next().slideToggle();
  });

  // ----------------------------------------

  $(".btn-cat-menu-mobile").click(function () {
    $(".cat-menu-mobile__hidden").fadeIn(200);
    $('body').addClass('lock');

  });

  $(".btn-cat-menu-mobile__close, .btn-cat-menu-mobile__show").click(function () {
    $(".cat-menu-mobile__hidden").fadeOut(200);
    $('body').removeClass('lock');
  });

  $(".btn-cat-accordeon").click(function () {
    $(this).next().find('button').addClass('active');
  });

  $(".cat-menu-mobile__hidden > ul > li > ul > li button").click(function () {

    $(this).toggleClass('active');

    let btnCatAccordeon__len = $(".cat-menu-mobile__hidden > ul > li > ul > li button").length;
    let btnCatAccordeon__len_active = $(".cat-menu-mobile__hidden > ul > li > ul > li button.active").length;

    if (btnCatAccordeon__len_active < btnCatAccordeon__len) {
      $(".btn-cat-accordeon").removeClass("active");
    } else if (btnCatAccordeon__len_active == btnCatAccordeon__len) {
      $(".btn-cat-accordeon").addClass("active");
    }

    console.log(btnCatAccordeon__len);
    console.log(btnCatAccordeon__len_active);


  });

  $(".cat-menu-mobile__hidden > ul > li > button").click(function () {
    // $('.btn-cat-accordeon').slideUp();
    // $(".btn-cat-menu-mobile").removeClass('active');
    // $(".cat-menu-mobile__hidden button").removeClass('active');
    $(this).toggleClass('active');

    // let textButton_menu = $(this).text();
    // $(".btn-cat-menu-mobile").html(textButton_menu);
  });

  $(".cat-menu-mobile__hidden > ul > li:first > button").click();

  // ----------------------------------------

  $(".sort__select > button").click(function () {
    $(this).next().slideToggle(200);
    $(this).addClass('active');
  });
  $(".sort__select > ul > li >  button").click(function () {
    $(".sort__select > ul").slideUp(200);
    let textButton = $(this).text();
    $(".sort__select > button").html(textButton);
    $(".sort__select > button").removeClass('active');
  });

  // ----------------------------------------
  // ---------- ПОКАЗАТЬ И СКРЫТЬ ТЕКСТ ----------

  // console.log($(".r-texts > p").text().length)

  // $(function () {
  $(".r-texts > p").each(function () {
    $(this).data('full', $(this).html());
    $(this).html($(this).html().substr(0, 650));
  });

  $(".read-more").click(function (e) {
    e.preventDefault();

    $(this).parents("li").toggleClass("active");
    $(this).toggleClass("act");

    if ($(this).is(".act")) {
      $(this).find("span").html("cвернуть");
      // $(this).siblings('.r-texts').find('p').html($(this).siblings('.r-texts').find('p').data('full'));
      $(this).siblings('p').html($(this).siblings('p').data('full'));


    } else {
      $(this).find("span").html("Читать полностью");
      // $(this).siblings('.r-texts').find('p').html($(this).siblings('.r-texts').find('p').html().substr(0, 70));
      $(this).siblings('p').html($(this).siblings('p').html().substr(0, 650));

    }
  });
  // });
  // ---------- END ПОКАЗАТЬ И СКРЫТЬ ТЕКСТ ----------
  // ----------------------------------------

  $(".card-desc-mobile__select > button").click(function () {
    $(this).next().slideToggle(200);
    $(this).addClass('active');
  });
  $(".card-desc-mobile__select > ul > li >  button").click(function () {
    $(".card-desc-mobile__select > ul").slideUp(200);
    let textButtonTitle = $(this).find('span:first-child').text();
    let textButtonPrice = $(this).find('span:last-child').text();
    console.log(textButtonTitle);

    $(".card-desc-mobile__select > button > .main-select-tovar-title").html(textButtonTitle);
    $(".card-desc-mobile__select > button > .main-select-tovar-price").html(textButtonPrice);


    // $(".card-desc-mobile__select > button").html(textButton);
    $(".card-desc-mobile__select > button").removeClass('active');
  });

  // ----------------------------------------


  // Закрепление блока
  // $window = $(window);
  // $aside = $('.catalog-aside');
  // $aside__menu = $('.catalog-aside__menu');

  // $aside__menu.css('width', $aside__menu.outerWidth());
  // $h = $aside.offset().top;
  // $h60 = $aside.offset().top - 60;
  // $h2_fixed_bottom = $h60 - ($aside__menu.height() + 120);

  // $window.scroll(function () {
  //   if ($window.scrollTop() > $h) {
  //     $aside__menu.addClass('fixed');
  //     // if ($window.scrollTop() > $h2_fixed_bottom) {
  //     //   $aside__menu.addClass('fixed_bottom');
  //     // } else {
  //     //   $aside__menu.removeClass('fixed_bottom');
  //     // }
  //   } else {
  //     $aside__menu.removeClass('fixed');
  //   }
  //   // if (windowWidth > 768) {
  //   // } else if (windowWidth <= 768) {
  //   //   if ($window.scrollTop() > $h) {
  //   //     $nav.addClass('fixed');
  //   //     console.log('menshe 768')
  //   //   } else {
  //   //     $nav.removeClass('fixed');
  //   //   }
  //   // }
  // });

  // ----------------------------------------


  // $(function () {
  //   $('.btn-6').on('mouseenter', function (e) {
  //     let parentOffset = $(this).offset(),
  //       relX = e.pageX - parentOffset.left,
  //       relY = e.pageY - parentOffset.top;
  //     $(this).find('.to-hover').css({ top: relY, left: relX })
  //   }).on('mouseout', function (e) {
  //     let parentOffset = $(this).offset(),
  //       relX = e.pageX - parentOffset.left,
  //       relY = e.pageY - parentOffset.top;
  //     $(this).find('.to-hover').css({ top: relY, left: relX })
  //   });
  //   // $('[href=#]').click(function () { return false });
  // });





  // https://ru.stackoverflow.com/questions/810826/Эффект-волны-при-клике-на-кнопку

  // ----------------------------------------
  // ---------- END CATALOG ----------
  // ========================================
  // ---------- TOVAR ----------
  // ----------------------------------------
  // $(".two-slider__mini  .swiper-slide ").click(function () {
  //   $(".two-slider__mini .swiper-slide").removeClass("active");
  //   $(this).addClass("active");
  // });
  // ----------------------------------------
  // ----- COUNT -----
  $('.minus').click(function (e) {
    e.preventDefault();
    let $input = $(this).parent().find('.number');
    let count = parseInt($input.text()) - 1;
    if (count >= 1) {
      $input.text(count);
      $input.html();
      return false;
    }
  });
  $('.plus').click(function (e) {
    e.preventDefault();
    let $input = $(this).parent().find('.number');
    $input.text(parseInt($input.text()) + 1);
    $input.html();
    return false;
  });

  $('.count button').click(function (e) {
    e.preventDefault();
    let $input = $(this).parent().find('.number');
    let count = parseInt($input.text());
    let minus = $(this).parent().find('.minus');
    // console.log(count);
    if (count >= 2) {
      minus.removeClass('deactivation');
    } else {
      minus.addClass('deactivation');
    }
  });
  // ----- END COUNT -----
  // ----------------------------------------

  $('.btn-add-tovar').click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).find('span').html('Добавить в корзину');
      $(this).removeClass('active');
    } else {
      $(this).find('span').html('Уже в корзине');
      $(this).addClass('active');
    }
    // $input.text(parseInt($input.) + 1);
    // $input.html();
    // return false;
  });
  // ----------------------------------------
  // ---------- END TOVAR ----------
  // ========================================
  // ---------- FOOTER ----------
  // ----------------------------------------
  // $(".btn-accordeon-footer").click(function () {
  //   $(this).next().slideDown();
  //   $(".header__mobile").toggleClass('active');
  //   $('body').toggleClass('lock');
  // });


  // let sliderAdded = false;
  // $(window).resize(function () {
  //   var windowWidth2 = $(window).width();
  //   if (!sliderAdded && windowWidth2 < 481) {
  //     $('.menu__item:first-child h2').click();
  //     sliderAdded = true;
  //   }
  // });


  // let sliderAdded = false;
  // $(window).resize(function () {
  //   var windowWidth2 = $(window).width();
  //   if (!sliderAdded && windowWidth2 < 481) {
  //     $(".btn-accordeon-footer").click(function (e) {
  //       e.preventDefault();
  //       if ($(this).hasClass('active')) {
  //         $(this).removeClass('active');
  //         $(this).next().slideUp();
  //       } else {
  //         $().removeClass("active");
  //         $(this).addClass("active");

  //         $(".btn-accordeon-footer").next().slideUp();
  //         $(this).next().slideDown();
  //       }
  //     });
  //     sliderAdded = true;
  //   }
  // });


  $(".btn-accordeon-footer").click(function (e) {
    let windowWidth_footer = $(window).width();
    e.preventDefault();
    if (windowWidth_footer <= 480) {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().slideUp();
      } else {
        $().removeClass("active");
        $(this).addClass("active");

        $(".btn-accordeon-footer").next().slideUp();
        $(this).next().slideDown();
      }
    }
  });

  // $(".footer__top-body > ul > li > ").first().find('.btn-accordeon-footer').click();


  // ----------------------------------------
  // ---------- END FOOTER ----------
  // ========================================
  // ---------- TOVAR ----------
  $(".bl-accordeon__texts > ul li h3").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).next().slideDown();
    } else {
      $(".bl-accordeon__texts > ul li h3").removeClass("active");
      $(".bl-accordeon__hidden").slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }
  });
  $(".bl-accordeon__texts > ul li:nth-child(2) > h3").click();
  // ---------- END TOVAR ----------
  // ========================================
  // ---------- BASKET ----------
  $(".aside-bask .btn-pay").click(function (e) {
    $(".aside-bask .btn-pay").removeClass('active');
    $(this).addClass('active');
    if ($(".btn-card-online").hasClass('active')) {
      $(".btn-zakaza").html('Заказать и оплатить');
    } else {
      $(".btn-zakaza").html('Заказать');
    }
  });
  $(".aside-bask .btn-pay:first").click();
  // ----------------------------------------

  $(".del-item__top").click(function (e) {

    if ($(this).hasClass('active')) {

      $(this).removeClass('active');
      $(this).next().slideUp();
      $(this).find(".btn-select-delivery").html("Выбрать");

    } else {
      $(".del-item__top").removeClass("active");
      $(this).addClass("active");

      $(".del-item__top").next().slideUp();
      $(this).next().slideDown();

      $(".btn-select-delivery").html("Выбрать");
      $(this).find(".btn-select-delivery").html("Выбрано");
    }
  });

  $(".delivery__items .delivery__item  .del-item__top:first").click();


  // $(".u-btn-accordeon").click(function (e) {
  //   // e.preventDefault();
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //     $(this).next().slideUp();
  //   } else {
  //     $(".u-btn-accordeon").removeClass("active");
  //     $(this).addClass("active");

  //     $(".u-btn-accordeon").next().slideUp();
  //     $(this).next().slideDown();
  //   }
  // });
  // $(".u-accordeons > ul > li > ").first().find('.u-btn-accordeon').click();




  // ---------- END BASKET ----------
  // ========================================
  // ---------- POPUP ----------
  // ----------------------------------------
  $(".btn-i-popup1").click(function (e) {
    $(".i-popup1").css("display", "flex");
    $('html, body').addClass('lock');
  });

  $(".btn-i-popup2").click(function (e) {
    $(".i-popup2").css("display", "flex");
    $('html, body').addClass('lock');
  });

  $(".btn-t-popup1").click(function (e) {
    $(".t-popup1").css("display", "flex");
    $('html, body').addClass('lock');
  });

  $(".btn-t-popup-success").click(function (e) {
    $(".t-popup-success").css("display", "flex");
    $('html, body').addClass('lock');
  });

  $(".btn-t-popup-basket").click(function (e) {
    $(".t-popup-basket").css("display", "flex");
    $('html, body').addClass('lock');
  });
  // ----------------------------------------

  $(".btn-close-popup, .popup-close-block").click(function (e) {
    $(".main_popup").css("display", "none");
    $('html, body').removeClass('lock');
  });


  // ----------------------------------------
  $(".btn-sms-pa-data").click(function (e) {
    $(".pa-popup-1").css("display", "flex");
    $('html, body').addClass('lock');
  });
  // ----------------------------------------
  $(".btn-oct-click").click(function (e) {
    $(".one-click-popup").css("display", "flex");
    $('html, body').addClass('lock');
  });

  $(".btn-oct-select").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).next().slideUp(100);
      $(this).removeClass('active');
    } else {
      $(".btn-oct-select").removeClass("active");
      $(".oct-select__menu").slideUp();
      $(this).next().slideDown(100);
      $(this).addClass('active');
    }
  });
  $(".oct-select__menu > ul > li > a").click(function () {
    $(".oct-select__menu").slideUp(100);
    let textOctButton = $(this).text();
    $(this).parents('.oct-select__select').find('.btn-oct-select').html(textOctButton);
    $(".btn-oct-select").removeClass('active');
  });
  // ----------------------------------------




  // $(document).mouseup(function (e) {
  //   let div = $(".popup__content");
  //   if (!div.is(e.target) && div.has(e.target).length === 0) {
  //     $(".main_popup").css("display", "none");
  //     $('html, body').removeClass('lock');
  //   }
  // });

  // ---------- END POPUP ----------
  // ========================================
  // ---------- OTHER ----------

  // $("#pa-date").datepicker();
  $('#pa-date').datepicker({
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dateFormat: "d MM yy г."
  });

  // ---------- END OTHER ----------
  // ========================================

});