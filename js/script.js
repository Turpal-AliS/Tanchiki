var tank = document.querySelector('.tank')

var tankX = 0;
var tankY = 0;
var tankRotation = -90;

function handleKeyPress(event) {
    var keyCode = event.keyCode;

    if (keyCode === 87) { // Клавиша W
    // Движение вперед
    tankX += Math.sin(tankRotation * Math.PI / -180) * 5;
    tankY += Math.cos(tankRotation * Math.PI / -180) * 5;
    } else if (keyCode === 83) { // Клавиша S
    // Движение назад
    tankX -= Math.sin(tankRotation * Math.PI / -180) * 5;
    tankY -= Math.cos(tankRotation * Math.PI / -180) * 5;
    } else if (keyCode === 65) { // Клавиша A
    // Поворот против часовой стрелки
    tankRotation -= 5;
    if (tankRotation < 0) {
        tankRotation += 360;
    }
    } else if (keyCode === 68) { // Клавиша D
    // Поворот по часовой стрелке
    tankRotation += 5;
    if (tankRotation >= 360) {
        tankRotation -= 360;
    }
    }

    // Обновляем стили блока
    tank.style.transform = `translate(${tankX}px, ${tankY}px) rotate(${tankRotation}deg)`;
}

document.addEventListener("keydown", handleKeyPress);


// let tank = document.querySelector('.tank');
// let body = document.querySelector('body');
// w = document.body.clientWidth;
// h = document.body.clientHeight;

// window.addEventListener('resize', function(){
//     w = document.body.clientWidth;
//     h = document.body.clientHeight;
// });

// document.addEventListener('keydown', move);
// document.addEventListener('keydown', stop);

// function stop(e) {

// }

// function move(e) {
//     let key = e.key;
//     let x = tank.offsetLeft;
//     let y = tank.offsetTop;

//     if(key === 'd') {
//         tank.className = 'tank';
//         if (x < w - 145) {
//             tank.style.transform += "rotate(-5deg)";
//         }
//     }
//     if(key === 's') {
//         tank.className = 'tank';
//         tank.classList.add('down');
//         if (y < h - 150) tank.style.top = y+5+'px';
//     }
//     if(key === 'a') {
//         tank.className = 'tank';
//         tank.style.transform += "rotate(5deg)";
//     }
//     if(key === 'w') {
//         tank.className = 'tank';
//         tank.classList.add('up');
//         if (y > 0) tank.style.top = y-5+'px';
//     }
// }
