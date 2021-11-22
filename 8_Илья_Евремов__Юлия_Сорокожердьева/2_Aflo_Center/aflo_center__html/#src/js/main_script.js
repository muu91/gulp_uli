var windowWidthSwiper = document.documentElement.clientWidth;


// --------------------
// BLOCK HEADER
const swiper_bl_header = new Swiper('.bl_header__swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  // spaceBetween: 3000,
  // effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 800,
});
// END BLOCK HEADER
// --------------------
// --------------------
// BLOCK BRANCHES
const swiper_bl_branches = new Swiper('.bl_branches__swiper', {
  loop: false,
  slidesPerView: 3,
  // spaceBetween: 3000,
  // effect: "fade",
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 800,
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  breakpoints: {
    320: {
      // slidesPerView: 'auto',
      spaceBetween: 10,
    },
    // 500: {
    //   // slidesPerView: 3,
    //   spaceBetween: 10,

    // },
    1024: {
      spaceBetween: 20,

    },
    1200: {
      spaceBetween: 30,
    },
  },
});
// END BLOCK BRANCHES
// --------------------
// --------------------
// BLOCK NEWS
if (windowWidthSwiper <= 600) {
  const swiper_bl_news = new Swiper('.bl_news__swiper', {
    loop: false,
    slidesPerView: 3,
    // spaceBetween: 3000,
    // effect: "fade",
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 800,
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      601: {
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 20,
      },
    }
  });
}
// END BLOCK NEWS
// --------------------
// --------------------
// BLOCK STOCK
if (windowWidthSwiper <= 600) {
  const swiper_bl_stock__swiper = new Swiper('.bl_stock__swiper', {
    loop: false,
    slidesPerView: 3,
    // spaceBetween: 3000,
    // effect: "fade",
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 800,
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      601: {
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 20,
      },
    }
  });
}
// END BLOCK STOCK
// --------------------
// ABOUT
const swiper_bl_about__swiper = new Swiper('.bl_about__swiper', {
  loop: false,
  slidesPerView: 1,
  // spaceBetween: 3000,
  effect: "fade",
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  spaceBetween: 30,
});
// END ABOUT
// --------------------
// SERVICE IN
const swiper_bl_service_in__slider = new Swiper('.bl_service_in__swiper', {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 3000,
  // effect: "fade",
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  spaceBetween: 30,
});

// END SERVICE IN
// --------------------
// DOCTORS IN
if (windowWidthSwiper <= 425) {
  const swiper_bl_doctor_in__swiper = new Swiper('.bl_doctor_in__swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 3000,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    spaceBetween: 30,
    autoHeight: true,

  });
}
// END DOCTORS IN
// --------------------
// ABOUT PAGE
if (windowWidthSwiper <= 425) {
  const swiper_bl_requisites__swiper = new Swiper('.bl_requisites__swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 3000,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    spaceBetween: 30,
    autoHeight: true,

  });
}
// END ABOUT PAGE
// --------------------
// LICENSES AND CERTIFICATES
if (windowWidthSwiper <= 425) {
  const swiper_bl_lic_cert__swiper = new Swiper('.bl_lic_cert__swiper', {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 3000,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    spaceBetween: 10,
    autoHeight: true,

  });
}

// END LICENSES AND CERTIFICATES
// --------------------
// ABOUT SPEC
const bl_about_spec__swiper__swiper = new Swiper('.bl_about_spec__swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 3000,
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  spaceBetween: 30,
  autoHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,

    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,

    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,

    },
  }

});
// END ABOUT SPEC
// --------------------
// ADDRESS AND PHONES
if (windowWidthSwiper <= 425) {
  const swiper_bl_add_phone__swiper = new Swiper('.bl_add_phone__swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 3000,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    spaceBetween: 10,
    // autoHeight: true,

  });
}
// END ADDRESS AND PHONES
// --------------------
// PA
if (windowWidthSwiper <= 1024) {
  const swiper_bl_profile__swiper = new Swiper('.bl_profile__swiper', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 3000,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    spaceBetween: 10,
    // autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      426: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
    }
  });
}
// END PA
// --------------------
// E APPOINTMENT
if (windowWidthSwiper <= 600) {
  const swiper_bl_e_a_doctors__swiper = new Swiper('.bl_e_a_doctors__swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 3000,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 800,
    spaceBetween: 10,
    // autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      426: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 3,
      },
    }

  });
}

// END E APPOINTMENT
// --------------------
// --------------------
// CALENDAR
// var events = [
//   { 'Date': new Date(2016, 6, 7), 'Title': 'Doctor appointment at 3:25pm.' },
//   { 'Date': new Date(2016, 6, 18), 'Title': 'New Garfield movie comes out!', 'Link': 'https://garfield.com' },
//   { 'Date': new Date(2016, 6, 27), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts' },
// ];
// var settings = {
//   Color: '',
//   LinkColor: '',
//   NavShow: true,
//   NavVertical: false,
//   NavLocation: '',
//   DateTimeShow: true,
//   DateTimeFormat: 'mmm, yyyy',
//   DatetimeLocation: '',
//   EventClick: '',
//   EventTargetWholeDay: false,
//   DisabledDays: [],
//   // ModelChange: model,
// };
// var element = document.getElementById('calendar');
// caleandar(element, events, settings);
// END CALENDAR
// --------------------
// --------------------










