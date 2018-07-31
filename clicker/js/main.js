var spritesInMenu;
var Game = {
    preload: function() { 
        game.load.image('coin', 'img/coin.jpg'); 
        game.load.image('plant', 'img/bird.png'); 
        game.load.image('diamond', 'img/pipe.png');
        game.load.image('settings', 'img/pipe.png');
        game.load.image('quests', 'img/bird.png');
        game.load.image('ranking', 'img/pipe.png');
        game.load.image('market', 'img/pipe.png');
        game.load.image('shop', 'img/bird.png');

        game.load.image('background', 'img/menu.png');
        game.load.image('pszenica', 'img/pszenica.png');
        game.load.image('wheat', 'img/wheat.png');
    },
    create: function() { 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#ffffff'
        this.coins = 0;
        this.diamont = 0;
        this.coinText = game.add.text(160, 20, "0", 
            { font: "30px Arial", fill: "#111111" });
        this.diamondText = game.add.text(100, 160, "0", 
            { font: "30px Arial", fill: "#111111" });   
        /*-sprites-*/
        this.coin = game.add.sprite(20, 20, 'coin').scale.setTo(0.2, 0.2);
        this.plant = game.add.sprite(290, 640, 'plant');
        this.diamond = game.add.sprite(20, 160, 'diamond');
        this.settings = game.add.sprite(560, 20, 'settings');
        this.quests = game.add.sprite(560, 180, 'quests');
        this.ranking = game.add.sprite(560, 100, 'ranking');
        this.market = game.add.sprite(60, 600, 'market');
        this.shop = game.add.sprite(520, 600, 'shop');
        
        this.price = [300, 900];
        game.physics.arcade.enable(this.plant);
        
        this.plant.inputEnabled = true;
        this.market.inputEnabled = true;

        this.plant.events.onInputDown.add(this.touch, this);
        this.market.events.onInputUp.add(function () {
            spritesInMenu = game.add.group();
            var table = ['pszenica', 'wheat'];
            game.paused = true;
            var count = 0;
            var x = 300, y = 300;
            var menu = game.add.sprite(x, y, 'background');
            menu.anchor.setTo(0.5, 0.5);
            table.forEach(function(element){
                spritesInMenu.create(game.add.sprite(x-150, y-185, element).scale.setTo(0.2, 0.2));
                y+=25;
                count++;
            }, this);
            spritesInMenu.forEach(function(p) {
                p.inputEnabled = true;
                p.events.onInputDown.add(buy.bind(this, count), this);
            }, this);
        });
        //game.input.onDown.add(this.unpause, self);
        
    },
    touch: function() {
        if (this.game.input.activePointer.isDown) {
            game.add.tween(this.plant).to({angle: [-6, 6, -5, 5, -4, 4, -3, 3, 0]}, 1000, "Linear").start(); 
            this.coins += 1;
            this.coinText.text = this.coins;  
        }
    },
    createMenu: function() {
        game.state.start('MainMenu');
    },
    unpause: function(event){
        if(game.paused){
            var clickedOn = false;
            spritesInMenu.forEach(element => {
                if (element.input.activePointer.isDown) {
                    clickedOn = true;
                    break;
                }
            });
            if (!clickedOn) {
                menu.destroy();
                spritesInMenu.forEach(element => {
                    element.destroy();
                });
                game.paused = false;
            }
        }
    },
    buy: function() {
        if (this.coins >= this.price[count]) {
            this.coins -= this.price[count];
        }
    },
    
};
