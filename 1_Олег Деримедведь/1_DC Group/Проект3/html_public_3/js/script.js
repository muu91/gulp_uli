$(document).ready(function(e) {

  $('.header__burger, .header__menu').click(function(evant) {

    $('.header__burger,.header__menu, .header__logo').toggleClass('active');
    $('html, body').toggleClass('lock');
  })
  // Block Our values
  var windowWidthTariff = $(window).width();
  if (windowWidthTariff <= 1560) {

    $('.our_values__items').slick({
      arrows: true,
      slidesToShow: 3,
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }

  //End Block Our values

  // =====================================================
  // =====================================================

  // PAGE INDEX
  // -----------------------------------------------------
  // BLOCK SERVICES

  if (windowWidthTariff <= 767) {

    $('.our_services__items').slick({
      arrows: true,
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      infinite: true
    });
  }
  //END BLOCK SERVICES
  // -----------------------------------------------------
  // -----------------------------------------------------
  // OUR ACCREDITATIONS

  if (windowWidthTariff <= 767) {

    $('.bl_accreditations__slick').slick({
      arrows: true,
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      infinite: true
    });
  }
  // END OUR ACCREDITATIONS
  // -----------------------------------------------------
  // POPUP INDEX

  $('.btn_popup').click(function(e) {
    e.preventDefault();

    $('.bl_popup').css("display", "block").addClass("lock");
    $('html, body').addClass('lock');

  })

  $('.btn_close').click(function(evant) {

    $('.bl_popup').css("display", "none").removeClass("lock");

    $('html, body').removeClass('lock');

  })
  //END POPUP INDEX
  // -----------------------------------------------------
  // -----------------------------------------------------
  // END PAGE INDEX

  // -----------------------------------------------------
  // POPUP INDEX

  $('.btn_popup').click(function(e) {
    e.preventDefault();

    $('.bl_popup').css("display", "block").addClass("lock");
    $('body').addClass('lock');

  })

  $('.btn_close').click(function(evant) {

    $('.bl_popup').css("display", "none").removeClass("lock");

    $('body').removeClass('lock');

  })
  //END POPUP INDEX
  // -----------------------------------------------------
  // -----------------------------------------------------
  // =====================================================
  // =====================================================
  // PAGE HARD
  // -----------------------------------------------------
  // TESTIMONIALS
  if (windowWidthTariff <= 991) {

    $('.testimonials__items').slick({
      arrows: true,
      slidesToShow: 1,
      dots: false,
      slidesToScroll: 1,
      infinite: true
    });
  }

  // END TESTIMONIALS
  // -----------------------------------------------------
  //END PAGE HARD
  // =====================================================
  // =====================================================
  // PAGE WHO ARE WE
  // -----------------------------------------------------
  // BLOCK ELEMENTS
  if (windowWidthTariff <= 767) {

    $('.elements__items').slick({
      arrows: true,
      slidesToShow: 1,
      dots: false,
      slidesToScroll: 1,
      infinite: true
    });
  }
  // END BLOCK ELEMENTS
  // -----------------------------------------------------
  // END PAGE WHO ARE WE
  // =====================================================
  // =====================================================

  // PAGE BLOG
  // -----------------------------------------------------
  // BLOCK POSTS


  $('#select_posts').change(function() {

    var selected = $("#select_posts option:selected").val();
    var all = $("select_posts #option_1").val();
    var option2 = $("#select_posts #option_2").val();
    var option3 = $("#select_posts #option_3").val();
    var option4 = $("#select_posts #option_4").val();

    var option_h3_2 = $(".name_filter");



    if (selected == all) {
      $(' .posts_2, .posts_3, .posts_4').show();
    } else

    if (selected == option2) {
      $('.posts_2').show();
      $('.posts_3, .posts_4').hide();

      option_h3_2.html(option_h3_2.text() == '“Article tag2”' ? '“Article tag2”' : '“Article tag2”');

    } else

    if (selected == option3) {
      $('.posts_3').show();
      $(' .posts_2, .posts_4').hide();

        option_h3_2.html(option_h3_2.text() == '“Article tag3”' ? '“Article tag3”' : '“Article tag3”');
    } else

    if (selected == option4) {
      $('.posts_4').show();
      $(' .posts_2, .posts_3').hide();

        option_h3_2.html(option_h3_2.text() == '“Article tag4”' ? '“Article tag4”' : '“Article tag4”');
    } else {
      $('.posts__item').show();
    }

  })


  // END BLOCK POSTS
  // -----------------------------------------------------
  // END PAGE BLOG
  // =====================================================
  // =====================================================







})
