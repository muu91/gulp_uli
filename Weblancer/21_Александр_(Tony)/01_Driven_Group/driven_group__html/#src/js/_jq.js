
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
      $(".header").addClass("fixed");
    } else if (top < 110) {
      $(".header").removeClass("fixed");
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
  $(".burger").click(function () {
    $(this).toggleClass('active');
    $(".header-m").toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(".header-m__menu a").click(function () {
    $(".burger").removeClass('active');
    $(".header-m").removeClass('active');
    $('body').removeClass('lock');
  });
  // ----------------------------------------
  // ----- END BURGER -----
  // ----------------------------------------
  // ---------- END HEADER ----------
  // ========================================
  // ---------- INDEX ----------  
  // ----------------------------------------
  // ---------- FAQ ----------  
  $(".u-btn-accordeon").click(function (e) {
    // e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    } else {
      $(".u-btn-accordeon").removeClass("active");
      $(this).addClass("active");

      $(".u-btn-accordeon").next().slideUp();
      $(this).next().slideDown();
    }
  });
  // $(".u-accordeons > ul > li:nth-child(2)").find('.u-btn-accordeon').click();
  // ---------- END FAQ ----------
  // ----------------------------------------
  // ---------- FORM ----------
  $("#phone").mask("+7 (999) 999-99-99");
  // ---------- END FORM ----------
  // ----------------------------------------
  // ---------- END INDEX ----------
  // ========================================
  // ---------- FOOTER ----------
  // ----------------------------------------

  // ----------------------------------------
  // ---------- END FOOTER ----------
  // ========================================
  // ---------- POPUP ----------
  // ----------------------------------------
  $(".btn-popup-requisites").click(function (e) {
    e.preventDefault();
    $('.popup-requisites').css("display", "flex");
    $('body').addClass('lock');
  });
  $(".btn-close-popup, .btn-close-block").click(function (e) {
    e.preventDefault();
    $('.popup-requisites').css("display", "none");
    $('body').removeClass('lock');
  });
  // ----------------------------------------
  // ---------- END POPUP ----------
  // ========================================
});