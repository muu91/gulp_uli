$(document).ready(function() {
  $('.header__burger, .header__menu').click(function(evant) {

    $('.header__burger,.header__menu, .header__logo').toggleClass('active');
    $('body').toggleClass('lock');
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

  // BLOCK SERVICES

  if (windowWidthTariff <= 767) {

    $('.services__items').slick({
      arrows: true,
      slidesToShow: 1,
      dots: true,
      slidesToScroll: 1,
      infinite: true
      // responsive: [{
      //     breakpoint: 1200,
      //     settings: {
      //       slidesToShow: 2
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 1
      //     }
      //   }
      // ]

    });
  }
  //END BLOCK SERVICES



})
