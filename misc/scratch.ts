/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />
///<reference path="./phaserUtils.ts"/>

import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { RandomizeTiles } from './phaserUtils';


@Component({
  selector: 'about',
  templateUrl: './about/components/about.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
  game: Phaser.Game;
  map: Phaser.Tilemap;
  timeCheck: number = 0;
  flipFlag: boolean = false;
  startList: Array<number> = [];
  squareList: Array<any> = [];
  masterCounter: number = 0;
  squareCounter: number = 0;
  square1Num: any;
  square2Num: any;
  savedSquareX1: any;
  savedSquareY1: any;
  savedSquareX2: any;
  savedSquareY2: any;
  tileset: Phaser.Tileset;
  layer: Phaser.TilemapLayer;
  marker: any;
  currentTile: any;
  currentTilePosition: any;
  tileCover = 25;
  timesUp: any = '+';
  youWin: any = '+';
  myCountdownSeconds: any;
  randomizeTiles: any;
  tmpNumber: number = 0;
  shuffledList: Array<any>;

  countDownTimer: any = () => {
    let timeLimit = 120;
    let mySeconds = this.game.time.totalElapsedSeconds();
    this.myCountdownSeconds = timeLimit - mySeconds;
    console.log(this.myCountdownSeconds);
    if (this.myCountdownSeconds <= 0) {
      // time is up
      this.timesUp = 'Time is up!';
    }
  };

  flipOver: any = () => {
    this.map.putTile(this.currentNum, this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y));
  };

  flipBack: any = () => {
    this.flipFlag = false;
    this.map.putTile(this.tileBack, this.savedSquareX1, this.savedSquareY1);
    this.map.putTile(this.tileBack, this.savedSquareX2, this.savedSquareY2);
  };

  getHiddenTile: any = () => {
    let thisTile = shuffledList[this.currentTilePosition - 1];
    return thisTile;
  };

  function processClick(): void {
  console.log('processClick: started');
  let squareCounter: number;
  this.currentTile = this.map.getTile(this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y));
  this.currentTilePosition = ((this.layer.getTileY(this.game.input.activePointer.worldY) + 1) * 6) - (6 - (this.layer.getTileX(this.game.input.activePointer.worldX) + 1));

  if (this.game.input.mousePointer.isDown) {
    // check to make sure the tile is not already flipped
    if (this.currentTile.index === this.tileCover) {
      // get the corresponding item out of squareList
      this.currentNum = this.shuffledList[this.currentTilePosition - 1];
      this.flipOver();
      squareCounter++;
      // is the second tile of pair flipped?
      if (squareCounter === 2) {
        // reset squareCounter
        squareCounter = 0;
        this.square2Num = this.currentNum;
        // check for match
        if (this.square1Num === this.square2Num) {
          this.masterCounter++;
          if (this.masterCounter === 18) {
            // go "win"
            this.youWin = 'Got them all!';
          }
        } else {
          this.savedSquareX2 = this.layer.getTileX(this.marker.x);
          this.savedSquareY2 = this.layer.getTileY(this.marker.y);
          this.flipFlag = true;
          this.timeCheck = this.game.time.totalElapsedSeconds();
        }
      } else {
        this.savedSquareX1 = this.layer.getTileX(this.marker.x);
        this.savedSquareY1 = this.layer.getTileY(this.marker.y);
        this.square1Num = this.currentNum;
      };
    };
  };
  console.log('processClick: ended');
};


  constructor() {
  this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content2', {
    preload: this.preload,
    create: this.create,
    update: this.update,
    render: this.render
  });

};

preload() {
  console.log('preload: started');
  this.game.load.tilemap('matching', './assets/phaser_tiles.json', null, Phaser.Tilemap.TILED_JSON);
  this.game.load.image('tiles', './assets/phaser_tiles.png');//, 100, 100, -1, 1, 1);
  console.log('preload: ended');
};

create() {
  console.log('create: started');
  this.map = this.game.add.tilemap('matching');
  this.map.addTilesetImage('Desert', 'tiles');
  //tileset = game.add.tileset('tiles');
  this.layer = this.map.createLayer('Ground');//.tilemapLayer(0, 0, 600, 600, tileset, map, 0);
  this.layer.resizeWorld();
  this.marker = this.game.add.graphics(0, 0);
  this.marker.lineStyle(2, 0x00FF00, 1);
  this.marker.drawRect(0, 0, 100, 100);
  this.startList = RandomizeTiles();
  console.log('this.startList', this.startList);
  this.shuffledList = Phaser.ArrayUtils.shuffle(this.startList);
  console.log('this.startList', this.startList);
  for (let col = 0; col < 6; col++) {
    for (let row = 0; row < 6; row++) {
      this.map.putTile(36, col, row);
    }
  }
  console.log('create: ended');
};

update() {
  //this.countDownTimer;
  //console.log('update');
  if (this.layer.getTileX(this.game.input.activePointer.worldX) <= 5) {
    this.marker.x = this.layer.getTileX(this.game.input.activePointer.worldX) * 100;
    this.marker.y = this.layer.getTileY(this.game.input.activePointer.worldY) * 100;
  }

  if (this.flipFlag === true) {
    if (this.game.time.totalElapsedSeconds() - this.timeCheck > 0.5) {
      this.flipBack;
    }
  } else {
    this.processClick();
  }

};

render() {
  this.game.debug.text(this.timesUp, 620, 208, 'rgb(0,255,0)');
  this.game.debug.text(this.youWin, 620, 240, 'rgb(0,255,0)');

  this.game.debug.text('Time: ' + this.myCountdownSeconds, 620, 15, 'rgb(0,255,0)');

  //game.debug.text('squareCounter: ' + squareCounter, 620, 272, 'rgb(0,0,255)');
  this.game.debug.text('Matched Pairs: ' + this.masterCounter, 620, 304, 'rgb(0,0,255)');

  //game.debug.text('startList: ' + myString1, 620, 208, 'rgb(255,0,0)');
  //game.debug.text('squareList: ' + myString2, 620, 240, 'rgb(255,0,0)');


  this.game.debug.text('Tile: ' + this.map.getTile(this.layer.getTileX(this.marker.x), this.layer.getTileY(this.marker.y)).index, 620, 48, 'rgb(255,0,0)');

  this.game.debug.text('LayerX: ' + this.layer.getTileX(this.marker.x), 620, 80, 'rgb(255,0,0)');
  this.game.debug.text('LayerY: ' + this.layer.getTileY(this.marker.y), 620, 112, 'rgb(255,0,0)');

  this.game.debug.text('Tile Position: ' + this.currentTilePosition, 620, 144, 'rgb(255,0,0)');
  this.game.debug.text('Hidden Tile: ' + this.getHiddenTile, 620, 176, 'rgb(255,0,0)');
  // console.log('render');
}


}
