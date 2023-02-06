let field = document.getElementById('steps-field');

//Параметры для ускорения
const delayNormal = 100;
const delayAccelerated = 100;
let isAccelerated = false;
const accelerationTime = 100;

let delayMain = delayNormal;

//Переменная для хранения id таймера, отсчитывающего интервалы между отрисовками элементов
let interval = null;

//Параметры пути, по которому будут проходить элементы
let pathMain = [[5, 5], [5, 10000]]
let stepsize = 20;
let currentPoint = 0;
let shift = 0;
let points = setPoints(pathMain);


//Запуск анимации
draw(delayMain, points);

document.onscroll = scrollHandler;

function scrollHandler() {


  accelerate();
}

//Управление ускорением анимации
function accelerate() {
  if (!isAccelerated) {
    isAccelerated = true;
    delayMain = delayAccelerated;
    draw(delayMain, points)

    setTimeout(() => {
      delayMain = delayNormal;
      isAccelerated = false;
      draw(delayMain, points);
    }, accelerationTime);

  }
}

//Вычисление точек, на которых будут нарисованы блоки
function setPoints(path) {
  let points = []

  let posXCurr, posYCurr;
  let distanceX, distanceY, distance;
  let deltaX, deltaY;
  let stepsInCurrPath;

  for (let currentPathPoint = 0; currentPathPoint < path.length - 1; currentPathPoint++) {
    posXCurr = path[currentPathPoint][0];
    posYCurr = path[currentPathPoint][1];
    distanceX = path[currentPathPoint + 1][0] - path[currentPathPoint][0];
    distanceY = path[currentPathPoint + 1][1] - path[currentPathPoint][1];
    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    stepsInCurrPath = distance / stepsize;
    deltaX = distanceX / stepsInCurrPath;
    deltaY = distanceY / stepsInCurrPath;
    for (let currentPathStep = 0; currentPathStep < stepsInCurrPath; currentPathStep++) {
      points.push([posYCurr, posXCurr])
      posXCurr += deltaX;
      posYCurr += deltaY;
    }
  }

  return points;
}

//Функция отрисовки элементов анимации
function draw(delay, points) {
  if (interval) {
    clearInterval(interval)
  }
  interval = setInterval(() => {
    if (points[currentPoint][0] < field.getBoundingClientRect().top * -1) {
      let newPoint = findNextPoint(points, currentPoint);
      for (currentPoint; currentPoint < newPoint; currentPoint++)
        field.innerHTML += `<li class='trace trace-${currentPoint}' style='top: ${points[currentPoint][0] + shift}px; left: ${points[currentPoint][1]}px'></li>`;
    }
    if (currentPoint < points.length && isOnScreen(points[currentPoint][0], points[currentPoint][1])) {
      field.innerHTML += `<li class='trace trace-${currentPoint}' style='top: ${points[currentPoint][0] + shift}px; left: ${points[currentPoint][1]}px'></li>`;
      currentPoint++;
      // if (currentPoint === points.length) {
      //   currentPoint = 0;
      // }
    }
  }, delay, points);
}

//Проверка на нахождение точки на экране
function isOnScreen(pointY, pointX) {
  return (
    pointY < field.clientHeight &&
    pointY < field.getBoundingClientRect().top * -1 + document.documentElement.clientHeight &&
    pointX < field.clientWidth)
}

function findNextPoint(points, currentPoint) {
  let newPoint = currentPoint;
  while (newPoint < points.length && points[newPoint][0] < field.getBoundingClientRect().top * -1)
    newPoint++;

  if (newPoint < points.length) {
    return newPoint;
  }

  return currentPoint;
}

