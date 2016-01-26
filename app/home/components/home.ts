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
    this.game = new Phaser.Game(584, 584, Phaser.AUTO, 'content', {
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
    this.game.load.tilemap('adv_time', './assets/new_adv_time_map_v1.json', null, Phaser.Tilemap.TILED_JSON);

  };

  create() {
    this.game.stage.backgroundColor = '34495f';
    let map = this.game.add.tilemap('adv_time');
    map.addTilesetImage('adv_time_tileset', 'tiles', 146, 146, 1);
    let covers = this.game.add.group();
    let items = this.game.add.group();

    //map.createFromObjects('Object_Layer_1', 5, 'tiles', 0, true, false, covers);
    let tilelayer1 = map.createLayer('Tile_Layer_1');
    let tilelayer2 = map.createLayer('Tile_Layer_2');
    tilelayer2.visible = false;
    tilelayer1.resizeWorld();


    // let objectlayer = map.createLayer('Object_Layer_1');
    //map.createFromObjects('Object_Layer_1', null, 'covers', 0, true, false, cover);

    //let xx = findObjectsByType('cover', map, 'Object_Layer_1');

    function findObjectsByType(type:any, map:any, layer:any) {
      let result: Array<any> = [];
      map.objects[layer].forEach(function (element) {
        console.log('findObjectsByType, element: ', element);

          console.log('Found ' + element.name);
          element.y -= map.tileHeight;
          result.push(element);

      });
      return result;
    }

   // console.log(findObjectsByType('cover', map, 'Object_Layer_1'));

    function createFromTiledObject (element) {
      let sprite = items.create(element.x, element.y);
      console.log(sprite);
    }

    function createItems() {
      // create items
      var item;
      let result = findObjectsByType('cover', map, 'Object_Layer_1');
      result.forEach((element) => { createFromTiledObject(element, this.covers);});
    }

    createItems();


    //let objectlayer = map.createLayer('Object_Layer_1');
    //  This resizes the game world to match the layer dimensions



    //this.tileWidth = 146;
    //this.tileHeight = 146;
    ////Declare assets that will be used as tiles
    //let tileTypes = [
    //  'blue',
    //  'green',
    //  'red',
    //  'yellow'
    //];
    //
    ////Keep track of the users score
    //this.score = 0;
    //
    ////Keep track of the tiles the user is trying to swap (if any)
    //this.activeTile1 = null;
    //this.activeTile2 = null;
    //
    ////Controls whether the player can make a move or not
    //this.canMove = false;
    //
    ////Grab the weigh and height of the tiles (assumes same size for all tiles)
    //this.tileWidth = 160;
    //this.tileHeight = 140;
    //
    ////This will hold all of the tile sprites
    //this.tiles = this.game.add.group();
    //
    ////Initialise tile grid, this array will hold the positions of the tiles
    ////Create whatever shape you'd like
    //this.tileGrid = [
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null],
    //  [null, null, null, null, null, null, null, null]
    //];
    ////Create a random data generator to use later
    //let seed = Date.now();
    //let random = new Phaser.RandomDataGenerator([seed]);
    //this.game.input.mouse.capture = true;


  }


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
