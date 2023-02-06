$(document).ready(function(e) {

  // $('a').click(function(e) {
  //   e.preventDefault();
  // })


  // $("video").parent().find().get(0).stop();



  // HEADER BURGER
  $('.header__burger').click(function(evant) {

    $('.header__burger,.header__content__media').toggleClass('active');
    $('body').toggleClass('lock');
  })
  //END HEADER BURGER
  // =====================================================
  // DROP DOWN
  $('.drop_arrow').click(function() {
    $('.drop_list, .drop_arrow').this().toggleClass('active');
  });

  // END DROP DOWN
  // DROP DOWN MEDIA
  $('.drop_arrow__media').click(function(e) {

    $(this).next().slideToggle();

  });

  $('.drop_sub_arrow__media').click(function() {

    //     e.preventDefault();
    $(this).next().slideToggle(300);
  })

  //END DROP DOWN MEDIA


  // REMOVE CLASS ВНЕ БЛОКА

  $(document).mouseup(function(e) {
    var div = $(".drop_arrow");
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.drop_list, .drop_arrow').removeClass('active'); // скрываем его
    }
  });
  //END REMOVE CLASS ВНЕ БЛОКА

  // =====================================================
  // PRODUCTIONS

  $('.bl_productions__items').slick({
    arrows: false,
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 550,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2
      }
    }]
  });
  //END PRODUCTIONS
  // =====================================================
  // COMMUNITY

  $('.bl_testimonials .a_testimonials__items').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }]
  });

  //END COMMUNITY
  // =====================================================



  // Block Our values
  var windowWidthTariff = $(window).width();
  if (windowWidthTariff <= 767) {

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


  //END DROP DOWN
  // =====================================================
  // =====================================================
  //PAGE PRODUCTIONS

  if (windowWidthTariff <= 767) {


    $('.bl_fall_behind .a_testimonials__items').slick({
      arrows: false,
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      infinite: true,
      autoplaySpeed: 3000
    });
  }


  //END PAGE PRODUCTIONS
  // =====================================================
  // =====================================================
  // PAGE TEAM

  $('.a_for_img__items__slick1').slick({
    arrows: true,
    slidesToShow: 4,
    dots: true,
    slidesToScroll: 1,
    infinite: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // END PAGE TEAM
  // =====================================================
  // =====================================================

  // -----------------------------------------------------

  // POPUP INDEX

  $('.popup_btn_index').click(function(e) {
    e.preventDefault();

    $('.a_popup_service').css("display", "flex").addClass("lock");
    $('body').addClass('lock');

  })

  $('.btn_close_index').click(function(e) {
    e.preventDefault();

    $('.a_popup_service').css("display", "none").removeClass("lock");
    $('body').removeClass('lock');

  })

  // Закрываем по клику вне попапа
  $(".a_popup_service").mouseup(function(e) {
    var div = $(".a_popup_service__data");
    if (!div.is(e.target)
      &&
      div.has(e.target).length === 0) {
      $('.a_popup_service').css("display", "none").removeClass("lock");
      $('body').removeClass('lock');
    }
  });
  //Конец Закрываем по клику вне попапа

  // END POPUP INDEX
  // -----------------------------------------------------

  // POPUP TEAM

  var person = $("[data-person]");

  person.on("click", function(e) {
    e.preventDefault();
    var subPerson = $(this).data('person');
    $("[data-person_content]").each(function() {
      var personContent = $(this).data('person_content');
      if (personContent == subPerson) {
        $(this).css("display", "flex").addClass("lock");
        $('body').addClass('lock');
      } else {
        var closeTeam = $('.btn_close_team');
        closeTeam.on("click", function(e) {
          e.preventDefault();
          $('.a_popup_team').css("display", "none").removeClass("lock");
          $('body').removeClass('lock');
        });
      }
      if (personContent != subPerson) {
        $(this).css("display", "none").removeClass("lock");
        $('body').removeClass('lock');
      }
    });
  });

  var closeTeam = $('.btn_close_team');
  closeTeam.on("click", function(e) {
    e.preventDefault();
    $('.a_popup_team').css("display", "none").removeClass("lock");
    $('body').removeClass('lock');
  });

  // Закрываем по клику вне попапа
  $(".a_popup_team").mouseup(function(e) {
    var div = $(".a_popup_team__item");
    if (!div.is(e.target)
      &&
      div.has(e.target).length === 0) {
        $('.a_popup_team').css("display", "none").removeClass("lock");
        $('body').removeClass('lock');
    }
  });
  //Конец Закрываем по клику вне попапа

  //END POPUP TEAM

  // -----------------------------------------------------
  // -----------------------------------------------------
  // POPUP APP
  $('.register_app').click(function(e) {
    e.preventDefault();

    $('.a_popup_app').css("display", "flex").addClass("lock");
    $('body').addClass('lock');

  })

  $('.btn_close_app').click(function(e) {
    e.preventDefault();

    $('.a_popup_app').css("display", "none").removeClass("lock");
    $('body').removeClass('lock');

  })


  // Закрываем по клику вне попапа
  $(".a_popup_app").mouseup(function(e) {
    var div = $(".a_popup_app__data");
    if (!div.is(e.target)
      &&
      div.has(e.target).length === 0) {
        $('.a_popup_app').css("display", "none").removeClass("lock");
        $('body').removeClass('lock');
    }
  });
  //Конец Закрываем по клику вне попапа
  //END POPUP APP
  // -----------------------------------------------------

  // END PAGE INDEX
  // =====================================================
  // =====================================================
  // PAGE EPISODES
  // -----------------------------------------------------


  $(document).on("click", '.btn__soc', function() {
    //     e.preventDefault();
    $('.btn__soc.btn__soc_active').removeClass('btn__soc_active');
    $(this).toggleClass('btn__soc_active');
  });

  // var episodesBtn = $("[data-btn]");
  $(document).on('click', '[data-btn]', function() {
    //     e.preventDefault();
    var aNavEpisodes = $(this).data('btn');
    $("[data-text]").each(function() {
      var episodesText = $(this).data('text');
      if (episodesText == aNavEpisodes) {
        $(this).slideToggle();
      } else {
        $(this).slideUp();
      }
    });
  });



  // $(".btn__soc").click(function(e) {
  //   e.preventDefault();
  //   $('.btn__soc.btn__soc_active').removeClass('btn__soc_active');
  //   $(this).toggleClass('btn__soc_active');
  // });
  //
  // var episodesBtn = $("[data-btn]");
  // $(episodesBtn).click(function(e) {
  //   e.preventDefault();
  //   var aNavEpisodes = $(this).data('btn');
  //   $("[data-text]").each(function() {
  //     var episodesText = $(this).data('text');
  //     if (episodesText == aNavEpisodes) {
  //       $(this).slideToggle();
  //     } else {
  //       $(this).slideUp();
  //     }
  //   });
  // });

  // EPISODE BTN MORE

  // var episodesItem = $(".a_episodes__item");
  // $(episodesItem).addClass("a_episodes__item__none");
  // $(episodesItem).slice(0, 5).addClass("a_episodes__item__flex");
  // $(".episodes__btn").on("click", function(e) {
  //   e.preventDefault();
  //   $(episodesItem).not('.a_episodes__item__flex').slice(0, 5).addClass("a_episodes__item__flex");
  // });

  //EPISODE  ENd BTN MORE

  // TESTIMONIALS

  // Item1


  //   $(document).on("hover", '.a_episodes__itemin', function() {
  //     $(this).find(".a_episodes__announce").toggleClass("a_episodes__announce__none");
  //     $(this).find(".a_episodes__text").toggleClass("a_episodes__text__block");
  //   });

  //   $('.a_episodes__itemin').hover(function() {
  //     $(this).find(".a_episodes__announce").toggleClass("a_episodes__announce__none");
  //     $(this).find(".a_episodes__text").toggleClass("a_episodes__text__block");
  //   });


  // END PAGE EPISODES
  // -----------------------------------------------------
  //END PAGE EPISODES
  // =====================================================
  // =====================================================
  // -----------------------------------------------------
  // PAGE BECOME A QUEST


  $(".a__tab_nav").first().addClass("active__tab_nav");
  $("[data-tab_content]").hide().first().show();

  $(".a__tab_nav").click(function(e) {
    e.preventDefault();

    $('.a__tab_nav.active__tab_nav').removeClass('active__tab_nav');
    $(this).addClass('active__tab_nav');
  });

  var tabNavBtn = $("[data-filter_tab]");
  tabNavBtn.on("click", function(e) {
    e.preventDefault();
    var tabNavBtnClick = $(this).data('filter_tab');
    $("[data-tab_content]").each(function() {
      var tabContent = $(this).data('tab_content');
      if (tabContent != tabNavBtnClick) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  // Для якори
  //
  var identifier = window.location.hash;

  if (identifier === "#contact__tab") {

    $(this).click(function() {
      $("[data-filter_tab=info]").click();
    });
  }

  // Конец Для якори


  //END PAGE BECOME A QUEST
  // -----------------------------------------------------
  // =====================================================
  // =====================================================

  // PAGE VIDEO
  // VIDEO FILTER

  // $(".a__nav").first().addClass("active__nav");
  // $(".a__nav").click(function(e) {
  //   // e.preventDefault();
  //   $('.a__nav.active__nav').removeClass('active__nav');
  //   $(this).addClass('active__nav');
  // });
  // var filter = $("[data-filter]");
  // filter.on("click", function(e) {
  //   // e.preventDefault();
  //   var aNavCat = $(this).data('filter');
  //   $("[data-content]").each(function() {
  //     var videoContents = $(this).data('content');
  //     if (videoContents != aNavCat) {
  //       $(this).hide();
  //     } else {
  //       $(this).show();
  //     }
  //   });
  // });

  // $("[data-filter=research]").click();
  //END VIDEO FILTER



  $(document).on("click", '.videos__item', function() {
    $(this).find("img, a").hide();
    $(this).each(function() {
      $('.videos__item').get(0).pause();
    });
    $(this).find("video").get(0).play();
  });


  // var playVideosBtn = $(".videos__item");
  //
  // $(playVideosBtn).on("click", function() {
  //   $(this).find("img, a").hide();
  //   $('video').each(function() {
  //     $(this).get(0).pause();
  //   })
  //   $(this).find("video").get(0).play();
  // });



  //END PAGE VIDEO

  // =====================================================
  // =====================================================
  // AUDIO
  if (typeof Plyr == 'function') {
    var player1 = new Plyr('#player1', {
      controls: [
        'play',
        'progress',
        'current-time'
      ],
      invertTime: false
    });
    //END Audio INDEX

    // Audio Productions

    var player2 = new Plyr('#player2', {
      controls: [
        'play',
        'progress',
        'current-time'
      ],
      invertTime: false
    });

    var player3 = new Plyr('#player3', {
      controls: [
        'play',
        'progress',
        'current-time'
      ],
      invertTime: false
    });
  }

  //End Audio Productions
  // END AUDIO
  // =====================================================
  // =====================================================
  // VIDEO

  $(".play_icon5").click(function() {
    $('.header_video__img, .header_video__text, .header_play').hide();
    $('video').each(function() {
      $(this).get(0).pause()
    })
    $(this).parent().find('video').get(0).play();
  });

  $('.play_icon').click(function() {
    $(this).parent().find('video').css("z-index", "10");
    $('video').each(function() {
      $(this).get(0).pause();
    })
    $(this).parent().find('video').get(0).play();
  })
  // END VIDEO



});

// =====================================================
// =====================================================
//
// Clean JS
// Index Page

function playClip(media) {
  if (media) {
    media.play();
  }
}

//END PAGE VIDEO
