const game = {
    init: function () {
        game.canvas = document.getElementById('game_canvas');
        game.context = game.canvas.getContext('2d');
        game.hideScreens();
        game.showScreen('game_start_screen');
    },
    hideScreens: function() {
        const screens = document.getElementsByClassName('game-layer');
        for(const screen of screens) {
            screen.style.display = 'none'
        }
    },
    showScreen: function(id) {
        const screen = document.getElementById(id)
        screen.style.display = 'block'
    }
};

window.addEventListener('load', function() {
    game.init();
});