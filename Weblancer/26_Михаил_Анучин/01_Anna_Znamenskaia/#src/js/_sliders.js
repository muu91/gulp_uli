
// ========================================
// ---------- VARIABLES ----------
// let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------

const u_swiper_programma = new Swiper('.js-swiper-programma', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 100,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 10
    },
    767: {
      spaceBetween: 40
    },
    991: {
      spaceBetween: 100
    },

  }
});
// ----------------------------------------

// ---------- END INDEX ----------
// ========================================
// ========================================
// ---------- MAIN ----------
const u_swiper_rev_student = new Swiper('.js-swiper-rev_student', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 100,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 10
    },
    767: {
      spaceBetween: 40
    },
    991: {
      spaceBetween: 100
    },

  }
});
// ---------- END MAIN ----------
// ========================================
// ========================================
// ---------- ARTICLES ----------
const u_swiper_art_header = new Swiper('.js-swiper-art_header', {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 100,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 10
    },
    767: {
      spaceBetween: 40
    },
    991: {
      spaceBetween: 100
    },

  }
});
// ---------- END ARTICLES ----------
// ========================================
// ----- SLIDES -----
// ----------------------------------------
// ----- ADVANTAGES -----
// let u_swiper_advantages = document.querySelector('.js-swiper-advantages');

// function desktopSlider() {
//   if (window.innerWidth > 600 && u_swiper_advantages.dataset.desktop == "false") {
//     mySwiperAdvantages = new Swiper(u_swiper_advantages, {
//       slidesPerView: 4,
//       speed: 1000,
//       spaceBetween: 40,
//       loop: false,
//       autoplay: false,
//       breakpoints: {
//         601: {
//           slidesPerView: 2,
//           spaceBetween: 20
//         },
//         991: {
//           slidesPerView: 3,
//           spaceBetween: 40
//         },
//         1200: {
//           slidesPerView: 4,
//           spaceBetween: 40
//         }
//       }
//     });
//     u_swiper_advantages.dataset.desktop = 'true';
//   }
//   if (window.innerWidth <= 600) {
//     u_swiper_advantages.dataset.desktop = "false";
//     if (u_swiper_advantages.classList.contains('swiper-initialized')) {
//       mySwiperAdvantages.destroy();
//     }
//   }
// }
// desktopSlider();
// window.addEventListener('resize', () => {
//   desktopSlider();
// });
// ----- END ADVANTAGES -----
// ----------------------------------------
// ----- TWO SLIDERS -----
// let swiper_watch = document.querySelectorAll('.swiper-watch');
// let swiper_minute = document.querySelectorAll('.swiper-minute');

// swiper_watch.forEach((el) => {
//   let watch = new Swiper(el, {
//     slidesPerView: 5,
//     speed: 1000,
//     spaceBetween: 6,
//     loop: true,
//     autoplay: false,
//     direction: "vertical",
//     centeredSlides: true,
//   });
// })

// swiper_minute.forEach((el) => {
//   let minute = new Swiper(el, {
//     slidesPerView: 5,
//     speed: 1000,
//     spaceBetween: 6,
//     loop: true,
//     autoplay: false,
//     direction: "vertical",
//     centeredSlides: true,
//   });
// })

// ----- END TWO SLIDERS -----
// ----------------------------------------
// ----- END SLIDES -----
// ----------------------------------------
// ========================================






