
$(document).ready(function () {


  // ========================================
  // ---------- BASE ----------
  // ----------------------------------------
  // ---------- IMG > TO > SVG ----------
  // jQuery('img.svg').each(function () {
  //   let img = jQuery(this);
  //   let imgID = img.attr('id');
  //   let imgClass = img.attr('class');
  //   let imgURL = img.attr('src');
  //   jQuery.get(imgURL, function (data) {
  //     let svg = jQuery(data).find('svg');
  //     if (typeof imgID !== 'undefined') {
  //       svg = svg.attr('id', imgID);
  //     }
  //     if (typeof imgClass !== 'undefined') {
  //       svg = svg.attr('class', imgClass + ' replaced-svg');
  //     }
  //     svg = svg.removeAttr('xmlns:a');
  //     img.replaceWith(svg);
  //   }, 'xml');
  // });
  // ---------- END IMG > TO > SVG ----------
  // ----------------------------------------
  //     // ---------- ADDING A FIXED BLOCK ----------
  // $(window).scroll(function () {
  //   let top = $(document).scrollTop();
  //   if (top > 110) {
  //     $(".header").addClass("fixed");
  //   } else if (top < 110) {
  //     $(".header").removeClass("fixed");
  //   }
  // });
  // ---------- END ADDING A FIXED BLOCK ----------
  // ----------------------------------------
  // ---------- END BASE ----------
  // ========================================
  // ---------- VARIABLES ----------
  let windowWidthJq = $(window).width();
  // ---------- END VARIABLES ----------
  // ========================================
  // ---------- HEADER ----------
  // ----------------------------------------
  // ----- BURGER -----
  // ----------------------------------------
  $(".js-btn-red-menu").click(function () {
    $(this).toggleClass('active');
    $(".js-h-catalog").slideToggle();
    // $('body').toggleClass('lock');
  });

  $(".js-btn-red-menu-mobile").click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(".js-h-catalog").slideUp();
      $(".js-arrow-down-white").removeClass('active');
      // $('body').removeClass('lock');
    } else {
      $(this).addClass('active');
      $(".js-h-catalog").slideDown();
      $(".js-arrow-down-white").addClass('active');
      // $('body').addClass('lock');
    }
  });

  $(".js-burger").click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(".js-header-mobile-menu").slideUp();
      $('body').removeClass('lock');
      // let js_btn_red_menu_mobile = $(".js-btn-red-menu-mobile");
      if ($(".js-btn-red-menu-mobile").hasClass('active')) {
        $(this).removeClass('active');
        $(".js-h-catalog").slideUp();
        $(".js-arrow-down-white").removeClass('active');
        // $('body').removeClass('lock');
      }
    } else {
      $(this).addClass('active');
      $(".js-header-mobile-menu").slideDown();
      // $('body').addClass('lock');
    }
  });
  // $(".header-m__menu a").click(function () {
  //   $(".burger").removeClass('active');
  //   $(".header-m").removeClass('active');
  //   $('body').removeClass('lock');
  // });
  // ----------------------------------------
  // ----- END BURGER -----
  // ----------------------------------------
  $('#js-input-search').keyup(function () {
    let input_value = $('#js-input-search').val();
    let value_len = input_value.length;
    let results = $('.js-search-results');
    if (value_len > 0) {
      results.addClass('active');
    } else if (value_len < 1) {
      results.removeClass('active');
    }
  });

  $(".js-btn-search-mobile").click(function () {
    $(".js-header__search").slideToggle(200);
    $(this).toggleClass('active');
  });
  // ---------- END HEADER ----------
  // ========================================
  // ---------- HEADER BLOCK ----------
  // ----------------------------------------
  $(".js-btn-more-header").click(function () {
    $(this).toggleClass('active');
    $(".hidden-text").slideToggle();
    if ($(this).hasClass('active')) {
      $(this).find('span').html("Скрыть");
    } else {
      $(this).find('span').html("Показать больше");
    }
  });
  // ----------------------------------------
  // ---------- END HEADER BLOCK ----------  
  // ----------------------------------------
  // ---------- POPULAR ----------  
  // $(".js-filter-menu button").click(function (e) {
  //   e.preventDefault();
  //   // $(".js-filter-menu button").removeClass('active');
  //   // $(this).addClass('active');
  // });

  // ---------- END POPULAR ----------  
  // ----------------------------------------
  // ---------- PLACE ----------  
  $(".js-btn-search-place").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals").css('display', 'flex');
  });

  $(".js-btn-close-modal").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals").css('display', 'none');
  });
  // ---------- END PLACE ----------
  // ----------------------------------------
  // ---------- MASK ----------
  // ----------------------------------------
  $("#phone_index").mask("+7 (999) 999-99-99");
  $("#phone_photo2").mask("+7 (999) 999-99-99");
  $("#phone_photo1").mask("+7 (999) 999-99-99");

  $("#phone_about1").mask("+7 (999) 999-99-99");

  $("#phone_service_more2").mask("+7 (999) 999-99-99");
  $("#phone_service_more1").mask("+7 (999) 999-99-99");

  $("#phone_card_popup").mask("+7 (999) 999-99-99");



  // ----------------------------------------
  // ---------- END MASK ----------
  // ========================================
  // ---------- PHOTO ----------
  // ----------------------------------------
  // ---------- VIDEO ----------
  $(".js-video__btn").click(function (e) {
    e.preventDefault();
    $(this).prev('video').get(0).play();
    $(this).hide();
    $(this).prev('video').attr('controls', 'controls');
  });
  // ---------- END VIDEO ----------
  // ----------------------------------------
  // ---------- END PHOTO ----------
  // ========================================
  // ---------- FAQ ----------
  $(".js-btn-faq").click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("active");
    // $(this).prev('video').attr('controls', 'controls');
  });
  // ---------- END FAQ ----------
  // ----------------------------------------
  // ========================================
  // ----------------------------------------
  // ---------- BLOG ----------
  $(".js-btn-select-blog").click(function (e) {
    e.preventDefault();
    $(this).next().slideToggle(100);
    $(this).toggleClass("active");
    // $(this).prev('video').attr('controls', 'controls');
  });

  $(".js-selects_ul button").click(function (e) {
    e.preventDefault();
    $(".js-selects_ul").slideUp(100);
    $(".js-btn-select-blog").removeClass("active");

    let this_text = $(this).text();
    $(".js-btn-select-blog span").html(this_text);
  });

  // ---------- END BLOG ----------
  // ----------------------------------------
  // ========================================
  // ----------------------------------------
  // ---------- PORTFOLIO ----------
  $(".js-btn_filter_portfolio").click(function (e) {
    e.preventDefault();
    $(".bl-portfolio__btns .js-btn_filter_portfolio").removeClass("active");
    $(this).addClass("active");
  });
  // ----------------------------------------

  $(".js-btn-portfolio").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-portfolio").css('display', 'flex');
    $('body').addClass('lock');

  });

  $(".js-btn-close-modal").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-portfolio").css('display', 'none');
    $('body').removeClass('lock');
  });

  // ----------------------------------------

  $(".js-btn-search-certificates").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-certificate").css('display', 'flex');
  });

  $(".js-btn-close-modal").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-certificate").css('display', 'none');
  });
  // ---------- END PORTFOLIO ----------
  // ----------------------------------------
  // ========================================
  // ---------- CATALOG ----------
  $(".js-btn-filter").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });

  $(".js-filter_material").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });


  $(".js-btn-filter-mobile").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next().slideToggle();
    let text1 = $(".js-btn-filter-mobile__name");
    if ($(this).hasClass('active')) {
      text1.html('Скрыть фильтры');
    } else {
      text1.html('Показать фильтры');
    }
  });
  // ----------------------------------------
  $(".js-card_colors__img").click(function (e) {
    e.preventDefault();
    $(".js-card_colors__img").removeClass("active");
    $(this).addClass('active');
  });

  $(".js-besshovnyi .js-card_materials__item").click(function (e) {
    e.preventDefault();
    $(".js-besshovnyi .js-card_materials__item").removeClass("active");
    $(this).addClass('active');
  });

  $(".js-shovnyi .js-card_materials__item").click(function (e) {
    e.preventDefault();
    $(".js-shovnyi .js-card_materials__item").removeClass("active");
    $(this).addClass('active');
  });
  // ----------------------------------------
  $(".js-yes_or_no__btn").click(function (e) {
    e.preventDefault();
    $(".js-yes_or_no__btn").removeClass("active");
    $(this).addClass('active');
  });

  // ----------------------------------------

  $(".js-btn-card").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-card").css('display', 'flex');
    $('body').addClass('lock');

  });

  $(".js-btn-close-modal").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-card").css('display', 'none');
    $('body').removeClass('lock');
  });
  // ----------------------------------------

  $(".js-btn-card-consult").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-card2").css('display', 'flex');
    $('body').addClass('lock');
  });

  $(".js-btn-close-modal").click(function (e) {
    e.preventDefault();
    $(".js-pl-modals-card2").css('display', 'none');
    $('body').removeClass('lock');
  });
  // ----------------------------------------
  // $(".js-btn-card-consult").click(function (e) {
  //   e.preventDefault();
  //   $(".js-pl-modals-card_success").css('display', 'flex');
  //   $('body').addClass('lock');
  // });

  // $(".js-btn-close-modal").click(function (e) {
  //   e.preventDefault();
  //   $(".js-pl-modals-card_success").css('display', 'none');
  //   $('body').removeClass('lock');
  // });
  // ----------------------------------------
  // $(".js-btn-card-consult").click(function (e) {
  //   e.preventDefault();
  //   $(".js-pl-modals-card_success").css('display', 'flex');
  //   $('body').addClass('lock');
  // });

  // $(".js-btn-close-modal").click(function (e) {
  //   e.preventDefault();
  //   $(".js-pl-modals-card_success").css('display', 'none');
  //   $('body').removeClass('lock');
  // });
  // ----------------------------------------
  // ---------- END CATALOG ----------
  // ========================================
  // ---------- SERVICES ----------
  // ----------------------------------------
  $(".area1").hover(function () {
    $(".area_hover1, .btn-seacrh_petal1").css("opacity", "1");
    $(".petals__text1 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover1, .btn-seacrh_petal1").css("opacity", "0");
    $(".petals__text1 h3, petals__text4 p").css("color", "#192040");
  });

  $(".petals__text1").hover(function () {
    $(".area_hover1, .btn-seacrh_petal1").css("opacity", "1");
    $(".petals__text1 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover1, .btn-seacrh_petal1").css("opacity", "0");
    $(".petals__text1 h3, petals__text4 p").css("color", "#192040");
  });
  // ----------------------------------------

  $(".area2").hover(function () {
    $(".area_hover2, .btn-seacrh_petal2").css("opacity", "1");
    $(".petals__text2 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover2, .btn-seacrh_petal2").css("opacity", "0");
    $(".petals__text2 h3, petals__text4 p").css("color", "#192040");
  });

  $(".petals__text2").hover(function () {
    $(".area_hover2, .btn-seacrh_petal2").css("opacity", "1");
    $(".petals__text2 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover2, .btn-seacrh_petal2").css("opacity", "0");
    $(".petals__text2 h3, petals__text4 p").css("color", "#192040");
  });
  // ----------------------------------------

  $(".area3").hover(function () {
    $(".area_hover3, .btn-seacrh_petal3").css("opacity", "1");
    $(".petals__text3 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover3, .btn-seacrh_petal3").css("opacity", "0");
    $(".petals__text3 h3, petals__text4 p").css("color", "#192040");
  });

  $(".petals__text3").hover(function () {
    $(".area_hover3, .btn-seacrh_petal3").css("opacity", "1");
    $(".petals__text3 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover3, .btn-seacrh_petal3").css("opacity", "0");
    $(".petals__text3 h3, petals__text4 p").css("color", "#192040");
  });
  // ----------------------------------------

  $(".area4").hover(function () {
    $(".area_hover4, .btn-seacrh_petal4").css("opacity", "1");
    $(".petals__text4 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover4, .btn-seacrh_petal4").css("opacity", "0");
    $(".petals__text4 h3, petals__text4 p").css("color", "#192040");
  });

  $(".petals__text4").hover(function () {
    $(".area_hover4, .btn-seacrh_petal4").css("opacity", "1");
    $(".petals__text4 h3").css("color", "#ff2e51");
  }, function () {
    $(".area_hover4, .btn-seacrh_petal4").css("opacity", "0");
    $(".petals__text4 h3, petals__text4 p").css("color", "#192040");
  });
  // ----------------------------------------
  // ---------- END SERVICES ----------
  // ========================================
  // ========================================
  // ---------- FOOTER ----------
  // ----------------------------------------
  // ----------------------------------------
  // ---------- END FOOTER ----------
  // ========================================

  // ========================================
  // ---------- POPUP ----------
  // ----------------------------------------
  $(".bl_cat_card__img a").click(function (e) {
    e.preventDefault();
    $(this).next().css("display", "flex");
  });

  $(".bl_cat_card__img .btn-close-modal").click(function (e) {
    e.preventDefault();
    $(".bl_cat_card__img .pl-modals").css("display", "none");
  });



  // ----------------------------------------
  // ---------- END POPUP ----------
  // ========================================
});

