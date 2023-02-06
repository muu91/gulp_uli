
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
  // ---------- ADDING A FIXED BLOCK ----------
  $(window).scroll(function () {
    let top = $(document).scrollTop();
    if (top > 110) {
      $(".h-bottom").addClass("active");
    } else if (top < 110) {
      $(".h-bottom").removeClass("active");
    }
  });
  // ---------- END ADDING A FIXED BLOCK ----------
  // ----------------------------------------
  // ---------- END BASE ----------
  // ========================================
  // ---------- VARIABLES ----------
  // let windowWidthJq = $(window).width();
  // ---------- END VARIABLES ----------
  // ========================================
  // ---------- HEADER ----------
  // ----------------------------------------
  // ----- BURGER -----
  // ----------------------------------------
  $(".header__burger").click(function () {
    $(".header-m").addClass('active');
    $('body').addClass('lock');
  });
  $(".btn-close-header-menu").click(function () {
    $(".header-m").removeClass('active');
    $('body').removeClass('lock');
    $(".header-m__log-in, .header-m__menu, .header-m__bottom, .header-m__submenu").removeClass('active');
    $(".btn-back-menu").addClass('disabled');
  });
  // ----------------------------------------
  $(".btn-header-m__log-in-active").click(function () {
    $(".header-m__log-in, .header-m__menu, .header-m__bottom, .header-m__submenu").addClass('active');
    $(".btn-back-menu").removeClass('disabled');
  });
  $(".btn-back-menu").click(function () {
    $(".header-m__log-in, .header-m__menu, .header-m__bottom, .header-m__submenu").removeClass('active');
    $(".btn-back-menu").addClass('disabled');
  });
  // ----------------------------------------
  $(".header-m__city a").click(function () {
    $(".header-m").removeClass('active');
    $('body').removeClass('lock');
  });

  // ----------------------------------------

  //     // $('.btn_burger_click__close').click(function () {
  //     //     $('.header__fixed_menu').removeClass('active');
  //     //     $('body').removeClass('lock');
  //     // });

  // $(".btn-accordeon-header").click(function (e) {
  //   e.preventDefault();
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //     $(this).next().slideUp();
  //   } else {
  //     $(".btn-accordeon-header").removeClass("active");
  //     $(this).addClass("active");
  //     $(".btn-accordeon-header").next().slideUp();
  //     $(this).next().slideDown();
  //   }
  // });
  // $(".h-fixed__menu > ul > li ").first().find('.btn-accordeon-header').click();

  // ----- END BURGER -----
  // ----------------------------------------
  // ---------- END HEADER ----------
  // ========================================
  // ----------------------------------------
  // ---------- BLACK BLOCK ----------
  let tabBtnBlack = $("[data-tab-btn-black]");
  tabBtnBlack.on("click", function (e) {
    e.preventDefault();
    // $('.block-black__menu_header > ul > li > a').removeClass('active');
    $(this).parents("ul").find("a").removeClass('active');
    $(this).addClass('active');
    let tabBtnBlack_click = $(this).data('tab-btn-black');
    $("[data-tab-content-black]").each(function () {
      let tabBlackContent = $(this).data('tab-content-black');
      if (tabBlackContent != tabBtnBlack_click) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
  $(".block-black__menu_header > ul > li:first > a").click();

  // ---------- END BLACK BLOCK ----------
  // ----------------------------------------
  // ---------- INDEX ----------
  $('.bl-header .swiper-button-next__index, .bl-header .swiper-button-next__index').click(function () {
    if ($('#index-swiper1').hasClass('swiper-slide-active')) {
      $(".swiper-bl-three-el .swiper-slide").removeClass('active');
      $("#index-swiper1-1").addClass('active');
    } else if ($('#index-swiper2').hasClass('swiper-slide-active')) {
      $(".swiper-bl-three-el .swiper-slide").removeClass('active');
      $("#index-swiper2-2").addClass('active');
    } else if ($('#index-swiper3').hasClass('swiper-slide-active')) {
      $(".swiper-bl-three-el .swiper-slide").removeClass('active');
      $("#index-swiper3-3").addClass('active');
    }
  });

  $(".link-block").click(function (e) {
    e.preventDefault();
  });
  // ----------------------------------------
  // ---------- FILTER ----------
  // ----------------------------------------
  $(".btn-all-more").click(function (e) {
    e.preventDefault();
    $(".c-f-filter__tovars ul li").slideDown();
    $(this).slideUp();
  });
  $(".btn-filter-drop").click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
  // ----------------------------------------
  $(".js-filter-top-mobile__left").click(function (e) {
    e.preventDefault();
    $('.c-f-filter').addClass("active");
    $('body').addClass('lock');
  });
  $(".js-c-f-filter__btn-close, .c-f-filter__click").click(function (e) {
    e.preventDefault();
    $('.c-f-filter').removeClass("active");
    $('body').removeClass('lock');
  });
  // ----------------------------------------
  // ---------- END FILTER ----------
  // ----------------------------------------
  // ---------- RANSOM ----------
  let tabBtn = $("[data-tab-btn]");
  tabBtn.on("click", function (e) {
    e.preventDefault();
    $('.u-tabs__btns > ul > li > a').removeClass('active');
    $(this).addClass('active');
    let tabBtn_click = $(this).data('tab-btn');
    $("[data-tab-content]").each(function () {
      let tabContent = $(this).data('tab-content');
      if (tabContent != tabBtn_click) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
  $(".u-tabs__btns > ul > li:first > a").click();
  // ---------- END RANSOM ----------
  // ----------------------------------------
  // ---------- CONTACTS ----------
  $(".bl-contacts__menu a").click(function (e) {
    e.preventDefault();
    $(".bl-contacts__menu a").removeClass('active');
    $(this).addClass('active');
  });
  // ---------- END CONTACTS ----------
  // ----------------------------------------
  // ---------- END INDEX ----------
  // ========================================
  // ---------- TOVAR ----------
  // ----------------------------------------
  $(".btn-cashback").click(function (e) {
    e.preventDefault();
    $(".cashback__hidden").slideToggle();
    $(this).toggleClass('active');
  });
  // ----------------------------------------
  // ---------- TOVAR2 ----------
  // ----------------------------------------
  $(".t-descr__selects ul li a").click(function (e) {
    e.preventDefault();
    $(this).parents("ul").find('a').removeClass('active');
    $(this).addClass('active');
  });
  $(".js-btn-counts").click(function (e) {
    e.preventDefault();
    $('.js-counts-tover2__hidden').slideToggle();
  });

  // --------------------
  // REMOVE CLASS ВНЕ БЛОКА
  $(document).mouseup(function (e) {
    let div = $(".js-counts-tover2__hidden");
    // var burger = $('.h_burger2');
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.slideUp();
    }
  });
  //END REMOVE CLASS ВНЕ БЛОКА
  // --------------------
  $(".js-counts-tover2__hidden input").click(function (e) {
    let input_len = $("input:checked").length - 1;
    let count_tovers = $('.js-count-tovars');
    count_tovers.html(input_len);
  });
  // ----------------------------------------
  // ---------- WE ACCEPT ----------
  $(".bl-we-accept__menu ul li a").click(function (e) {
    e.preventDefault();
    $(this).parents("ul").find('a').removeClass('active');
    $(this).addClass('active');
  });
  $(".btn-gold-wa").click(function (e) {
    $(".gs-gold").removeClass('d-none');
    $(".gs-silver").addClass('d-none');
  });
  $(".btn-silver-wa").click(function (e) {
    $(".gs-gold").addClass('d-none');
    $(".gs-silver").removeClass('d-none');
  });

  $(".btn-yellow-next-gold").click(function (e) {
    e.preventDefault();
    $(".gs-content__subtexts1-gold").addClass('d-none');
    $(".gs-content__subtexts2-gold").removeClass('d-none');
  });
  $(".btn-back-gold").click(function (e) {
    e.preventDefault();
    $(".gs-content__subtexts1-gold").removeClass('d-none');
    $(".gs-content__subtexts2-gold").addClass('d-none');
  });

  $(".btn-yellow-next-silver").click(function (e) {
    e.preventDefault();
    $(".gs-content__subtexts1-silver").addClass('d-none');
    $(".gs-content__subtexts2-silver").removeClass('d-none');
  });
  $(".btn-back-silver").click(function (e) {
    e.preventDefault();
    $(".gs-content__subtexts1-silver").removeClass('d-none');
    $(".gs-content__subtexts2-silver").addClass('d-none');
  });



  // ---------- END WE ACCEPT ----------
  // ----------------------------------------
  // ---------- ORDERING ----------
  $(".js-btn-remove-order").click(function (e) {
    e.preventDefault();
    $(this).parents('li').remove();
  });
  // ---------- END ORDERING ----------
  // ----------------------------------------
  // ---------- POPUPS ----------
  $(".btn-popup-tovar-basket").click(function (e) {
    e.preventDefault();
    $(".bl-popup-tovar-basket").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-log-reg").click(function (e) {
    e.preventDefault();
    $(".bl-popup-log-reg").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-success").click(function (e) {
    e.preventDefault();
    $(".bl-popup-success").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-log-reg-feedback").click(function (e) {
    e.preventDefault();
    $(".bl-popup-log-reg-feedback").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-log-reg-confirm").click(function (e) {
    e.preventDefault();
    $(".bl-popup-log-reg-confirm").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-sell").click(function (e) {
    e.preventDefault();
    $(".bl-popup-sell").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-choice-city").click(function (e) {
    e.preventDefault();
    $(".bl-popup-choice-city").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-tovar-descr").click(function (e) {
    e.preventDefault();
    $(".bl-popup-tovar-descr").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".btn-popup-search-mobile").click(function (e) {
    e.preventDefault();
    $(".bl-popup-search-mobile").css('display', 'flex');
    $('body').addClass('lock');
  });


  $(".btn-close-block, .btn-close-popup").click(function (e) {
    e.preventDefault();
    $(".main-popup").css('display', 'none');
    $('body').removeClass('lock');
  });
  // ---------- END POPUPS ----------
  // ----------------------------------------
  // ---------- END TOVAR ----------
  // ========================================
  // ---------- MASKS ----------
  // ----------------------------------------
  $("#personal-data-input").mask("+7 (999) 999-99-99");
  $("#personal-data-ord-input").mask("+7 (999) 999-99-99");
  $("#gs-content-input1").mask("+7 (999) 999-99-99");
  $("#gs-content-input2").mask("+7 (999) 999-99-99");
  // ----------------------------------------
  $("#popup-sell-input").mask("+7 (999) 999-99-99");
  $("#popup-log-reg-input").mask("+8 (999) 999-99-99");
  $("#popup-log-reg-feedback-input").mask("+8 (999) 999-99-99");
  $("#popup-log-reg-confirm-input").mask("+8 (999) 999-99-99");
  $("#popup-log-reg-confirm-input").mask("+8 (999) 999-99-99");






  // id="gs-content-input1"
  // ----------------------------------------
  // ---------- END MASKS ----------
  // ========================================
  // ---------- FOOTER ----------
  // ----------------------------------------

  // ----------------------------------------
  // ---------- END FOOTER ----------
  // ========================================

});