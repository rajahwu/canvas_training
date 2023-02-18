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
        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);


        // for(let i = 0; i < 6; i++) {
        //     for(let j = 0; j < 6; j++ ) {
        //         ctx.fillStyle = `rgba(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5) * j}, 0, 0.5)`;
        //         ctx.fillRect(j * 25, i * 25, 25, 25)
        //     }
        // }

        // for (let i = 0; i < 6; i++) {
        //     for (let j = 0; j < 6; j++) {
        //       ctx.strokeStyle = `rgb(10, ${Math.floor(255 - 42.5 * i)}, ${Math.floor(
        //         255 - 42.5 * j
        //       )})`;
        //       ctx.beginPath();
        //       ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, 2 * Math.PI, true);
        //       ctx.stroke();
        //     }
        //   }

           // draw background
  ctx.fillStyle = "#FD0";
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = "#6C0";
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = "#09F";
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = "#F30";
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = "#FFF";

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (let i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }



    } else {
        document.write('Canvas is not supported');
    }
}

// function draw()