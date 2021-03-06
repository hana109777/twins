controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    シマ.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f f f . . 
        . . . . . f f f f f f a f f . . 
        . . . . f f f f f f f a f f . . 
        . . f f f f f f f f f f f f . . 
        . . f f f f f f f f f f f . . . 
        . . f f f f f f . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    シマ.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . f f f f f f f f f . . . . . 
        . . f f f f f f f f f f . . . . 
        . f f f f f f f f f a f f . . . 
        . f f f . . . f f f a f f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        レオ.sayText("やほー", 500, true)
    }
})
let レオ: Sprite = null
let シマ: Sprite = null
シマ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . f f f f f f f f f . . . 
    . . . f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f a f a f f f f . . 
    . . f f f f f a f a f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f . . 
    . . . f f f f f f f f f f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . . f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
レオ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 2 1 1 2 1 1 1 . . 
    . . . 1 1 1 1 2 1 1 2 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let アン = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 9 2 2 9 2 . . . 
    . . 2 2 2 2 2 2 9 2 2 9 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let タウラス = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 5 7 7 5 7 7 7 . . . 
    . . 7 7 7 7 5 7 7 5 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let ハウト = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 9 9 9 9 9 . . . . 
    . . . . . 9 9 9 9 9 9 9 9 9 . . 
    . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 f 9 9 9 f 9 9 9 . . 
    . . 9 9 9 9 f 9 9 9 f 9 9 9 . . 
    . . 9 9 9 9 8 9 9 9 8 9 9 . . . 
    . . 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . 9 9 9 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 . . . . . 
    . . . . . 9 9 9 9 9 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let ママ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 3 3 3 . . 
    . . . . . . . . . . 3 3 3 . . . 
    . . . . . . . . 3 3 3 3 3 . . . 
    . . . . . . . 3 3 3 3 3 3 . . . 
    . . . . . . 3 3 3 3 3 3 . . . . 
    . . . . . 3 1 1 3 1 1 3 . . . . 
    . . . . 3 3 1 1 3 1 1 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . . 3 3 3 . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let パパ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . 4 4 4 4 . . . 
    . . . . . . . . 4 4 4 4 4 4 4 . 
    . . . . . . . 4 4 4 4 4 4 4 4 . 
    . . . . . 4 4 4 f 4 f 4 4 4 4 . 
    . . . . 4 4 4 4 4 f 4 4 4 4 . . 
    . . . . 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . . 4 4 4 4 4 4 4 4 . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let 祭司 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c c c . . . . 
    . . . . . . . c c . c c . . . . 
    . . . . . . . . c c . . . . . . 
    . . . . . . c c c . . . . . . . 
    . . . . c c . . . c . . . . . . 
    . . . . . . . . . c c . . . . . 
    . . . . . . . . . . c c . . . . 
    . . . . . c c c c c c c . . . . 
    . . . c c . . . . . . . . . . . 
    . . . c c . . . . . c c . . . . 
    . . . . . c c c . c c c . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(シマ, 100, 100)
tiles.setTilemap(tilemap`レベル1`)
scene.cameraFollowSprite(シマ)
