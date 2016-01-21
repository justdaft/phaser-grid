/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

import {Component} from 'angular2/core';


@Component({
    selector: 'home',
    templateUrl: './home/components/home.html',
    styleUrls: ['./home/components/home.css']
})

export class HomeCmp {
    game: Phaser.Game;
    load: any;
    textValue: Phaser.Text;
    backgroundSprite: any;
    updateCount: number;
    img: Phaser.Image;
    tileLetters: Array<any>;
    tileColors: Array<any>;
    tileWidth: number;
    tileHeight: number;
    tiles: Phaser.Group;
    tileGrid: Array<any>;
    tile: Phaser.BitmapData;
    boardWidth: any;
    boardHeight: any;
    leftBuffer: any;
    topBuffer: any;
    seed = Date.now();
    random = new Phaser.RandomDataGenerator([this.seed]);


    constructor() {
        this.game = new Phaser.Game(500, 500, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload,
            update: this.update,
            render: this.render
        });
    };

    preload() {
        // this.game.load.image('phaser-logo', 'phaser-logo.png');
    };

    create() {
        this.game.stage.backgroundColor = '34495f';
        this.tileLetters = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
            'w', 'x', 'y', 'z'
        ];
        this.tileColors = ['#ffffff'];
        this.tileWidth = 150;
        this.tileHeight = 150;
        this.tiles = this.game.add.group();
        this.tileGrid = [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ];
        this.boardWidth = this.tileGrid[0].length * this.tileWidth;
        this.boardHeight = this.tileGrid.length * this.tileHeight;
        this.leftBuffer = (this.game.width - this.boardWidth) / 2;
        this.topBuffer = (this.game.height - this.boardHeight) / 2;

        for (let i = 0; i < this.tileGrid.length; i++) {
            for (let j = 0; j < this.tileGrid.length; j++) {
                let tile = this.addTile(i, j);
                this.tileGrid[i][j] = tile;
            }
        }

        // let style = { font: '36px Arial', fill: '#808080', align: 'center' };
        // this.textValue = this.game.add.text(0, 0, '0', style);
        // this.updateCount = 0;

        // this.img = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
        // this.img.anchor.x = 0.5;
        // this.img.anchor.y = 0.5;
    };

    update() {
        // this.img.angle += 0.1;
        // this.textValue.text = (this.updateCount++).toString();
    };

    render() {
        this.game.debug.text('This is drawn in render()', 0, 50);
    };

    addTile(x: any, y: any) {
        let tileLetter = this.tileLetters[this.random.integerInRange(0, this.tileLetters.length - 1)];
        let tileColor = this.tileColors[this.random.integerInRange(0, this.tileColors.length - 1)];
        let tileToAdd = this.createTile(tileLetter, tileColor);
        let tile = this.tiles.create(this.leftBuffer + (x * this.tileWidth) + this.tileWidth / 2, 0, tileToAdd);

        // this.game.add.tween(tile).to({ y: this.topBuffer + (y * this.tileHeight + (this.tileHeight / 2)) }, 500, Phaser.Easing.Linear.None, true);
        tile.anchor.setTo(0.5, 0.5);
        tile.tileLetter = tileLetter;

        return tile;
    };

    createTile(letter: any, color: any) {
        let tile = this.game.add.bitmapData(this.tileWidth, this.tileHeight);
        tile.ctx.rect(5, 5, this.tileWidth - 5, this.tileHeight - 5);
        tile.ctx.fillStyle = color;
        tile.ctx.fill();
        tile.ctx.font = '30px Arial';
        tile.ctx.textAlign = 'center';
        tile.ctx.textBaseline = 'middle';
        tile.ctx.fillStyle = '#fff';
        if (color === '#ffffff') {
            tile.ctx.fillStyle = '#000000';
        }
        tile.ctx.fillText(letter, this.tileWidth / 2, this.tileHeight / 2);
        return tile;
    }

};
