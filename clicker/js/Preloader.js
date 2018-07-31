Game.Preloader = function(game) {
};
Game.Preloader.prototype = {
    preload: function() {
    },
    create:function() {
        game.state.start('main');
    }
}