const pole = document.getElementById('pole');
const ball = document.getElementById('ball');
console.dir(pole);
console.dir(ball)
let degBall = 360; 
 function getPosition(event) {
    let x = event.clientX- pole.offsetLeft;
    let y = event.clientY - pole.offsetTop;
    degBall += 360;
    console.log(event.clientX, event.clientY,"тут х та у");
    ball.style.top = y - ball.offsetHeight / 2 + 'px';
    ball.style.left = x - ball.offsetWidth / 2 + 'px';
    ball.style.transform = 'rotate(' + degBall + 'deg)';
}
pole.addEventListener("click",getPosition) 
