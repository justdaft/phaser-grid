/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

import {Component} from 'angular2/core';
//import {InitTiles} from './utils';
//import {updateTimer, createTimer, incrementScore, createTile, addTile, initTiles} from './func';

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
    tileGrid: Array<any>;
    tiles: Phaser.Group;
    random: any;
    tile: Phaser.Sprite;

    constructor() {
        this.game = new Phaser.Game(800, 800, Phaser.AUTO, 'content', {
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
        //this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '34495f';
 
        //Declare assets that will be used as tiles
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
        this.tileWidth = 160;
        this.tileHeight = 140;
 
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
            [null, null, null, null, null, null, null, null]
        ];
        //Create a random data generator to use later
        let seed = Date.now();
        let random = new Phaser.RandomDataGenerator([seed]);
        let enemies = this.game.add.group();

        for (let x = 0; x < 8; x++) {
            //  This creates a new Phaser.Sprite instance within the group
            //  It will be randomly placed within the world and use the 'baddie' image to display
            //enemies.create((0.5 * i), 0.5, 'blue');
            for (let y = 0; y < 8; y++) {
                let tile = enemies.create(((x * this.tileWidth) + this.tileWidth / 2), (y *  this.tileHeight +( this.tileHeight / 2)), 'blue');
                enemies.scale.setTo(0.5,0.5);
                tile.anchor.setTo(0.5, 0.5);
                //Keep a track of the tiles position in our tileGrid
				this.tileGrid[x][y] = tile;
            }
            
        }
 

        // let style = { font: '36px Arial', fill: '#808080', align: 'center' };
        // this.textValue = this.game.add.text(0, 0, '0', style);
        // this.updateCount = 0;
        // this.img = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
        // this.img.anchor.x = 0.5;
        // this.img.anchor.y = 0.5;


        console.log(this.tileGrid);
    };


    update() {
        // this.img.angle += 0.1;
        // this.textValue.text = (this.updateCount++).toString();
    };

    render() {
        // this.game.debug.text('This is drawn in render()', 0, 50);
    };
    


    // initTiles() {
    //     for (var i = 0; i < 8; i++) {
    //         for (var j = 0; j < 8; j++) {
    //             var tileToAdd = 'blue';
    //             let tile = this.tiles.create(0, 0, tileToAdd);
    //             tile.anchor.setTo(0.5, 0.5);
    //             tile.inputEnabled = true;
    //             tile.tileType = tileToAdd;
    //             // var tile = this.addTile(i, j);
    //             this.tileGrid[i][j] = tile;
                
    //         }
    //     }
    //    console.log(this.tileGrid); 
    // }
};
