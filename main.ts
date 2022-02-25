controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Boy.setPosition(60, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Boy.setPosition(30, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Boy.setPosition(130, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.warmRadial, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Boy.setPosition(100, 100)
})
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.destroy(effects.coolRadial, 100)
    info.changeLifeBy(-1)
})
let right: Sprite = null
let Down: Sprite = null
let Up: Sprite = null
let LEft: Sprite = null
let Lane = 0
let Boy: Sprite = null
let Speed = 40
info.setLife(5)
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
effects.starField.startScreenEffect()
Boy = sprites.create(img`
    . . . . . f f f f . . . . . . . 
    . . . f f e e e e f f . . . . . 
    . . f e e e f f e e e f . . . . 
    . f f f f f 2 2 f f f f f . . . 
    . f f e 2 e 2 2 e 2 e f f . . . 
    . f e 2 f 2 f f 2 f 2 e f . . . 
    . f f f 2 2 e e 2 2 f f f . . . 
    f f e f 2 f e e f 2 f e f f . . 
    f e e f f e e e e f e e e f . . 
    . f e e e e e e e e e e f . . . 
    . . f e e e e e e e e f . . . . 
    . e 4 f f f f f f f f 4 e . . . 
    . 4 d f 2 2 2 2 2 2 f d 4 . . . 
    . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
    . . . . f f f f f f . . . . . . 
    . . . . f f . . f f . . . . . . 
    `, SpriteKind.Player)
Boy.setPosition(80, 100)
game.onUpdateInterval(700, function () {
    Lane = randint(1, 4)
    if (Lane == 1) {
        LEft = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 
            6 6 6 1 1 1 6 6 6 6 6 6 6 6 6 6 
            6 6 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
            6 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
            6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
            6 1 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
            6 6 1 1 1 1 6 6 6 6 6 6 6 6 6 6 
            6 6 6 1 1 1 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Projectile)
        LEft.setVelocity(0, Speed)
        LEft.setPosition(30, 8)
        music.ringTone(262)
    } else if (Lane == 2) {
        Up = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
            6 6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 
            6 6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 
            6 6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 
            6 6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Projectile)
        Up.setVelocity(0, Speed)
        Up.setPosition(60, 8)
        music.ringTone(392)
    } else if (Lane == 3) {
        Down = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 
            6 6 6 1 1 1 1 1 1 1 1 1 1 1 6 6 
            6 6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 
            6 6 6 6 6 1 1 1 1 1 1 1 6 6 6 6 
            6 6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 
            6 6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Projectile)
        Down.setVelocity(0, Speed)
        Down.setPosition(100, 8)
        music.ringTone(880)
    } else if (Lane == 4) {
        right = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 1 1 1 6 6 6 
            6 6 6 6 6 6 6 6 6 6 1 1 1 1 6 6 
            6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 6 
            6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 
            6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 6 
            6 6 6 6 6 6 6 6 6 6 1 1 1 1 6 6 
            6 6 6 6 6 6 6 6 6 6 1 1 1 6 6 6 
            6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.Projectile)
        right.setVelocity(0, Speed)
        right.setPosition(130, 8)
        music.ringTone(147)
    }
})
game.onUpdateInterval(2000, function () {
    Speed += 1
})
