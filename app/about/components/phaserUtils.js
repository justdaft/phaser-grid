/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />
function RandomizeTiles() {
    var startList = [];
    for (var num = 1; num <= 18; num++) {
        startList.push(num);
    }
    for (var num = 1; num <= 18; num++) {
        startList.push(num);
    }
    //console.log('RandomizeTiles: ', startList);
    return startList;
}
exports.RandomizeTiles = RandomizeTiles;
;
function FlipOver(map, tile) {
    map.putTile(currentNum, layer.getTileX(marker.x), layer.getTileY(marker.y));
}
;
//# sourceMappingURL=phaserUtils.js.map