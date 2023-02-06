// --------------------
let sl_cat = new Swiper(".category .swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".category .swiper-button-nextt",
    prevEl: ".category .swiper-button-prevv"
  }
});

let sl_type = new Swiper(".type .swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  navigation: {
    nextEl: ".type .swiper-button-nextt",
    prevEl: ".type .swiper-button-prevv"
  }
});
// --------------------
let dashpass_slider = document.querySelectorAll('.dashpass-slider-swiper');
dashpass_slider.forEach((el) => {
  let product_slider_swiper = new Swiper(el, {
    spaceBetween: 16,
    breakpoints: {
      767: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      },
    },
    navigation: {
      nextEl: el.closest(".dashpass-slider").querySelector('.swiper-button-nextt'),
      prevEl: el.closest(".dashpass-slider").querySelector('.swiper-button-prevv')
    },
  });
})
// --------------------
let product_slider = document.querySelectorAll('.product-slider-swiper');
product_slider.forEach((el) => {
  let product_slider_swiper = new Swiper(el, {
    spaceBetween: 16,
    breakpoints: {
      767: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      },
    },
    navigation: {
      nextEl: el.closest(".product-slider").querySelector('.swiper-button-nextt'),
      prevEl: el.closest(".product-slider").querySelector('.swiper-button-prevv')
    },
  });
})
// --------------------
let product_slider2 = document.querySelectorAll('.product-slider-swiper2');
console.log(product_slider);
product_slider2.forEach((el) => {
  let product_slider_swiper2 = new Swiper(el, {
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 6
      },
      500: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      },
    },
    navigation: {
      nextEl: el.closest(".product-slider").querySelector('.swiper-button-nextt'),
      prevEl: el.closest(".product-slider").querySelector('.swiper-button-prevv')
    },
  });
})
// --------------------
let burger = document.querySelector(".header__btn-burger");
let menu = document.querySelector(".menu");
let closeMenu = document.querySelector(".menu__close");

burger.addEventListener("click", (() => {
  menu.classList.toggle("menu--active")
}));
closeMenu.addEventListener("click", (() => {
  menu.classList.toggle("menu--active")
}));
// --------------------


// --------------------
