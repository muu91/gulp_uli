$(document).ready(function() {
  $('.header__burger, .header__menu').click(function(evant) {

    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
  // Block Our values


  let windowWidthTariff = $(window).width();
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

$(window).scroll(function(){
		var bottomOffset = 700; // отступ от нижней границы сайта, до которого должен доскроллить пользователь, чтобы подгрузились новые посты
		var data = {
			'action': 'loadmore',
			'query': true_posts,
			'page' : current_page
		};
		var st = $(document).scrollTop(),
		    h = $(document).height();
		$(document).scrollTop()
		if( $(document).scrollTop() > ($(document).height() - bottomOffset) && !$('#loadmore').hasClass('loading__icons')){
			
			$.ajax({
				url:ajaxurl,
				data:data,
				type:'POST',
				beforeSend: function( xhr){
					$('#loadmore').addClass('loading__icons');
				},
				success:function(data){
					if( data ) { 
						$('.our_brands__items').append(data);
						$('#loadmore').removeClass('loading__icons');
						current_page++;
					}
				}
			});
		}
	});

/*ajax posts*/

  $(document).on('change', '#select_posts', function(){

      var opt = $(this).val();
      $('.our_brands__items').css('opacity', 0.5);
    
      $.ajax({

        url: globals.url,
        data : {
          action : 'change_post',
          category: opt,

        },
        success: function (data) {
          $('.our_brands__items').html(data);
          $('.our_brands__items').css('opacity', 1);
        }
      });
  });

})
