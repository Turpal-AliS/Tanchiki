var tank = document.querySelector('.tank');
var tankSecond = document.querySelector('.tankSecond');

var tankX = 0;
var tankY = 0;
var tankRotation = -90;
var isMovingForward = false;
var isMovingBackward = false;
var speed = 3; // Скорость движения танка

var tankSecondX = 0;
var tankSecondY = 0;
var tankSecondRotation = 90;
var isMovingForwardSecond = false;
var isMovingBackwardSecond = false;

function handleKeyPress(event) {
  var keyCode = event.keyCode;

  if (keyCode === 87) { // Клавиша W
    isMovingForward = true;
  } else if (keyCode === 83) { // Клавиша S
    isMovingBackward = true;
  } else if (keyCode === 65) { // Клавиша A
    tankRotation -= 3;
    if (tankRotation < 0) {
      tankRotation += 360;
    }
  } else if (keyCode === 68) { // Клавиша D
    tankRotation += 3;
    if (tankRotation >= 360) {
      tankRotation -= 360;
    }
  } else if (keyCode === 38) { // Стрелка вверх
    isMovingForwardSecond = true;
  } else if (keyCode === 40) { // Стрелка вниз
    isMovingBackwardSecond = true;
  } else if (keyCode === 37) { // Стрелка влево
    tankSecondRotation -= 3;
    if (tankSecondRotation < 0) {
      tankSecondRotation += 360;
    }
  } else if (keyCode === 39) { // Стрелка вправо
    tankSecondRotation += 3;
    if (tankSecondRotation >= 360) {
      tankSecondRotation -= 360;
    }
  }
}

function handleKeyRelease(event) {
  var keyCode = event.keyCode;

  if (keyCode === 87) { // Клавиша W
    isMovingForward = false;
  } else if (keyCode === 83) { // Клавиша S
    isMovingBackward = false;
  } else if (keyCode === 38) { // Стрелка вверх
    isMovingForwardSecond = false;
  } else if (keyCode === 40) { // Стрелка вниз
    isMovingBackwardSecond = false;
  }
}

function updateBlockPosition() {
  if (isMovingForward) { // Клавиша W
    // Движение вперед
    tankX += speed * Math.sin(tankRotation * Math.PI / -180);
    tankY += speed * Math.cos(tankRotation * Math.PI / -180);
  } else if (isMovingBackward) { // Клавиша S
    // Движение назад
    tankX -= speed * Math.sin(tankRotation * Math.PI / -180);
    tankY -= speed * Math.cos(tankRotation * Math.PI / -180);
  }

  if (isMovingForwardSecond) { // Стрелка вверх
    // Движение вперед
    tankSecondX += speed * Math.sin(tankSecondRotation * Math.PI / -180);
    tankSecondY += speed * Math.cos(tankSecondRotation * Math.PI / -180);
  } else if (isMovingBackwardSecond) { // Стрелка вниз
    // Движение назад
    tankSecondX -= speed * Math.sin(tankSecondRotation * Math.PI / -180);
    tankSecondY -= speed * Math.cos(tankSecondRotation * Math.PI / -180);
  }

  tank.style.transform = `translate(${tankX}px, ${tankY}px) rotate(${tankRotation}deg)`;
  tankSecond.style.transform = `translate(${tankSecondX}px, ${tankSecondY}px) rotate(${tankSecondRotation}deg)`;

  checkCollision();
  requestAnimationFrame(updateBlockPosition);
}

function checkCollision() {
  var tankRect = tank.getBoundingClientRect();
  var tankSecondRect = tankSecond.getBoundingClientRect();

  if (
    tankRect.left < tankSecondRect.right &&
    tankRect.right > tankSecondRect.left &&
    tankRect.top < tankSecondRect.bottom &&
    tankRect.bottom > tankSecondRect.top
  ) {
    // Танки столкнулись - останавливаем движение
    isMovingForward = false;
    isMovingBackward = false;
    isMovingForwardSecond = false;
    isMovingBackwardSecond = false;
  }
}

document.addEventListener("keydown", handleKeyPress);
document.addEventListener("keyup", handleKeyRelease);

updateBlockPosition();