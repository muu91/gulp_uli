// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ----- AOS -----
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
// });

// ----- END AOS -----
// ----------------------------------------
// ----- ADVANTAGES -----
window.onload = function () {
  var scr = $(".bl_advantages__scroll");
  scr.mousedown(function () {
    var startX = this.scrollLeft + event.pageX;
    // var startY = this.scrollTop + event.pageY; // Для вериткальной прокрутки тоже
    scr.mousemove(function () {
      this.scrollLeft = startX - event.pageX;
      // this.scrollTop = startY - event.pageY;
      return false;
    });
  });
  $(window).mouseup(function () {
    scr.off("mousemove");
  });
}
// ----- END ADVANTAGES -----
// ----------------------------------------
// ----------------------------------------
// ----- AREA -----
let areaIndex2 = document.getElementById('area');
let area_popup = document.getElementById('area_popup');

// console.log(areaIndex2)
if (areaIndex2 !== null) {

  let areaIndex = document.getElementById('area');
  noUiSlider.create(areaIndex, {
    start: 50,
    step: 1,
    connect: 'lower',
    range: {
      'min': 20,
      'max': 300,
    },
    format: {
      to: function (value) {
        return Math.ceil(value);
      },
      from: function (value) {
        return Number(value);
      }
    }
  });

  let area__top = document.getElementById('area__number');
  areaIndex.noUiSlider.on('update', function (values, handle) {
    area__top.innerHTML = values[handle];
  });
}

if (area_popup !== null) {

  let areaIndex_popup = document.getElementById('area_popup');
  noUiSlider.create(areaIndex_popup, {
    start: 50,
    step: 1,
    connect: 'lower',
    range: {
      'min': 20,
      'max': 300,
    },
    format: {
      to: function (value) {
        return Math.ceil(value);
      },
      from: function (value) {
        return Number(value);
      }
    }
  });
  let area__top_popup = document.getElementById('area__number_popup');
  areaIndex_popup.noUiSlider.on('update', function (values, handle) {
    area__top_popup.innerHTML = values[handle];
  });
}

// ----- END AREA -----
// ----------------------------------------
// ---------- END INDEX ----------
// ========================================
// ----------------------------------------
// ---------- ABOUT ----------

// ---------- END ABOUT ----------
// ----------------------------------------
// ========================================
// ----------------------------------------
// ---------- SERVICE PACKAGE ART ----------
window.onload = function () {
  let scr_ol = $(".ol_items__scroll");
  scr_ol.mousedown(function () {
    let startX = this.scrollLeft + event.pageX;
    // var startY = this.scrollTop + event.pageY; // Для вериткальной прокрутки тоже
    scr_ol.mousemove(function () {
      this.scrollLeft = startX - event.pageX;
      // this.scrollTop = startY - event.pageY;
      return false;
    });
  });
  $(window).mouseup(function () {
    scr_ol.off("mousemove");
  });
}
// ---------- END SERVICE PACKAGE ART ----------
// ----------------------------------------
// ========================================

