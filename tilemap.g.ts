// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010102020202020202010101010101010102010101010101010201010101010102010101010101010101020101010101020101010101010101010201010101010201010101010101010102010101010102010101010101010101020101010101020101010101010101010201010101010201010101010101010101010101010102010101010101010101010101010101010201010101010202020101010201010101020202020202020101010101020101010101010201010101010101010102010101010102010101010101010101020101010101020101010101010101010201010101010201010101010101010102`, img`
. . . . . . . . . . . . . . . . 
. . 2 2 2 2 2 2 2 . . . . . . . 
. 2 . . . . . . . 2 . . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . 2 . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. 2 . . . . . 2 2 2 . . . 2 . . 
. . 2 2 2 2 2 2 2 . . . . . 2 . 
. . . . . 2 . . . . . . . . . 2 
. . . . . 2 . . . . . . . . . 2 
. . . . . 2 . . . . . . . . . 2 
. . . . . 2 . . . . . . . . . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
