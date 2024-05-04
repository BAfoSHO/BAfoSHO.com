window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let ballImage = new Image();
    ballImage.src = '../utils/assets/images/ball.png';
    let hoopImage = new Image();
    hoopImage.src = '../utils/assets/images/hoop.png';

    let areImagesLoaded = false;
    let imagesLoaded = 0;
    const totalImages = 2; // Total number of images to load

    ballImage.onload = function() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            areImagesLoaded = true;
        }
    };

    hoopImage.onload = function() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            areImagesLoaded = true;
        }
    };

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const ballRadius = 10;

    let hoopHeight = 20;
    let hoopWidth = 75;
    let hoopX = (canvas.width - hoopWidth) / 2;
    let hoopSpeed = 2;

    let rotationAngle = 0; // Initialize rotationAngle here

    function drawBall() {
        ctx.save();
        ctx.translate(x + ballRadius, y + ballRadius);
        ctx.rotate(rotationAngle);
        ctx.drawImage(ballImage, -ballRadius, -ballRadius, ballRadius * 2, ballRadius * 2); 
        ctx.restore(); 

        rotationAngle += 0.05;
    }

    function drawHoop() {
        ctx.drawImage(
            hoopImage, hoopX, canvas.height - hoopHeight, hoopWidth, hoopHeight);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (areImagesLoaded) {
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
    }

    setInterval(draw, 15);
}
