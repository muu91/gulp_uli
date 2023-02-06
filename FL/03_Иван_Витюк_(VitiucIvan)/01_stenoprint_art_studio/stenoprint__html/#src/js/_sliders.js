
// ========================================
// ---------- VARIABLES ----------
// let windowWidthSwiper = document.documentElement.clientWidth;
// ---------- END VARIABLES ----------
// ========================================
// ---------- INDEX ----------
// ----------------------------------------

const u_swiper_header = new Swiper('.js-swiper-header', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 30,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ----------------------------------------


const u_swiper_popular = new Swiper('.js-swiper-popular', {
  observer: true,
  slidesPerView: 4,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

$(document).ready(function () {
  let tabFilterBtn = $("[data-btns]");
  tabFilterBtn.on("click", function (e) {
    e.preventDefault();
    $(".js-filter-menu button").removeClass('active');
    $(this).addClass('active');
    let tabBtn_click = $(this).data('btns');
    $("[data-slider]").each(function () {
      let tabContent = $(this).data('slider');
      if (tabContent != tabBtn_click) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
});

// $(document).ready(function () {

//   let tabFilterBtn = $("[data-btns]");
//   tabFilterBtn.on("click", function (e) {
//     e.preventDefault();
//     $(".js-filter-menu button").removeClass('active');
//     $(this).addClass('active');
//     let tabBtn_click = $(this).data('btns');
//     $("[data-slide]").each(function () {
//       let tabContent = $(this).data('slide');
//       if (tabContent != tabBtn_click) {
//         $(this).hide();
//       } else {
//         $(this).show();
//       }
//     });
//     u_swiper_popular.updateSize();
//     u_swiper_popular.updateSlides();
//     u_swiper_popular.updateSlidesClasses();
//     // u_swiper_popular.update();

//     return false;
//   });
// });

// ----------------------------------------


const u_swiper_blog = new Swiper('.js-swiper-blog', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  autoHeight: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

const u_swiper_blog2 = new Swiper('.js-swiper-blog2', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  autoHeight: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 3,
      },
    },
    601: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
    },
    1024: {
      slidesPerView: 3,

    },
  }
});


// let u_swiper_services = document.querySelector('.js-swiper-services');
// let mySwiperServices;

// function mobileSlider() {
//   if (window.innerWidth < 769 && u_swiper_services.dataset.mobile == "false") {
//     mySwiperServices = new Swiper(u_swiper_services, {
//       slidesPerView: 3,
//       speed: 800,
//       spaceBetween: 10,
//       loop: true,
//       autoplay: false,
//       pagination: {
//         el: '.swiper-pagination',
//         type: 'progressbar',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       breakpoints: {
//         320: {
//           slidesPerView: 1,
//         },
//         600: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//       }
//     });
//     u_swiper_services.dataset.mobile = 'true';
//   }
//   if (window.innerWidth >= 769) {
//     u_swiper_services.dataset.mobile = "false";
//     if (u_swiper_services.classList.contains('swiper-horizontal')) {
//       mySwiperServices.destroy();
//     }
//   }
// }
// mobileSlider();
// window.addEventListener('resize', () => {
//   mobileSlider();
// });

// ----------------------------------------


const u_swiper_mod_places = new Swiper('.js-swiper-mod_places', {
  slidesPerView: 1,
  speed: 800,
  spaceBetween: 10,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   600: {
  //     slidesPerView: 2,
  //   },
  //   1024: {
  //     slidesPerView: 3,
  //   },
  // }
});
// ----- END INDEX -----
// ----------------------------------------
// ----- PHOTO -----
const u_swiper_header_photo = new Swiper('.js-swiper-header_photo', {
  observer: true,
  slidesPerView: 1,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



const u_swiper_assortment = new Swiper('.js-swiper-assortment', {
  observer: true,
  slidesPerView: 4,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});


const u_swiper_place = new Swiper('.js-swiper-places', {
  observer: true,
  slidesPerView: 2,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    }
  }
});

const u_swiper_place_img = new Swiper('.js-swiper-places_img', {
  observer: true,
  slidesPerView: 1,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   600: {
  //     slidesPerView: 2,
  //   },
  //   // 1024: {
  //   //   slidesPerView: 3,
  //   // },
  //   // 1200: {
  //   //   slidesPerView: 4,
  //   // }
  // }
});

const u_swiper_reviews = new Swiper('.js-swiper-reviews', {
  observer: true,
  slidesPerView: 4,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});


const u_swiper_materials = new Swiper('.js-swiper-materials', {
  observer: true,
  slidesPerView: 6,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 6,
    }
  }
});

// ----- END PHOTO -----
// ----------------------------------------
// ----- END ABOUT -----
const u_swiper_activity = new Swiper('.js-swiper-activity', {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 10,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 2,
    }
  }
});

// ----- END ABOUT -----
// ----------------------------------------
// ----- SERVICES -----

const u_swiper_slide_one = new Swiper('.js-swiper-slide_one', {
  observer: true,
  slidesPerView: 1,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const u_swiper_shah_cont = new Swiper('.js-swiper-shah_cont', {
  observer: true,
  slidesPerView: 1,
  runCallbacksOnInit: true,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


const u_swiper_certificates = new Swiper('.js-swiper-certificates', {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 10,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
    1301: {
      slidesPerView: 4,
    }
  }
});


const u_swiper_painting = new Swiper('.js-swiper-painting', {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
    1301: {
      slidesPerView: 4,
    }
  }
});

const u_swiper_see_also = new Swiper('.js-swiper-see_also', {
  slidesPerView: 3,
  speed: 800,
  spaceBetween: 10,
  loop: false,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 3,
    },
  }
});


// ----- END SERVICES -----
// ----------------------------------------
// ----- MORE -----
const u_swiper_more = new Swiper('.js-swiper-more', {
  slidesPerView: 2,
  speed: 800,
  spaceBetween: 10,
  loop: true,
  autoplay: false,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    601: {
      slidesPerView: 2,
    }
  }
});

// ----- END MORE -----
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






