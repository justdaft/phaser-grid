export function CountDownTimer(timeLimit: number, totalElapsedSeconds: number): string {
    let timerMessage: string;
    let countDownSeconds = timeLimit - totalElapsedSeconds;
    console.log(countDownSeconds);
    if (countDownSeconds <= 0) {
        // time is up
       return timerMessage = 'Time is up!';
    }
    timerMessage = 'Time remaining: ' + countDownSeconds;
    return timerMessage
};

export function FlipOver(currentNum: number, marker: any, map: any, layer: any) {
    map.putTile(currentNum, layer.getTileX(marker.x), layer.getTileY(marker.y));
};

export function FlipBack(flipFlag: boolean, map: any, tileBack: any, savedSquareX1: any, savedSquareY1: any, savedSquareX2: any, savedSquareY2: any) {
    flipFlag = false;
    map.putTile(this.tileBack, savedSquareX1, savedSquareY1);
    map.putTile(this.tileBack, savedSquareX2, savedSquareY2);
};

export function GetHiddenTile(shuffledList: any, currentTilePosition: any) {
    let thisTile = shuffledList[currentTilePosition - 1];
    return thisTile; 
};

this.flipOver = function (currentNum: number,
                          marker: any,
                          map: any,
                          layer: any):void {

}
export function ProcessClick(currentTile:any,
                             map:Phaser.Tilemap,
                             layer:any,
                             marker:any,
                             currentTilePosition:any,
                             game:Phaser.Game,
                             tileCover:any, currentNum:any, shuffledList) {
    console.log('processClick: started');
    let squareCounter: number;
    currentTile = map.getTile(layer.getTileX(marker.x), layer.getTileY(marker.y));
    currentTilePosition = ((layer.getTileY(game.input.activePointer.worldY) + 1) * 6) - (6 - (layer.getTileX(game.input.activePointer.worldX) + 1));

    if (game.input.mousePointer.isDown) {
        // check to make sure the tile is not already flipped
        if (currentTile.index === tileCover) {
            // get the corresponding item out of squareList
            currentNum = shuffledList[currentTilePosition - 1];
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
                    };
                } else {
                    this.savedSquareX2 = this.layer.getTileX(this.marker.x);
                    this.savedSquareY2 = this.layer.getTileY(this.marker.y);
                    this.flipFlag = true;
                    this.timeCheck = this.game.time.totalElapsedSeconds();
                };
            } else {
                this.savedSquareX1 = this.layer.getTileX(this.marker.x);
                this.savedSquareY1 = this.layer.getTileY(this.marker.y);
                this.square1Num = this.currentNum;
            };
        };
    };
    console.log('processClick: ended');
};

