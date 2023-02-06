
// ========================================
// ---------- VARIABLES ----------
// let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- SLIDES -----
// ----------------------------------------
// ----- BLOCK HEADER -----
let swiper_bl_three_el = new Swiper('.swiper-bl-three-el', {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: false,
  speed: 800,
  // allowTouchMove: true,
  // simulateTouch: true,
  cssMode: true,
  pagination: {
    el: '.three-swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
      slidesPerView: 1,
      // cssMode: false,
      // simulateTouch: false,
      // allowTouchMove: false,
    },
    481: {
      spaceBetween: 30,
      slidesPerView: 3,
      // allowTouchMove: true,
      // cssMode: true,
      // simulateTouch: false,

    },
    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      // allowTouchMove: true,
      // cssMode: true,
      // allowTouchMove: false,
    }
  }
});

let swiper_bl_header = new Swiper('.swiper-bl-header', {
  // spaceBetween: 0,
  slidesPerView: 1,
  loop: false,
  speed: 800,
  autoHeight: true,


  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },

  navigation: {
    nextEl: '.swiper-button-next__index',
    prevEl: '.swiper-button-prev__index',
  },
  thumbs: {
    swiper: swiper_bl_three_el,
  },
  // pagination: {
  //   el: '.header-swiper-pagination',
  //   // type: 'bullets',
  // },
  // slidesPerGroup: 1,
  // effect: "fade",
  // allowTouchMove: false,
  // cssMode: true,
  // breakpoints: {
  //   320: {
  //     spaceBetween: 60,

  //   },
  //   768: {
  //     spaceBetween: 70,

  //   },
  //   1024: {
  //     spaceBetween: 180,

  //   },
  //   1440: {
  //     spaceBetween: 270,
  //   }
  // }
});


// swiper_bl_header.on('slideChangeTransitionEnd', function () {
//   if ($('#index-swiper1').hasClass('swiper-slide-active')) {
//     $(".swiper-bl-three-el .swiper-slide").removeClass('active');
//     $("#index-swiper1-1").addClass('active');
//   } else if ($('#index-swiper2').hasClass('swiper-slide-active')) {
//     $(".swiper-bl-three-el .swiper-slide").removeClass('active');
//     $("#index-swiper2-2").addClass('active');
//   } else if ($('#index-swiper3').hasClass('swiper-slide-active')) {
//     $(".swiper-bl-three-el .swiper-slide").removeClass('active');
//     $("#index-swiper3-3").addClass('active');
//   }
// });
// ----- END BLOCK HEADER -----
// ----------------------------------------
// ----- THREE ELEMENTS -----
// const index_swiper1_1 = document.querySelector('#index-swiper1-1');
// const index_swiper2_2 = document.querySelector('#index-swiper2-2');
// const index_swiper3_3 = document.querySelector('#index-swiper3-3');

// swiper_bl_header.on('slideChangeTransitionEnd', function () {
//   if ($('#index-swiper1').hasClass('swiper-slide-active')) {
//     $(".swiper-bl-three-el .swiper-slide").removeClass('active');
//     // $("#index-swiper1-1").addClass('active');
//     swiper_bl_three_el.slideTo(index_swiper1_1);

//   } else if ($('#index-swiper2').hasClass('swiper-slide-active')) {
//     $(".swiper-bl-three-el .swiper-slide").removeClass('active');
//     // $("#index-swiper2-2").addClass('active');
//     swiper_bl_three_el.slideTo(index_swiper2_2);
//   } else if ($('#index-swiper3').hasClass('swiper-slide-active')) {
//     $(".swiper-bl-three-el .swiper-slide").removeClass('active');
//     // $("#index-swiper3-3").addClass('active');
//     swiper_bl_three_el.slideTo(index_swiper3_3);
//   }
// });
// ----- END THREE ELEMENTS -----
// ----------------------------------------
// // ----- POPULAR CATEGORY -----
// let swiper_p_c_elements1 = new Swiper('.swiper-p-c-elements1', {
//   spaceBetween: 30,
//   slidesPerView: 2,
//   loop: false,
//   speed: 800,
//   direction: "vertical",
//   // slidesPerColumn: 3,
//   autoHeight: false,
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
//   // navigation: {
//   // nextEl: '.swiper-button-next__index',
//   // prevEl: '.swiper-button-prev__index',
//   // },
//   // slidesPerGroup: 1,
//   // effect: "fade",
//   // allowTouchMove: true,
//   cssMode: false,
//   breakpoints: {
//     320: {
//       direction: "horizontal",
//       slidesPerView: 1,
//       // cssMode: true,
//     },
//     481: {
//       direction: "horizontal",
//       slidesPerView: "auto",
//     },
//     751: {
//       direction: "vertical",
//       slidesPerView: 2,
//       cssMode: false,
//     }
//   }
// });
// let swiper_p_c_elements2 = new Swiper('.swiper-p-c-elements2', {
//   spaceBetween: 30,
//   slidesPerView: 2,
//   loop: false,
//   speed: 800,
//   direction: "vertical",
//   // slidesPerColumn: 3,
//   autoHeight: false,
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     draggable: true,
//   },
//   // mousewheel: {
//   //   enable: true
//   // },
//   // navigation: {
//   // nextEl: '.swiper-button-next__index',
//   // prevEl: '.swiper-button-prev__index',
//   // },
//   // slidesPerGroup: 1,
//   // effect: "fade",
//   // allowTouchMove: true,
//   cssMode: false,
//   breakpoints: {
//     320: {
//       direction: "horizontal",
//       slidesPerView: 1,
//       // cssMode: true,
//     },
//     481: {
//       direction: "horizontal",
//       slidesPerView: "auto",
//     },
//     751: {
//       direction: "vertical",
//       slidesPerView: 2,
//       cssMode: false,
//     }
//   }
// });

