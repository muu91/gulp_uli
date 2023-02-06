
// ========================================
// ---------- VARIABLES ----------
let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- SLIDES -----
// ----------------------------------------
// ----- ADVANTAGES -----
let u_swiper_advantages = document.querySelector('.js-swiper-advantages');
let mySwiperAdvantages;

function desktopSlider() {
  if (window.innerWidth > 600 && u_swiper_advantages.dataset.desktop == "false") {
    mySwiperAdvantages = new Swiper(u_swiper_advantages, {
      slidesPerView: 4,
      speed: 1000,
      spaceBetween: 40,
      loop: false,
      autoplay: false,
      breakpoints: {
        601: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }
    });
    u_swiper_advantages.dataset.desktop = 'true';
  }
  if (window.innerWidth <= 600) {
    u_swiper_advantages.dataset.desktop = "false";
    if (u_swiper_advantages.classList.contains('swiper-initialized')) {
      mySwiperAdvantages.destroy();
    }
  }
}
desktopSlider();
window.addEventListener('resize', () => {
  desktopSlider();
});
// ----- END ADVANTAGES -----
// ----------------------------------------
// ----- DRIVER -----
let u_swiper_drivers = document.querySelector('.js-swiper-drivers');
let mySwiperDrivers;

function desktopSliderDriver() {
  if (window.innerWidth < 1201 && u_swiper_drivers.dataset.desktop == "false") {
    mySwiperDrivers = new Swiper(u_swiper_drivers, {
      slidesPerView: "auto",
      speed: 1000,
      spaceBetween: 20,
      loop: false,
      autoplay: false,
    });
    u_swiper_drivers.dataset.desktop = 'true';
  }
  if (window.innerWidth >= 1201) {
    u_swiper_drivers.dataset.desktop = "false";
    if (u_swiper_drivers.classList.contains('swiper-initialized')) {
      mySwiperDrivers.destroy();
    }
  }
}
desktopSliderDriver();
window.addEventListener('resize', () => {
  desktopSliderDriver();
});
// ----- END DRIVER -----
// ----------------------------------------
// ----- REVIEWS -----

const mySwiperReviews = new Swiper(".js-swiper-reviews", {
  slidesPerView: "auto",
  speed: 1000,
  spaceBetween: 20,
  loop: false,
  autoplay: false,
});
// ----- END REVIEWS -----
// ----------------------------------------
// ----- END SLIDES -----
// ----------------------------------------
// ========================================







