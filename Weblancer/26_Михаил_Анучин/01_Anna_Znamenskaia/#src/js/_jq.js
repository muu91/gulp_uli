
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
  $(".js-burger_open").click(function () {
    // $(this).toggleClass('active');
    $(".js-header__bottom").addClass('active');
    $('body').addClass('lock');
  });
  $(".js-burger_close").click(function () {
    // $(this).toggleClass('active');
    $(".js-header__bottom").removeClass('active');
    $('body').removeClass('lock');
  });

  // $(".header-m__menu a").click(function () {
  //   $(".burger").removeClass('active');
  //   $(".header-m").removeClass('active');
  //   $('body').removeClass('lock');
  // });
  // ----------------------------------------
  // ----- END BURGER -----
  // ----------------------------------------
  // ---------- END HEADER ----------
  // ========================================
  // ---------- INDEX ----------  
  // ----------------------------------------
  $(".js-btn_cross_accordeon").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(".js-btn_cross_accordeon").removeClass("active");
      $(this).addClass("active");

      $(".js-btn_cross_accordeon").next().slideUp();
      $(this).next().slideDown();
    }
  });
  $(".bl_accordeon__items > ul > li ").first().find('.js-btn_cross_accordeon').click();
  // ----------------------------------------
  $(".js-bl_tariffs__item").click(function (e) {
    e.preventDefault();
    console.log(window.innerWidth)
    if (window.innerWidth <= 600) {
      $(this).find(".js-bl_tariffs__hidden").slideToggle();
      $(this).find(".btn_cross_accordeon").toggleClass("active");
    }
  });
  // ----------------------------------------
  // ---------- END INDEX ----------
  // ========================================
  // ---------- FOOTER ----------
  // ----------------------------------------
  // ----------------------------------------
  // ---------- END FOOTER ----------
  // ========================================

  // ========================================
  // ---------- POPUP ----------
  // ----------------------------------------
  $(".js-btn_read").click(function (e) {
    e.preventDefault();
    $(this).parents('li').find(".js-popup").css("display", "flex");
    $('body').addClass('lock');
  });

  $(".js-btn_popup_close").click(function (e) {
    e.preventDefault();
    $(".js-popup").css("display", "none");
    $('body').removeClass('lock');
  });
  // ----------------------------------------
  $(".js-btn_subscription").click(function (e) {
    e.preventDefault();
    $(".js-popup_subscription").css("display", "flex");
    $('body').addClass('lock');
  });

  $(".js-btn_subscription_leave").click(function (e) {
    e.preventDefault();
    $(".js-popup_subscription_leave").css("display", "flex");
    $('body').addClass('lock');
  });

  $(".js-btn_registration").click(function (e) {
    e.preventDefault();
    $(".js-popup_registration").css("display", "flex");
    $('body').addClass('lock');
  });

  $(".js-btn_guide").click(function (e) {
    e.preventDefault();
    $(".js-popup_guide").css("display", "flex");
    $('body').addClass('lock');
  });

  $(".js-btn_check_list").click(function (e) {
    e.preventDefault();
    $(".js-popup_check_list").css("display", "flex");
    $('body').addClass('lock');
  });


  // js-btn_subscription
  // js-btn_subscription_leave
  // js-btn_registration
  // js-btn_guide
  // js-btn_check_list

  // ----------------------------------------
  // ---------- END POPUP ----------
  // ========================================

});




