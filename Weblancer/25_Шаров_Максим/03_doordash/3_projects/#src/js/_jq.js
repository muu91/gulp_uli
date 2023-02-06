
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
  // $(".burger").click(function () {
  //   $(this).toggleClass('active');
  //   $(".header-m").toggleClass('active');
  //   $('body').toggleClass('lock');
  // });
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

  $(".burger").click(function () {
    $(".popup").css('display', 'flex');
    $('body').addClass('lock');
  });
  $(".block-close, .js-btn-close-popup").click(function () {
    $(".popup").css('display', 'none');
    $('body').removeClass('lock');
  });

  // ----------------------------------------
  // ---------- END POPUP ----------
  // ========================================
  // ---------- MASKED ----------
  // ----------------------------------------
  $("#card-number11").mask("9999 9999 9999 9999");
  $("#card-date11").mask("99 / 9999");
  $("#card-cvc11").mask("999");
  // ----------------------------------------
  // ---------- END MASKED ----------
  // ========================================
  // ----------------------------------------
  // ---------- INDEX ----------
  $("#inp-klarna").click(function () {
    let klarna_block = $(".klarna-active");
    let plaid_block = $(".plaid-active");
    let btn_plaid = $("#inp-plaid");
    if ($(this).prop("checked") === true) {
      klarna_block.slideDown();
      plaid_block.slideUp();
      if (btn_plaid.prop("checked") === true) {
        btn_plaid.trigger('click');
      }
    } else {
      klarna_block.slideUp();
    }
  });

  $("#inp-plaid").click(function () {
    let klarna_block = $(".klarna-active");
    let plaid_block = $(".plaid-active");
    let btn_klarna = $("#inp-klarna");
    if ($(this).prop("checked") === true) {
      plaid_block.slideDown();
      klarna_block.slideUp();
      if (btn_klarna.prop("checked") === true) {
        btn_klarna.trigger('click');
      }
    } else {
      plaid_block.slideUp();
    }
  });
  // ----------------------------------------
  // ---------- END INDEX ----------
  // ========================================
});

