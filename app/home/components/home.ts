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
    textValue: Phaser.Text;
    backgroundSprite: any;
    updateCount: number;
    img: Phaser.Image;

    constructor() {
        this.game = new Phaser.Game(500, 500, Phaser.AUTO, 'content', {
            create: this.create,
            preload: this.preload,
            update: this.update,
            render: this.render
        });
    };

    preload() {
        this.game.load.image('phaser-logo', 'phaser-logo.png');
    };

    create() {
        let style = { font: '36px Arial', fill: '#808080', align: 'center' };
        this.textValue = this.game.add.text(0, 0, '0', style);
        this.updateCount = 0;

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
