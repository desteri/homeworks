function init() {
    document.addEventListener('click', () =>
        clickToMove());
}

let pos_x = 70,
    pos_y = 65;

function clickToMove() {

    const canvas = document.getElementById("car");
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(pos_x, pos_y, 100, 50);

    let time = setInterval(() => {

        if (pos_x <= 1790 && pos_y == 65) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(pos_x, pos_y, 100, 50);
            pos_x += 10;
        }
        if (pos_x == 1790 && pos_y <= 770) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(pos_x, pos_y, 50, 100);
            pos_y += 5;
        }
        if (pos_x >= 70 && pos_y == 770) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(pos_x, pos_y, 100, 50);
            pos_x -= 10;
        }
        if (pos_x == 70 && pos_y >= 65) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(pos_x, pos_y, 50, 100);
            pos_y -= 5;
        }
        
        if (pos_x == 70 && pos_y == 65) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            clearInterval(time);
        }
    }, 10);
    
}

init();


