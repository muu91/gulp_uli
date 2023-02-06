// ========================================
// ---------- INDEX ----------
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


// ----- END AREA -----
// ----------------------------------------
// ---------- END INDEX ----------

