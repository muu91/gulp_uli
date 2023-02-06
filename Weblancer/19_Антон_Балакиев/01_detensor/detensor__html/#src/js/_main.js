// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ---------- WHOM ----------
jQuery(document).ready(function () {
  let tabBtn = $("[data-tab-btn]");
  tabBtn.on("click", function (e) {
    e.preventDefault();
    $('.bl-whom__btns > ul > li > button').removeClass('active');
    $(this).addClass('active');
    let tabBtn_click = $(this).data('tab-btn');
    $("[data-tab-content]").each(function () {
      let tabContent = $(this).data('tab-content');
      if (tabContent != tabBtn_click) {
        $(this).hide();
      } else {
        // $(this).slideDown();
        $(this).fadeIn(1200);

      }
    });
  });
  $(".bl-whom__btns > ul > li:first > button").click();
});
// ---------- WHOM ----------
// ----------------------------------------
// ========================================
// ----------------------------------------
// ---------- TOVAR CONTENT ----------
jQuery(document).ready(function () {
  let tabBtnTovar = $("[data-tab-btn-tovar]");
  tabBtnTovar.on("click", function (e) {
    e.preventDefault();
    $('.bl-tovar-menu__content > ul > li > a').removeClass('active');
    $(this).addClass('active');
    let tabBtn_clickTovar = $(this).data('tab-btn-tovar');
    $("[data-tab-content-tovar]").each(function () {
      let tabContentTovar = $(this).data('tab-content-tovar');
      if (tabContentTovar != tabBtn_clickTovar) {
        $(this).hide();
      } else {
        // $(this).slideDown();
        $(this).fadeIn(200);
      }
    });
  });
  $(".bl-tovar-menu__content > ul > li:first > a").click();
});
// ---------- END TOVAR CONTENT ----------
// ----------------------------------------
// ========================================

// ANIMATION TO SCROLL
// let animScroll = document.querySelectorAll('.anim-scroll');
// if (animScroll.length > 0) {
//   window.addEventListener('scroll', animOnScroll);
//   function animOnScroll() {
//     for (let index = 0; index < animScroll.length; index++) {
//       const animItem = animScroll[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }
//       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('animation-go');
//       }
//       // else {
//       //   animItem.classList.remove('animation-go');
//       // }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect();
//     const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//   }
//   setTimeout(() => {
//     animOnScroll();
//   }, 300);
// }
// END ANIMATION TO SCROLL
// ========================================
// PARALLAX
// "use strict"
// window.onload = function () {

//   const parallax = document.querySelector('.header-parallax');

//   if (parallax) {
//     const stress = document.querySelector('.stress');
//     const cruelty = document.querySelector('.cruelty');
//     const intolerance = document.querySelector('.intolerance');
//     const panic = document.querySelector('.panic');
//     const hyperactivity = document.querySelector('.hyperactivity');
//     const irritability = document.querySelector('.irritability');

//     // Коэффициенты
//     const for05 = 0.5;
//     const for06 = 0.6;
//     const for07 = 0.7;
//     const for08 = 0.8;
//     const for09 = 0.9;
//     const for1 = 1;

//     const for20 = 20;
//     const for10 = 10;

//     // Скорость
//     const speed = 0.05;

//     // Позиции
//     let positionX = 0, positionY = 0;
//     let coordXprocent = 0, coordYprocent = 0;

//     function setMouseParallaxStyle() {
//       const distX = coordXprocent - positionX;
//       const distY = coordYprocent - positionY;

//       positionX = positionX + (distX * speed);
//       positionY = positionY + (distY * speed);

//       stress.style.cssText = `transform: translate(${positionX / for05}%,${positionY / for05}%);`
//       cruelty.style.cssText = `transform: translate(${positionX / for06}%,${positionY / for06}%);`
//       intolerance.style.cssText = `transform: translate(${positionX / for07}%,${positionY / for07}%);`
//       panic.style.cssText = `transform: translate(${positionX / for08}%,${positionY / for08}%);`
//       hyperactivity.style.cssText = `transform: translate(${positionX / for09}%,${positionY / for09}%);`
//       irritability.style.cssText = `transform: translate(${positionX / for1}%,${positionY / for1}%);`

//       requestAnimationFrame(setMouseParallaxStyle);

//     }
//     setMouseParallaxStyle();

//     parallax.addEventListener('mousemove', function (e) {

//       const parallaxWidth = parallax.offsetWidth;
//       const parallaxHeight = parallax.offsetHeight;

//       const coordX = e.pageX - parallaxWidth / 2;
//       const coordY = e.pageY - parallaxHeight / 2;

//       coordXprocent = coordX / parallaxWidth * 100;
//       coordYprocent = coordY / parallaxHeight * 100;
//     });
//   }
// }
// END PARALLAX
// ========================================
// LOTTIE

// const anim = lottie;

// anim.loadAnimation({
//   container: document.querySelector('#lottie-404'),
//   renderer: 'svg',
//   loop: false,
//   autoplay: true,
//   // path: 'https://front-back.ru/projects/21_prevendis/libs/anim/404.json'
//   path: '../libs/anim/404.json'
// });

// anim.loadAnimation({
//   container: document.querySelector('#bl-iphone__anim2'),
//   renderer: 'svg',
//   loop: false,
//   autoplay: true,
//   // path: 'https://front-back.ru/projects/21_prevendis/libs/anim/data2.json'
//   path: '../libs/anim/data2.json'
// });

// let startAnimation = false;
// window.addEventListener('scroll', function () {

//   const bl_do = document.getElementById('do');
//   const bl_doHeight = bl_do.offsetHeight;
//   const animItemOffset = offset(bl_do).top;
//   // console.log(bl_doHeight);

//   if (!startAnimation && pageYOffset > animItemOffset - (bl_doHeight + bl_doHeight)) {
//     anim.loadAnimation({
//       container: document.querySelector('#do__img'),
//       renderer: 'svg',
//       loop: false,
//       autoplay: true,
//       // path: 'https://front-back.ru/projects/21_prevendis/libs/anim/blue.json'
//       path: '../libs/anim/blue.json'
//     });
//     startAnimation = true;
//   }
// });
// END LOTTIE
// ----------------------------------------
// ========================================
// ---------- BUTTONS HOVER ----------

let btns = document.querySelectorAll('.btn-6');

btns.forEach(el => {
  el.addEventListener('mouseenter', function (e) {
    let size = Math.max(this.offsetWidth, this.offsetHeight);
    let x = e.offsetX - size / 2;
    let y = e.offsetY - size / 2;
    let wave = this.querySelector('.wave');

    if (!wave) {
      wave = document.createElement('b');
      wave.className = 'wave';
    }
    wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`;
    this.appendChild(wave);

    setTimeout(() => wave.remove(), 500);
  })
})
// ---------- END BUTTONS HOVER ----------
// ========================================


// ----- END AREA -----
// ----------------------------------------
// ---------- END INDEX ----------

