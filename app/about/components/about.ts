/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />


import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameList} from '../../shared/services/name_list';

@Component({
    selector: 'about',
    templateUrl: './about/components/about.html',
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class AboutCmp {
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(584, 584, Phaser.AUTO, 'content2', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render
        });

    }

    preload() {
        console.log('preload');
    };

    create() {
        console.log('create');
    };

    update() {
        console.log('update');
    };

    render() {
        console.log('render');
    };

}
