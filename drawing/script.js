window.addEventListener('load', eventWindowLoaded, false);
function eventWindowLoaded() {
    canvasApp()
}
function canvasSupport() {
    return Modernizer.canvas
}

function canvasApp() {
    if (!canvasSupport()){
        return
    } else {
        const theCanvas = document.getElementById("canvas");
        const context = theCanvas.getContext("2d")
    }
}