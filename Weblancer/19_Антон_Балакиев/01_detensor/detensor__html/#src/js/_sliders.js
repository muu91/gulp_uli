
// ========================================
// ---------- VARIABLES ----------
let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- SLIDES -----
// let bl_header_top_slider = new Swiper('.bl-header__top-slider', {
//   // spaceBetween: 0,
//   slidesPerView: 1,
//   loop: true,
//   speed: 800,
//   autoplay: {
//     delay: 6000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   // navigation: {
//   //   nextEl: '.swiper-button-next__index',
//   //   prevEl: '.swiper-button-prev__index',
//   // },
//   // slidesPerGroup: 1,
//   // effect: "fade",
//   // allowTouchMove: false,
//   // cssMode: true,
//   // breakpoints: {
//   //   320: {
//   //     spaceBetween: 60,

//   //   },
//   //   768: {
//   //     spaceBetween: 70,

//   //   },
//   //   1024: {
//   //     spaceBetween: 180,

//   //   },
//   //   1440: {
//   //     spaceBetween: 270,
//   //   }
//   // }
// });
// let bl_header_bottom_slider = new Swiper('.bl-header__bottom-slider', {
//   // spaceBetween: 60,
//   slidesPerView: "auto",
//   loop: false,
//   speed: 800,
//   // autoplay: {
//   //   delay: 1000,
//   //   disableOnInteraction: false,
//   // },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // navigation: {
//   //   nextEl: '.swiper-button-next__index',
//   //   prevEl: '.swiper-button-prev__index',
//   // },
//   // slidesPerGroup: 1,
//   // effect: "fade",
//   // allowTouchMove: false,
//   // cssMode: true,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,

//     },
//     601: {
//       slidesPerView: "auto",
//       spaceBetween: 0,

//     },
//   }
// });
// let last_slide_btn__1 = document.querySelector('.bl-header__bottom .swiper-button-next--1');
// let last_slide_btn__2 = document.querySelector('.bl-header__bottom .swiper-button-next--2');

// last_slide_btn__1.addEventListener('click', function (e) {
//   if (this.classList.contains('swiper-button-disabled') && this.classList.contains('swiper-button-go-one')) {
//     bl_header_bottom_slider.slideTo(0);
//     this.classList.remove('swiper-button-go-one');
//   } else if (this.classList.contains('swiper-button-disabled')) {
//     this.classList.add('swiper-button-go-one');
//   }
// });

// last_slide_btn__2.addEventListener('click', function (e) {
//   if (this.classList.contains('swiper-button-disabled') && this.classList.contains('swiper-button-go-one')) {
//     bl_header_bottom_slider.slideTo(0);
//     this.classList.remove('swiper-button-go-one');
//   } else if (this.classList.contains('swiper-button-disabled')) {
//     this.classList.add('swiper-button-go-one');
//   }
// });

// ----- END SLIDES -----
// ----------------------------------------
// ----- WHAT IS IT -----
let bl_whatisit_slider = new Swiper('.bl-whatisit-slider', {
  spaceBetween: 30,
  slidesPerView: 1,
  autoHeight: true,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// ----- END WHAT IS IT -----
// ----------------------------------------
// ----- TOVARS -----
if (windowWidthSwiper <= 1170) {
  let bl_tovars_slider = new Swiper('.bl-tovars-slider', {
    spaceBetween: 40,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000,
      // disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
// let sliderAdded = false;
// $(window).resize(function () {
//   var windowWidth2 = $(window).width();
//   if (!sliderAdded && windowWidth2 < 601) {
//     $('.menu__item:first-child h2').click();
//     sliderAdded = true;
//   }
// });

// ----- END TOVARS -----
// ----------------------------------------
// ----- TOVARS SALE -----

let bl_tovar_sale_slider = new Swiper('.bl-tovar-sale__slider', {
  // spaceBetween: 60,
  slidesPerView: 5,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,

    },
    601: {
      slidesPerView: 2,
      spaceBetween: 20,

    },
    769: {
      slidesPerView: 3,
      spaceBetween: 20,

    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,

    },
    1281: {
      slidesPerView: 5,
      spaceBetween: 40,

    },
  }
});

// ----- END TOVARS SALE -----
// ----------------------------------------



// let bl_portfolio__sliders = document.querySelectorAll('.bl_portfolio__sliders');

// for (let i = 0; i <= bl_portfolio__sliders.length; i++) {
//   let bl_portfolio__slider = new Swiper(bl_portfolio__sliders[i], {
//     loop: false,
//     slidesPerView: "auto",
//     spaceBetween: 150,
//     speed: 500,
//     freeMode: true,
//     // cssMode: true,
//     breakpoints: {
//       320: {
//         spaceBetween: 10,
//       },
//       600: {
//         spaceBetween: 70,
//       },
//       993: {
//         spaceBetween: 100,
//       },
//       1025: {
//         spaceBetween: 150,
//       }
//     },
//   });
// }



// ----------------------------------------
// ---------- END INDEX ----------
// ========================================
// ----------------------------------------
// ---------- TOVAR ----------
// ----------------------------------------
let two_slider__mini_slide = new Swiper(".two-slider__mini-slide", {
  spaceBetween: 15,
  slidesPerView: 4,
  speed: 500,
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-up",
    prevEl: ".swiper-button-down",
  },
  // freeMode: true,
  // watchSlidesProgress: true,
});

let two_slider__big_slide = new Swiper(".two-slider__big-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev--card",
    prevEl: ".swiper-button-next--card",
  },
  thumbs: {
    swiper: two_slider__mini_slide,
  },
});
// ----------------------------------------
// ---------- END TOVAR ----------
// ----------------------------------------
// ========================================







