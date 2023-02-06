
// ========================================

// ---------- VARIABLES ----------
// let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- INTEREST -----
let bl_interest__slider = new Swiper('.bl_interest__slider', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 270,
  navigation: {
    nextEl: '.swiper-button-next__long',
    prevEl: '.swiper-button-prev__long',
  },
  speed: 800,
  slidesPerGroup: 1,
  // allowTouchMove: false,
  // cssMode: true,
  breakpoints: {
    320: {
      spaceBetween: 60,

    },
    768: {
      spaceBetween: 70,

    },
    1024: {
      spaceBetween: 180,

    },
    1440: {
      spaceBetween: 270,
    }
  },
  on: {
    slideChangeTransitionStart: function () {
      //     // ----------------------------------------
      //     // ----- SLIDE 1-10 -----
      //     // $('.blue_blocks__item_active ').removeClass('aos-init').removeClass('aos-animate');
      //     // ----- END SLIDE 1-10 -----
      //     // ----------------------------------------
    },
    slideChangeTransitionEnd: function () {
      // ----------------------------------------
      // ----- SLIDE 1-10 -----
      // $('.blue_blocks__item_active').show(0);
      // ----- END SLIDE 1-10 -----
      // ----------------------------------------
    },
  }
});
// ----- END INTEREST -----
// ----------------------------------------
// ----- PHOTO VIDEO -----
let bl_photo_video__slider = new Swiper('.bl_photo_video__slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  freeMode: true,
  initialSlide: 0,
  navigation: {
    nextEl: '.swiper-button-next__little',
    prevEl: '.swiper-button-prev__little',
  },
  speed: 500,
  breakpoints: {
    320: {
      initialSlide: 3,
    },
    600: {
      initialSlide: 0,
    },
  },
});
// ----- END PHOTO VIDEO -----
// ----------------------------------------
// ----- OUR WORKS -----
let our_works__slider_mini = document.querySelectorAll('.bl_our_works__slider');
let our_works__slider_big = document.querySelectorAll('.bl_our_works__slider2');

for (let i = 0; i <= our_works__slider_mini.length; i++) {
  let bl_our_works__slider = new Swiper(our_works__slider_mini[i], {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      993: {
        spaceBetween: 20,
      },
      1440: {
        spaceBetween: 30,
      },
    },
  });
  let bl_our_works__slider2 = new Swiper(our_works__slider_big[i], {
    spaceBetween: 0,
    effect: "fade",
    thumbs: {
      swiper: bl_our_works__slider,
    },
  });
}


// our_works__slider_big.forEach(element => {
//   let bl_our_works__slider2 = new Swiper(element, {
//     spaceBetween: 0,
//     effect: "fade",
//     thumbs: {
//       swiper: bl_our_works__slider,
//     },
//   });
// });



// ----- END OUR WORKS -----
// ----------------------------------------
// ----- RECOMMENDATIONS -----
let bl_recommendations__slider = new Swiper('.bl_recommendations__slider', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  initialSlide: 2,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next__little',
    prevEl: '.swiper-button-prev__little',
  },
  speed: 500,
  breakpoints: {
    320: {
      initialSlide: 0,
      spaceBetween: 10,

    },
    600: {
      initialSlide: 2,
      spaceBetween: 30,
    },
  },
});
// ----- END RECOMMENDATIONS -----
// ----------------------------------------
// ----------------------------------------
// ---------- END INDEX ----------
// ========================================
// ---------- ABOUT ----------
// ----------------------------------------
// ---------- PHOTO PROCESS ----------
let bl_photo_process__slider = new Swiper('.bl_photo_process__slider', {
  slidesPerView: 1,
  spaceBetween: 150,
  initialSlide: 0,
  speed: 500,
  pagination: {
    el: ".swiper-pagination__number",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + "</span>";
    },
  },
  breakpoints: {
    320: {
      spaceBetween: 10,
      freeMode: true,
      width: 240,
    },
    601: {
      spaceBetween: 60,
      width: null,

    },
    769: {
      spaceBetween: 100,
    },
    1025: {
      spaceBetween: 150,

    },
  },
});
// ---------- END PHOTO PROCESS ----------
// ----------------------------------------
// ---------- PARTNERS ----------
let bl_partners__slider = new Swiper('.bl_partners__slider', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 500,
  // freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next__little',
    prevEl: '.swiper-button-prev__little',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,

    },
    600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    769: {
      spaceBetween: 20,
    },
    1025: {
      spaceBetween: 30,
    }
  },
});
// ---------- END PARTNERS ----------
// ----------------------------------------
// ---------- END ABOUT ----------
// ========================================
// ----------------------------------------
// ---------- PORTFOLIO ----------
let bl_portfolio__sliders = document.querySelectorAll('.bl_portfolio__sliders');

for (let i = 0; i <= bl_portfolio__sliders.length; i++) {
  let bl_portfolio__slider = new Swiper(bl_portfolio__sliders[i], {
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 150,
    speed: 500,
    freeMode: true,
    // cssMode: true,
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      600: {
        spaceBetween: 70,
      },
      993: {
        spaceBetween: 100,
      },
      1025: {
        spaceBetween: 150,
      }
    },
  });
}
// ---------- END PORTFOLIO ----------
// ----------------------------------------
// ========================================
// ---------- WORK EXAMPLE ----------

let bl_work_examples__sliders = document.querySelectorAll('.bl_work_examples__sliders');
let bl_work_examples__slider_big = document.querySelectorAll('.bl_work_examples__slider_big');
let bl_work_examples__slider_mini = document.querySelectorAll('.bl_work_examples__slider_mini');

for (let i = 0; i <= bl_work_examples__sliders.length; i++) {

  let bl_work_examples__sliders_2 = new Swiper(bl_work_examples__sliders[i], {
    slidesPerView: "auto",
    spaceBetween: 150,
    speed: 500,
    // freeMode: true,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination__number",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index < 10 ? '0' + (index + 1) : (index + 1)) + "</span>";
      },
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        freeMode: true,
      },
      601: {
        spaceBetween: 70,
      },
      993: {
        spaceBetween: 100,
      },
      1440: {
        spaceBetween: 150,
      },
    },
  });

}

for (let i = 0; i <= bl_work_examples__slider_big.length; i++) {

  let bl_work_examples__slider_mini_2 = new Swiper(bl_work_examples__slider_mini[i], {
    slidesPerView: 10,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        spaceBetween: 10,
        slidesPerView: 4,
      },
      601: {
        slidesPerView: 10,
      },
      993: {
        spaceBetween: 20,
      },
      1440: {
        spaceBetween: 30,
      },
    },
    spaceBetween: 10,

  });

  let bl_work_examples__slider_big_2 = new Swiper(bl_work_examples__slider_big[i], {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    thumbs: {
      swiper: bl_work_examples__slider_mini_2,
    },

  });
}

// ---------- END WORK EXAMPLE ----------
// ========================================




