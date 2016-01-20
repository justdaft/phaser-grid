/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

import {Component} from 'angular2/core';


@Component({
    selector: 'home',
    templateUrl: './home/components/home.html',
    styleUrls: ['./home/components/home.css']
})
export class HomeCmp extends Phaser.Game {
    game: Phaser.Game;
    load: any;
    // titleScreenImage: any;
    img: Phaser.Image;
    constructor() {
        super(500, 500, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload
        });
        // this.load.image('phaser-logo', '/phaser-logo.png');
        // var img = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo.png');
        // img.anchor.x = 0.5;
        // img.anchor.y = 0.5;
    }

    preload() {
        this.game.load.image('phaser-logo', 'phaser-logo.png');
    };
    create() {
        this.img = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaser-logo');
        this.img.anchor.x = 0.5;
        this.img.anchor.y = 0.5;
        this.img.angle = 45;
    };

    // update() {
    //     this.img.angle += 0.1;
    // }

}
