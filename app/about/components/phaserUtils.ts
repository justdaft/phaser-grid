/// <reference path='../../../node_modules/phaser/typescript/phaser.comments.d.ts' />
/// <reference path='../../../node_modules/phaser/typescript/pixi.comments.d.ts' />

export function RandomizeTiles() {
  let startList = [];
  for (let num = 1; num <= 18; num++) {
    startList.push(num);
  }
  for (let num = 1; num <= 18; num++) {
    startList.push(num);
  }
  //console.log('RandomizeTiles: ', startList);
 return startList;
};



function FlipOver(map: Phaser.TileMap, tile: Phaser.Tile, x: number, y: number, layer: any) {
    map.putTile(tile, x, y, layer);
};


//find objects in a Tiled layer that containt a property called "type" equal to a certain value
//findObjectsByType: function(type, map, layer) {
//  var result = new Array();
//  map.objects[layer].forEach(function(element) {
//    console.log(element);
//    if (element.properties.type === type) {
//      //Phaser uses top left, Tiled bottom left so we have to adjust the y position
//      //also keep in mind that the cup images are a bit smaller than the tile which is 16x16
//      //so they might not be placed in the exact pixel position as in Tiled
//      console.log("Found " + element.name);
//      element.y -= map.tileHeight;
//      result.push(element);
//    }
//  });
//  return result;
//},
//
//
////create a sprite from an object
//createFromTiledObject: function(element, group) {
//  var sprite = group.add(new Coin(this.game, element.x, element.y)); // coin prefab
//  //copy all properties to the sprite
//  Object.keys(element).forEach(function(key) {
//    sprite[key] = element[key];
//  });
//}
