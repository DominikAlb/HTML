Game.Boot = function(game) {

};
Game.Boot.prototype = {
    init: function() {
    },
    create: function() {
        game.state.start('Preloader');
    }
}