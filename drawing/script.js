window.addEventListener('load', eventWindowLoaded, false);

const theCanvas = document.getElementById("canvas");
const context = theCanvas.getContext("2d");

drawScreen();

function drawScreen() {
    context.fillStyle = '#aaaaaa';
    context.fillRect(0, 0, 200, 200);
    context.fillStyle = '#000000';
    context.font = '20px _sans';
    context.textBaseline = 'top';
    context.fillText("Canvas", 0, 0)
}



function eventWindowLoaded() {
    canvasApp()
}

function canvasSupport() {
    if(!theCanvas || !theCanvas.getContext);
    return;
}

function canvasApp() {
   canvasSupport()
}