/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

import {Component} from 'angular2/core';
//import {InitTiles} from './utils';
//import {updateTimer, createTimer, incrementScore, createTile, addTile, initTiles} from './func';

function extractedFor(tileTypes:string[], random:Phaser.RandomDataGenerator){
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      //Choose a random tile to add
      let tileToAdd = tileTypes[random.integerInRange(0, tileTypes.length - 1)];
      let tile = this.tiles.create(((x * this.tileWidth) + this.tileWidth / 2), (y * this.tileHeight + (this.tileHeight / 2)), tileToAdd);
      this.tiles.scale.setTo(0.5, 0.5);
      tile.anchor.setTo(0.5, 0.5);
      //Enable input on the tile
      tile.inputEnabled = true;

      //  pick the right one accordingly.
      tile.input.pixelPerfectOver = true;

      //  Enable the hand cursor
      tile.input.useHandCursor = true;
      //Keep a track of the tiles position in our tileGrid
      this.tileGrid[x][y] = tile;
    }
  }
}
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

    startPosX: number;
    startPosY: number;
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
<<<<<<< Updated upstream
        this.game = new Phaser.Game(584, 584, Phaser.AUTO, 'content1', {
=======
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
>>>>>>> Stashed changes
            create: this.create,
            preload: this.preload,
            update: this.update,
            render: this.render
        });
    };

    preload() {
        this.game.load.image('phaser-logo', './assets/phaser-logo.png');

        // this.game.load.image('blue', './assets/gemBlue.png');
        // this.game.load.image('green', './assets/gemGreen.png');
        // this.game.load.image('red', './assets/gemRed.png');
        // this.game.load.image('yellow', './assets/gemYellow.png');
        this.game.load.image('tiles', './assets/matching.png');
        this.game.load.tilemap('adv_time', 'assets/adv_time_map.json', null, Phaser.Tilemap.TILED_JSON);
    };

    create() {
        //this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.stage.backgroundColor = '34495f';

<<<<<<< Updated upstream
        let map = this.game.add.tilemap('adv_time');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        map.addTilesetImage('adv_time_tileset', 'tiles', 146, 146, 1);
    
        //  Creates a layer from the World1 layer in the map data.
        //  A Layer is effectively like a Phaser.Sprite, so is added to the display list.
        let layer1 = map.createLayer('Tile Layer 1');
      

        //  This resizes the game world to match the layer dimensions
        layer1.resizeWorld();
        // //Declare assets that will be used as tiles
        // this.tileTypes = [
        //     'blue',
        //     'green',
        //     'red',
        //     'yellow'
        // ];
 
        // //Keep track of the users score
        // this.score = 0;
 
        // //Keep track of the tiles the user is trying to swap (if any)
        // this.activeTile1 = null;
        // this.activeTile2 = null;
 
        // //Controls whether the player can make a move or not
        // this.canMove = false;
 
        // //Grab the weigh and height of the tiles (assumes same size for all tiles)
        this.tileWidth = 146;
        this.tileHeight = 146;
 
        // //This will hold all of the tile sprites
        // this.tiles = this.game.add.group();
 
        // //Initialise tile grid, this array will hold the positions of the tiles
        // //Create whatever shape you'd like
        // this.tileGrid = [
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null],
        //     [null, null, null, null, null, null, null, null]
        // ];
        // //Create a random data generator to use later
        // let seed = Date.now();
        // let random = new Phaser.RandomDataGenerator([seed]);
        // let enemies = this.game.add.group();

        // for (let x = 0; x < 8; x++) {
        //     //  This creates a new Phaser.Sprite instance within the group
        //     //  It will be randomly placed within the world and use the 'baddie' image to display
        //     //enemies.create((0.5 * i), 0.5, 'blue');
        //     for (let y = 0; y < 8; y++) {
        //         let tile = enemies.create(((x * this.tileWidth) + this.tileWidth / 2), (y *  this.tileHeight +( this.tileHeight / 2)), 'blue');
        //         enemies.scale.setTo(0.5,0.5);
        //         tile.anchor.setTo(0.5, 0.5);
        //         //Keep a track of the tiles position in our tileGrid
        // 		this.tileGrid[x][y] = tile;
        //     }
            
        // }
 
// 01412320911 tracey
=======
        //Declare assets that will be used as tiles
        let tileTypes = [
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
        this.game.input.mouse.capture = true;
      extractedFor.call(this, tileTypes, random);


>>>>>>> Stashed changes
        // let style = { font: '36px Arial', fill: '#808080', align: 'center' };
        // this.textValue = this.game.add.text(0, 0, '0', style);
        // this.updateCount = 0;
        // this.img = this.game.add.sprite(0, 0, 'phaser-logo');
        // this.img.anchor.x = 0.5;
        // this.img.anchor.y = 0.5;

<<<<<<< Updated upstream

        //  console.log(this.tileGrid);
=======
        console.log(this.tileGrid);
>>>>>>> Stashed changes
    };


    update() {
        // this.img.angle += 0.1;
        // this.textValue.text = (this.updateCount++).toString();
        //The user is currently dragging from a tile, so let's see if they have dragged
        //over the top of an adjacent tile
        if (this.activeTile1 && !this.activeTile2) {

            //Get the location of where the pointer is currently
            var hoverX = this.game.input.x;
            var hoverY = this.game.input.y;

            //Figure out what position on the grid that translates to
            var hoverPosX = Math.floor(hoverX / this.tileWidth);
            var hoverPosY = Math.floor(hoverY / this.tileHeight);

            //See if the user had dragged over to another position on the grid
            var difX = (hoverPosX - this.startPosX);
            var difY = (hoverPosY - this.startPosY);

            //Make sure we are within the bounds of the grid
            if (!(hoverPosY > this.tileGrid[0].length - 1 || hoverPosY < 0) && !(hoverPosX > this.tileGrid.length - 1 || hoverPosX < 0)) {

                //If the user has dragged an entire tiles width or height in the x or y direction
                //trigger a tile swap
                if ((Math.abs(difY) === 1 && difX === 0) || (Math.abs(difX) === 1 && difY === 0)) {

                    //Prevent the player from making more moves whilst checking is in progress
                    this.canMove = false;

                    //Set the second active tile (the one where the user dragged to)
                    this.activeTile2 = this.tileGrid[hoverPosX][hoverPosY];

                    //Swap the two active tiles
                    //   this.swapTiles();

                    //After the swap has occurred, check the grid for any matches
                    // this.game.time.events.add(500, function() {
                    //     this.checkMatch();
                    // });
                }
            }
        }
    };

    render() {
    //     this.game.debug.spriteInputInfo(this.tileGrid, 32, 32);
    // this.game.debug.geom(bunny.input._tempPoint);
        // this.game.debug.text('This is drawn in render()', 0, 50);
        // this.game.debug.text('Left Button: ' + this.game.input.activePointer.leftButton.isDown, 300, 132);

    };

    tileDown(tile, pointer) {
        //Keep track of where the user originally clicked
        if (this.canMove) {
            this.activeTile1 = tile;
            this.startPosX = (tile.x - this.tileWidth / 2) / this.tileWidth;
            this.startPosY = (tile.y - this.tileHeight / 2) / this.tileHeight;
        }
    }
};
