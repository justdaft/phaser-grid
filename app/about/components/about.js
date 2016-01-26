/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />
///<reference path="./phaserUtils.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var phaserUtils_1 = require('./phaserUtils');
var AboutCmp = (function () {
    function AboutCmp() {
        this.timeCheck = 0;
        this.flipFlag = false;
        this.startList = [];
        this.squareList = [];
        this.masterCounter = 0;
        this.squareCounter = 0;
        this.tileCover = 25;
        this.timesUp = '+';
        this.youWin = '+';
        this.tmpNumber = 0;
        this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content2', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render
        });
    }
    ;
    AboutCmp.prototype.preload = function () {
        console.log('preload: started');
        this.game.load.tilemap('matching', './assets/phaser_tiles.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', './assets/phaser_tiles.png');
        console.log('preload: ended');
    };
    ;
    AboutCmp.prototype.create = function () {
        console.log('create: started');
        this.map = this.game.add.tilemap('matching');
        this.map.addTilesetImage('Desert', 'tiles');
        this.layer = this.map.createLayer('Ground');
        this.layer.resizeWorld();
        this.marker = this.game.add.graphics(0, 0);
        this.marker.lineStyle(2, 0x00FF00, 1);
        this.marker.drawRect(0, 0, 100, 100);
        this.startList = phaserUtils_1.RandomizeTiles();
        console.log('this.startList', this.startList);
        this.shuffledList = Phaser.ArrayUtils.shuffle(this.startList);
        console.log('this.startList', this.startList);
        for (var col = 0; col < 6; col++) {
            for (var row = 0; row < 6; row++) {
                this.map.putTile(36, col, row);
            }
        }
        console.log('create: ended');
    };
    ;
    AboutCmp.prototype.update = function () {
        //this.countDownTimer;
        //console.log('update');
        if (this.layer.getTileX(this.game.input.activePointer.worldX) <= 5) {
            this.marker.x = this.layer.getTileX(this.game.input.activePointer.worldX) * 100;
            this.marker.y = this.layer.getTileY(this.game.input.activePointer.worldY) * 100;
        }
        if (this.flipFlag === true) {
            if (this.game.time.totalElapsedSeconds() - this.timeCheck > 0.5) {
            }
        }
        else {
        }
    };
    ;
    AboutCmp.prototype.render = function () {
        //this.game.debug.text(this.timesUp, 620, 208, 'rgb(0,255,0)');
        //this.game.debug.text(this.youWin, 620, 240, 'rgb(0,255,0)');
        //
        //this.game.debug.text('Time: ' + this.myCountdownSeconds, 620, 15, 'rgb(0,255,0)');
        //
        ////game.debug.text('squareCounter: ' + squareCounter, 620, 272, 'rgb(0,0,255)');
        //this.game.debug.text('Matched Pairs: ' + this.masterCounter, 620, 304, 'rgb(0,0,255)');
        //
        ////game.debug.text('startList: ' + myString1, 620, 208, 'rgb(255,0,0)');
        ////game.debug.text('squareList: ' + myString2, 620, 240, 'rgb(255,0,0)');
        //
        //
        //this.game.debug.text('Tile: ' + this.map.getTile(this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y)).index, 620, 48, 'rgb(255,0,0)');
        //
        //this.game.debug.text('LayerX: ' + this.layer.getTileX(this.marker.x), 620, 80, 'rgb(255,0,0)');
        //this.game.debug.text('LayerY: ' + this.layer.getTileY(this.marker.y), 620, 112, 'rgb(255,0,0)');
        //
        //this.game.debug.text('Tile Position: ' + this.currentTilePosition, 620, 144, 'rgb(255,0,0)');
        //this.game.debug.text('Hidden Tile: ' + this.getHiddenTile, 620, 176, 'rgb(255,0,0)');
        // console.log('render');
    };
    AboutCmp = __decorate([
        core_1.Component({
            selector: 'about',
            templateUrl: './about/components/about.html',
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
        })
    ], AboutCmp);
    return AboutCmp;
})();
exports.AboutCmp = AboutCmp;
//# sourceMappingURL=about.js.map