// const btn_podveska1 = document.querySelector('#btn-podveska1');
// const btn_podveska2 = document.querySelector('#btn-podveska2');
// const btn_podveska3 = document.querySelector('#btn-podveska3');
// const btn_podveska4 = document.querySelector('#btn-podveska4');

// btn_podveska1.addEventListener('click', () => {
//   swiper_p_c_elements1.slideTo(0);
// });
// btn_podveska2.addEventListener('click', () => {
//   swiper_p_c_elements1.slideTo(1);
// });
// btn_podveska3.addEventListener('click', () => {
//   swiper_p_c_elements1.slideTo(2);
// });
// btn_podveska4.addEventListener('click', () => {
//   swiper_p_c_elements1.slideTo(3);
// });

// const btn_podveska2_1 = document.querySelector('#btn-podveska2-1');
// const btn_podveska2_2 = document.querySelector('#btn-podveska2-2');
// const btn_podveska2_3 = document.querySelector('#btn-podveska2-3');
// const btn_podveska2_4 = document.querySelector('#btn-podveska2-4');

// btn_podveska2_1.addEventListener('click', () => {
//   swiper_p_c_elements2.slideTo(0);
// });
// btn_podveska2_2.addEventListener('click', () => {
//   swiper_p_c_elements2.slideTo(1);
// });
// btn_podveska2_3.addEventListener('click', () => {
//   swiper_p_c_elements2.slideTo(2);
// });
// btn_podveska2_4.addEventListener('click', () => {
//   swiper_p_c_elements2.slideTo(3);
// });
// ----- END POPULAR CATEGORY -----
// ----------------------------------------
// ----- END INDEX -----
// ========================================
// ----- TOVAR -----
// ----------------------------------------
// ---------- BIG SLIDERS ----------
// ----------------------------------------
let two_slider__mini_slide = new Swiper(".two-slider__mini-slide", {
  spaceBetween: 15,
  slidesPerView: 5,
  speed: 800,
  direction: "vertical",
  spaceBetween: 0,

  // navigation: {
  // nextEl: ".swiper-button-up",
  // prevEl: ".swiper-button-down",
  // },
  // freeMode: true,
  // watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: "horizontal",
      // slidesPerView: 1,
      // cssMode: true,
    },
    481: {
      direction: "horizontal",
      // slidesPerView: "auto",
    },
    601: {
      direction: "vertical",
    }
  }
});

let two_slider__big_slide = new Swiper(".two-slider__big-slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  // pagination: {
  // el: '.swiper-pagination',
  // clickable: true,
  // },
  // navigation: {
  // nextEl: ".swiper-button-prev--card",
  // prevEl: ".swiper-button-next--card",
  // },
  thumbs: {
    swiper: two_slider__mini_slide,
  },
});
// ---------- END BIG SLIDERS ----------
// ----------------------------------------
// ----- SIMILAR PRODUCTS -----
// let sim_product = document.querySelectorAll('.swiper-similar-products');

// sim_product.forEach((el) => {
// });
let swiper_similar_products = new Swiper('.swiper-similar-products', {
  spaceBetween: 23,
  slidesPerView: 5,
  loop: false,
  speed: 800,
  scrollbar: {
    el: '.sp-swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.js-sp-swiper-button-next',
    prevEl: '.js-sp-swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    601: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 15,
      slidesPerView: 4,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 23,

    }
  }
});

let swiper_similar_products_2 = new Swiper('.swiper-similar-products2', {
  spaceBetween: 23,
  slidesPerView: 5,
  loop: false,
  speed: 800,
  scrollbar: {
    el: '.sp-swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.js-sp-swiper-button-next2',
    prevEl: '.js-sp-swiper-button-prev2',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    601: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    767: {
      spaceBetween: 15,
      slidesPerView: 4,
    },
    1025: {
      slidesPerView: 5,
      spaceBetween: 23,

    }
  }
});
// ----- END SIMILAR PRODUCTS -----
// ----------------------------------------
// ----- POPUP -----
let two_slider__mini_slide_pop = new Swiper(".two-slider__mini-slide-pop", {
  spaceBetween: 15,
  slidesPerView: 5,
  speed: 800,
  direction: "vertical",
  spaceBetween: 0,

  // navigation: {
  // nextEl: ".swiper-button-up",
  // prevEl: ".swiper-button-down",
  // },
  // freeMode: true,
  // watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: "horizontal",
      // slidesPerView: 1,
      // cssMode: true,
    },
    481: {
      direction: "horizontal",
      // slidesPerView: "auto",
    },
    601: {
      direction: "vertical",
    }
  }
});

let two_slider__big_slide_pop = new Swiper(".two-slider__big-slide-pop", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  // pagination: {
  // el: '.swiper-pagination',
  // clickable: true,
  // },
  // navigation: {
  // nextEl: ".swiper-button-prev--card",
  // prevEl: ".swiper-button-next--card",
  // },
  thumbs: {
    swiper: two_slider__mini_slide_pop,
  },
});
// ----- END POPUP -----
// ----------------------------------------
// ----- END TOVAR -----
// ----------------------------------------
// ========================================



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
// ========================================







