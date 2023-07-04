window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const ballRadius = 10;

    let hoopHeight = 20;
    let hoopWidth = 75;
    let hoopX = (canvas.width - hoopWidth) / 2;
    let hoopSpeed = 2;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
    }

    function drawHoop() {
        ctx.beginPath();
        ctx.rect(hoopX, canvas.height - hoopHeight, hoopWidth, hoopHeight);
        ctx.fillStyle = "#0000FF";
        ctx.fill();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawHoop();
        x += dx;
        y += dy;
        hoopX += hoopSpeed;
        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if(y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
            dy = -dy;
        }
        if(hoopX + hoopSpeed > canvas.width - hoopWidth || hoopX + hoopSpeed < 0) {
            hoopSpeed = -hoopSpeed;
        }
    }

    setInterval(draw, 15);
}
