// Create and Load the DOM
$(function() {
    const $app = $('#app');
    const $canvas = $('<canvas>', {
        id: 'canvas',
        width: 640,
        height: 480,
        css: {
            border: '1px solid black'
        }
    });
    const $image = $('<img />', {
        src: './texture.jpg',
        id: 'texture',
        width: 100,
        height: 100,
        css: {
            display: 'none'
        }
    })

    const $audio = $('<audio>', {
        src: './music.mp3',
        controls: 'controls'
    })
    $image.appendTo($app)
    // $audio.appendTo($app)
    $canvas.appendTo($app);
    playSound();
});

function playSound() {
    const sound = new Audio();
    sound.src = './music.mp3'
    sound.play()
}


// Access Canvas Context
$(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
   
    window.addEventListener('load', (e) => {
        drawRectangle(ctx);
        drawComplexPath(ctx);
        drawText(ctx);
        renderPic(ctx)
    })
    
});

function renderPic(ctx) {
    const texturePattern = document.getElementById('texture');
    ctx.translate(200,-50);
    ctx.rotate(Math.PI / 3)
    ctx.drawImage(texturePattern, 0, 50, 60, 50, 50, 50, 70, 50);
}


async function createPattern(ctx) {
    const texturePattern = document.getElementById('texture');
    await loadImage(texturePattern)
        const pattern = ctx.createPattern(texturePattern, 'repeat');
    return pattern
}

function drawRectangle(ctx) {
    // const pattern = createPattern(ctx)
    // console.log(pattern)
    ctx.fillStyle = 'hsl(50, 50%, 60%)'
    ctx.fillRect(200,10,100,100);
    ctx.fillRect(50,70,90,30);

    ctx.fillStyle = 'green'
    ctx.strokeRect(110,10,50,50);
    ctx.strokeRect(30,10,50,50)

    // ctx.strokeStyle = 'blue'
    // ctx.clearRect(210,20,30,20);
    // ctx.clearRect(260,20,30,20);
}

function drawComplexPath(ctx) {
    ctx.beginPath();
    ctx.moveTo(10,120);
    ctx.lineTo(10,180);
    ctx.lineTo(110,150);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(160,160);
    ctx.lineTo(170,220);
    ctx.lineTo(240,210);
    ctx.lineTo(260,170);
    ctx.lineTo(190,140);
    ctx.closePath();
    ctx.stroke();
}

function drawText(ctx) {
    ctx.fillText("This is some text...", 30, 20);

    ctx.font = "10px Arial";
    ctx.fillText("This is arial",30, 50 );

    ctx.font = "16px Arial";
    ctx.strokeText("This text is blurry as fuck", 30, 75);
}


async function loadImage(elem) {
    return new Promise((res, rej) => {
        elem.onload = () => res(elem);
        elem.onerror = rej
    })
}