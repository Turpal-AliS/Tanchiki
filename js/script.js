let tank = document.querySelector('.tank');
let body = document.querySelector('body');
w = document.body.clientWidth;
h = document.body.clientHeight;

window.addEventListener('resize', function(){
    w = document.body.clientWidth;
    h = document.body.clientHeight;
});

document.addEventListener('keydown', move);
document.addEventListener('keydown', stop);

function stop(e) {

}

function move(e) {
    let key = e.key;
    let x = tank.offsetLeft;
    let y = tank.offsetTop;

    if(key === 'd') {
        tank.className = 'tank';
        tank.classList.add('right');
        if (x < w - 145) tank.style.left = x+5+'px';
    }
    if(key === 's') {
        tank.className = 'tank';
        tank.classList.add('down');
        if (y < h - 150) tank.style.top = y+5+'px';
    }
    if(key === 'a') {
        tank.className = 'tank';
        tank.classList.add('left');
        if (x > 0) tank.style.left = x-5+'px';
    }
    if(key === 'w') {
        tank.className = 'tank';
        tank.classList.add('up');
        if (y > 0) tank.style.top = y-5+'px';
    }
}
