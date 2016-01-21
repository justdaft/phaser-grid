/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

import {Component} from 'angular2/core';
//import {InitTiles} from './utils';
import {updateTimer, createTimer, incrementScore, createTile, addTile, initTiles} from './func';

@Component({
    selector: 'home',
    templateUrl: './home/components/home.html',
    styleUrls: ['./home/components/home.css']
})

export class HomeCmp {
    game: Phaser.Game;
    textValue: Phaser.Text;
    backgroundSprite: any;
    updateCount: number;
    img: Phaser.Image;

    tileTypes: Array<any>;
    activeTile1: any;
    activeTile2: any;
    canMove: boolean;
    score: number;
    tileWidth: any;
    tileHeight: any;
    tileGrid: any;
    tiles: Phaser.Group;
    random: any;

    constructor() {
        this.game = new Phaser.Game(500, 500, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload,
            update: this.update,
            render: this.render
        });
    };

    preload() {
        this.game.load.image('phaser-logo', './assets/phaser-logo.png');

        this.game.load.image('blue', './assets/gemBlue.png');
        this.game.load.image('green', './assets/gemGreen.png');
        this.game.load.image('red', './assets/gemRed.png');
        this.game.load.image('yellow', './assets/gemYellow.png');
    };

    create() {
        this.tileTypes = [
            'blue',
            'green',
            'red',
            'yellow'
        ];
        //Keep track of the users score
        this.score = 0;

        //Keep track of the tiles the user is trying to swap (if any)
        this.activeTile1 = null;
        this.activeTile2 = null;

        //Controls whether the player can make a move or not
        this.canMove = false;

        //Grab the weigh and height of the tiles (assumes same size for all tiles)
        this.tileWidth = 200;
        this.tileHeight = 200;

        //This will hold all of the tile sprites
        this.tiles = this.game.add.group();

        //Initialise tile grid, this array will hold the positions of the tiles
        //Create whatever shape you'd like
        this.tileGrid = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ];

        //Create a random data generator to use later
        let seed = Date.now();
        console.log(seed);
        this.random = new Phaser.RandomDataGenerator([seed]);
        let style = { font: '36px Arial', fill: '#808080', align: 'center' };
        this.textValue = this.game.add.text(0, 0, '0', style);
        this.updateCount = 0;
        
        initTiles();
        
        this.img = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
        this.img.anchor.x = 0.5;
        this.img.anchor.y = 0.5;
    };


    update() {
        this.img.angle += 0.1;
        this.textValue.text = (this.updateCount++).toString();
    };

    render() {
        this.game.debug.text('This is drawn in render()', 0, 50);
    };


};
