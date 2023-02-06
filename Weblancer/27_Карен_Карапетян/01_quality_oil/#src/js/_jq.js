
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
  $(".js-header__burger").click(function () {
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(".js-header__burger").click(function () {
    $(".js-header_m").slideToggle(200);
    $(".js-header_m").addClass("active");
    $('body').toggleClass('lock');
  });

  // REMOVE CLASS ВНЕ БЛОКА
  // $(document).mouseup(function (e) {
  //   let div = $(".js-header_m");
  //   let div2 = $(".js-header__burger");

  //   if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass("active")) {
  //     $(".js-header_m").slideUp(200);
  //     $(".js-header_m").removeClass("active");
  //     $(".js-header__burger").removeClass("active");
  //     $('body').removeClass('lock');
  //   }
  // });
  //END REMOVE CLASS ВНЕ БЛОКА

  $(".js-btn_submenu").click(function () {
    $(this).next().slideToggle(200);
    // $(".js-header_m").addClass("active");
    // $('body').toggleClass('lock');
  });
  // ----------------------------------------

  // $(".header-m__menu a").click(function () {
  //   $(".burger").removeClass('active');
  //   $(".header-m").removeClass('active');
  //   $('body').removeClass('lock');
  // });
  // ----------------------------------------
  $(".js-header__catalog_btn").click(function (e) {
    let div = $(".js-header__cat_menu");
    if (div.hasClass("active")) {
      $(".js-header__cat_menu").hide(200);
      $(".js-header__cat_menu").removeClass("active");
    } else {
      $(".js-header__cat_menu").show(200);
      $(".js-header__cat_menu").addClass("active");
    }
  });

  $(".cat_menu__btn").click(function () {
    $(this).next().slideToggle(200);
  });

  // REMOVE CLASS ВНЕ БЛОКА
  $(document).mouseup(function (e) {
    let div = $(".js-header__cat_menu");
    let div2 = $(".js-header__catalog_btn");

    if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass("active") && !div2.is(e.target) && div2.has(e.target).length === 0) {
      $(".js-header__cat_menu").hide(200);
      $(".js-header__cat_menu").removeClass("active");
    }
  });
  //END REMOVE CLASS ВНЕ БЛОКА
  // ----------------------------------------
  // ----- END BURGER -----
  // ----------------------------------------
  // ---------- END HEADER ----------
  // ========================================
  // ---------- INDEX ----------  
  // ----------------------------------------
  // $(".js-btn_cross_accordeon").click(function (e) {
  //   e.preventDefault();
  //   if ($(this).hasClass('active')) {
  //     $(this).removeClass('active');
  //     $(this).next().slideUp();
  //   } else {
  //     $(".js-btn_cross_accordeon").removeClass("active");
  //     $(this).addClass("active");

  //     $(".js-btn_cross_accordeon").next().slideUp();
  //     $(this).next().slideDown();
  //   }
  // });
  // $(".bl_accordeon__items > ul > li ").first().find('.js-btn_cross_accordeon').click();
  // // ----------------------------------------
  // $(".js-bl_tariffs__item").click(function (e) {
  //   e.preventDefault();
  //   console.log(window.innerWidth)
  //   if (window.innerWidth <= 600) {
  //     $(this).find(".js-bl_tariffs__hidden").slideToggle();
  //     $(this).find(".btn_cross_accordeon").toggleClass("active");
  //   }
  // });


  $(".bl_manufactures__hidden").each(function () {
    let manufact_height = $(this).height();
    console.log(manufact_height);
    if (manufact_height >= 115) {
      $(this).next().show();
    }
  })

  $(".bl_manufactures .btn_more").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).prev().css("max-height", "none");
  });

  // ----------------------------------------
  // ----- COUNT -----
  $('.u-count__minus').click(function (e) {
    e.preventDefault();
    let input = $(this).parent().find('.u-count__number');
    let count = parseInt(input.text()) - 1;
    if (count >= 1) {
      input.text(count);
      input.html();
      return false;
    }
  });
  $('.u-count__plus').click(function (e) {
    e.preventDefault();
    let input = $(this).parent().find('.u-count__number');
    input.text(parseInt(input.text()) + 1);
    input.html();
    return false;
  });
  $('.u-count button').click(function (e) {
    e.preventDefault();
    let input = $(this).parent().find('.u-count__number');
    let count = parseInt(input.text());
    let minus = $(this).parent().find('.u-count__minus');
    // console.log(count);
    if (count >= 2) {
      minus.removeClass('u-count__deactivation');
    } else {
      minus.addClass('u-count__deactivation');
    }
  });
  // ----- END COUNT -----
  // ----------------------------------------
  // ========================================
  // ---------- FILTER MOB ----------
  $(".js-btn_filter_mob").click(function () {
    $(".js-filter_aside_mob").show(200);
    $(".js-filter_aside_mob").addClass("active");
  });

  // REMOVE CLASS ВНЕ БЛОКА
  $(document).mouseup(function (e) {
    let div = $(".js-btn_filter_mob");
    if (!div.is(e.target) && div.has(e.target).length === 0 && div.hasClass("active")) {
      $(".js-filter_aside_mob").hide(200);
      $(".js-filter_aside_mob").removeClass("active");
    }
  });
  // ---------- END FILTER MOB ----------
  // ========================================
  // ---------- END INDEX ----------
  // ========================================
  // ========================================
  // ---------- TOVAR ----------
  let tabBtn = $("[data-tab-btn]");
  tabBtn.on("click", function (e) {
    e.preventDefault();
    $('.js-tabs__menu > ul > li > a').removeClass('active');
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
  $(".js-tabs__menu > ul > li:first > a").click();

  // ----------------------------------------
  // SCROLL

  window.onload = function () {
    // var scr = $(".bl_advantages__scroll");
    // scr.mousedown(function () {
    //   var startX = this.scrollLeft + event.pageX;
    //   // var startY = this.scrollTop + event.pageY; // Для вериткальной прокрутки тоже
    //   scr.mousemove(function () {
    //     this.scrollLeft = startX - event.pageX;
    //     // this.scrollTop = startY - event.pageY;
    //     return false;
    //   });
    // });
    // $(window).mouseup(function () {
    //   scr.off("mousemove");
    // });

    let scr_ol = $(".bl_other_tovar__scroll");
    scr_ol.mousedown(function () {
      let startX = this.scrollLeft + event.pageX;
      // var startY = this.scrollTop + event.pageY; // Для вериткальной прокрутки тоже
      scr_ol.mousemove(function () {
        this.scrollLeft = startX - event.pageX;
        // this.scrollTop = startY - event.pageY;
        return false;
      });
    });
    $(window).mouseup(function () {
      scr_ol.off("mousemove");
    });
  }
  // ---------- END TOVAR ----------
  // ========================================
  // ---------- FOOTER ----------
  // ----------------------------------------
  // ----------------------------------------
  // ---------- END FOOTER ----------
  // ========================================

  // ========================================
  // ---------- POPUP ----------
  // ----------------------------------------
  // $(".js-btn_read").click(function (e) {
  //   e.preventDefault();
  //   $(this).parents('li').find(".js-popup").css("display", "flex");
  //   $('body').addClass('lock');
  // });

  $(".js-btn_popup_close, .js-div_bg").click(function (e) {
    e.preventDefault();
    $(".js-popup").css("display", "none");
    $('body').removeClass('lock');
  });

  $(".js-open_popup").click(function (e) {
    e.preventDefault();
    $(".js-popup").css("display", "flex");
    $('body').addClass('lock');
  });
  // ----------------------------------------





  // ----------------------------------------
  // ---------- END POPUP ----------
  // ========================================

});




