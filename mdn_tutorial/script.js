window.addEventListener('DOMContentLoaded', draw);

function draw() {
    const canvas = document.getElementById('tutorial');
    if (canvas.getContext('2d')) {
        const ctx = canvas.getContext('2d');

        // * Example
        // ctx.fillStyle = "rgb(200,0,0)";
        // ctx.fillRect(10, 10, 50, 50);

        // ctx.fillStyle = "rgba(0,0,100,0.5)";
        // ctx.fillRect(30, 30, 50, 50);

        // * Rectangular shape example
        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);



    } else {
        document.write('Canvas is not supported');
    }
}

// function draw()