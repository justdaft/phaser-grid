/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

import { Component } from 'angular2/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { NameList } from '../../shared/services/name_list';

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
  startList: Array<number>;
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
  tileBack: number = 25;
  timesUp: any = '+';
  youWin: any = '+';
  myCountdownSeconds: any;
  randomizeTiles: any;
  tmpNumber: number = 0;
  constructor() {
    this.game = new Phaser.Game(600, 600, Phaser.AUTO, 'content2', {
      preload: this.preload,
      create: this.create,
      update: this.update,
      render: this.render
    });

  }

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

    // randomizeTiles();

    for (var num = 1; num <= 18; num++) {
      console.log(num);
      // this.startList.push(num);
    }
    // for (var num = 1; num <= 18; num++) {
    //   this.startList.push(num);
    // }
    console.log(this.startList);
    // for debugging
    // myString1 = startList.toString();
    //
    // // randomize squareList
    // for (i = 1; i <= 36; i++) {
    //   let randomPosition = game.rnd.integerInRange(0, startList.length - 1);
    //
    //   let thisNumber = startList[randomPosition];
    //
    //   squareList.push(thisNumber);
    //   let a = startList.indexOf(thisNumber);
    //
    //   startList.splice(a, 1);
    // }
    //
    // // for debugging
    // myString2 = squareList.toString();
    //
    // for (col = 0; col < 6; col++) {
    //   for (row = 0; row < 6; row++) {
    //     map.putTile(tileBack, col, row);
    //   }
    // }

    console.log('create: ended');
  };

  update() {
    // console.log('update');
    // let vvv = this.countDownTimer();
    // let timeLimit = 120;
    // let mySeconds = this.game.time.totalElapsedSeconds();
    // this.myCountdownSeconds = timeLimit - mySeconds;
    // console.log(this.myCountdownSeconds);
    // if (this.myCountdownSeconds <= 0) {
    //   // time is up
    //   this.timesUp = 'Time is up!';
    // };
  };

  render() {
    // console.log('render');
  };



}
