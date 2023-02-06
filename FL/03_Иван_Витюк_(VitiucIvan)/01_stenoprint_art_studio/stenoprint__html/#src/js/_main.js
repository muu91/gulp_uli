// ========================================
// ---------- INDEX ----------
// ----------------------------------------
// ---------- WHOM ----------
// jQuery(document).ready(function () {
//   let tabBtn = $("[data-tab-btn]");
//   tabBtn.on("click", function (e) {
//     e.preventDefault();
//     $('.bl-whom__btns > ul > li > button').removeClass('active');
//     $(this).addClass('active');
//     let tabBtn_click = $(this).data('tab-btn');
//     $("[data-tab-content]").each(function () {
//       let tabContent = $(this).data('tab-content');
//       if (tabContent != tabBtn_click) {
//         $(this).hide();
//       } else {
//         // $(this).slideDown();
//         $(this).fadeIn(1200);

//       }
//     });
//   });
//   $(".bl-whom__btns > ul > li:first > button").click();
// });
// ---------- WHOM ----------
// ----------------------------------------
// ========================================
// ----------------------------------------
// ---------- INDEX NOISLIDER ----------

// let areaIndex = document.getElementById('area');
// noUiSlider.create(areaIndex, {
//   start: 50,
//   step: 1,
//   connect: 'lower',
//   range: {
//     'min': 0,
//     'max': 4000,
//   },
//   format: {
//     to: function (value) {
//       return Math.ceil(value);
//     },
//     from: function (value) {
//       return Number(value);
//     }
//   }
// });



// var stepsSlider = document.getElementById('steps-slider');
// var input0 = document.getElementById('input-with-keypress-0');
// var input1 = document.getElementById('input-with-keypress-1');
// var inputs = [input0, input1];

// noUiSlider.create(stepsSlider, {
//   start: [20, 400],
//   connect: true,
//   // tooltips: [true, wNumb({ decimals: 1 })],
//   range: {
//     'min': [0],
//     'max': 2000
//   }
// });

// stepsSlider.noUiSlider.on('update', function (values, handle) {
//   inputs[handle].value = values[handle];
// });

// inputs.forEach(function (input, handle) {
//   input.addEventListener('change', function () {
//     stepsSlider.noUiSlider.setHandle(handle, this.value);
//   });

//   input.addEventListener('keydown', function (e) {
//     var values = stepsSlider.noUiSlider.get();
//     var value = Number(values[handle]);

//     var steps = stepsSlider.noUiSlider.steps();
//     var step = steps[handle];
//     var position;

//     switch (e.which) {

//       case 13:
//         stepsSlider.noUiSlider.setHandle(handle, this.value);
//         break;

//       case 38:
//         position = step[1];
//         if (position === false) {
//           position = 1;
//         }
//         if (position !== null) {
//           stepsSlider.noUiSlider.setHandle(handle, value + position);
//         }
//         break;
//       case 40:
//         position = step[0];
//         if (position === false) {
//           position = 1;
//         }
//         if (position !== null) {
//           stepsSlider.noUiSlider.setHandle(handle, value - position);
//         }
//         break;
//     }
//   });
// });

// // ---------- END INDEX NOISLIDER ----------
// // ----------------------------------------
// // ========================================
// ----------------------------------------
// let areaIndex = document.getElementById('area');
// noUiSlider.create(areaIndex, {
//   start: 0.1,
//   step: 0.02,
//   connect: 'lower',
//   range: {
//     'min': [0.1],
//     'max': [3.0]
//   },
//   format: {
//     to: function (value) {
//       return Math.ceil(value);
//     },
//     from: function (value) {
//       return Number(value);
//     }
//   }
// });
// let area__top = document.getElementById('area__number');
// areaIndex.noUiSlider.on('update', function (values, handle) {
//   area__top.innerHTML = values[handle];
// });
// ----------------------------------------
// ========================================
// ----------------------------------------

// const tasksListElement = document.querySelector(`.av-added__items-ul`);
// const taskElements = tasksListElement.querySelectorAll(`.av-added__item-li`);

// for (const task of taskElements) {
//   task.draggable = true;
// }

// tasksListElement.addEventListener(`dragstart`, (evt) => {
//   evt.target.classList.add(`selected`);
// });

// tasksListElement.addEventListener(`dragend`, (evt) => {
//   evt.target.classList.remove(`selected`);
// });

// const getNextElement = (cursorPosition, currentElement) => {
//   const currentElementCoord = currentElement.getBoundingClientRect();
//   const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

//   const nextElement = (cursorPosition < currentElementCenter) ?
//     currentElement :
//     currentElement.nextElementSibling;

//   return nextElement;
// };

// tasksListElement.addEventListener(`dragover`, (evt) => {
//   evt.preventDefault();

//   const activeElement = tasksListElement.querySelector(`.selected`);
//   const currentElement = evt.target;
//   const isMoveable = activeElement !== currentElement &&
//   currentElement.classList.contains(`av-added__item-li`);

//   if (!isMoveable) {
//     return;
//   }
//   const nextElement = getNextElement(evt.clientY, currentElement);
//   if (
//     nextElement &&
//     activeElement === nextElement.previousElementSibling ||
//     activeElement === nextElement
//   ) {
//     return;
//   }
//   tasksListElement.insertBefore(activeElement, nextElement);
// });
// ----------------------------------------
// ========================================
// ---------- VIDEO PLAYER ----------
// ----------------------------------------

// ----------------------------------------
// ---------- END VIDEO PLAYER -------------
// ========================================
