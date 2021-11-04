namespace SpriteKind {
    export const None = SpriteKind.create()
    export const Entit = SpriteKind.create()
    export const shoo = SpriteKind.create()
}
function aT1 () {
    for (let index = 0; index < 150; index++) {
        pause(100)
        side = randint(1, 4)
        if (side == 1) {
            side1()
        }
        if (side == 2) {
            side2()
        }
        if (side == 3) {
            deide3()
        }
        if (side == 4) {
            side4()
        }
    }
    pause(5000)
    aT2()
}
function deide3 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(randint(5, 155), 120)
    sideatack_1.setVelocity(0, 0 - velocity)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function aT5 () {
    The_Entity.follow(character, 20)
    pause(2000)
    The_Entity.follow(character, 20)
    for (let index = 0; index < 15; index++) {
        The_Entity.follow(character, 20)
        pause(1000)
        radi_at1()
    }
    The_Entity.follow(character, 0)
    aT6()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    shooty2 = sprites.create(img`
        . . . . 
        . f f . 
        . f f . 
        . . . . 
        `, SpriteKind.shoo)
    shooty2.setPosition(character.x, character.y)
    shooty2.follow(The_Entity, 100)
})
function radi_at1 () {
    Radi_at_0 = randint(-70, -30)
    Radi_at_02 = randint(30, 70)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, 0, Radi_at_02)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, 0, Radi_at_0)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, Radi_at_02, 0)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, Radi_at_0, 0)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, Radi_at_02, Radi_at_02)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, Radi_at_02, Radi_at_0)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, Radi_at_0, Radi_at_02)
    Radi_at = sprites.createProjectileFromSprite(img`
        . . . . . . . . 
        . . 2 . . 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 2 2 2 . . 
        . . 2 2 2 2 . . 
        . 2 . 2 2 . 2 . 
        . . 2 . . 2 . . 
        . . . . . . . . 
        `, The_Entity, Radi_at_0, Radi_at_0)
}
function Laz2 () {
    Lazat3 = sprites.create(img`
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        .....aaaaaa.....
        `, SpriteKind.None)
    Lazat3.setPosition(randint(5, 115), 60)
    pause(500)
    Lazat3.destroy()
    Lazat4 = sprites.create(img`
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        `, SpriteKind.Enemy)
    Lazat4.setPosition(Lazat3.x, 60)
    Lazat4.lifespan = 500
}
function LAZR () {
    LazR = sprites.create(img`
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        `, SpriteKind.Enemy)
    LazR.setPosition(152, 60)
}
function aT6 () {
    radiat2 = 0
    sideproj = 0
    while (true) {
        pause(100)
        side = randint(1, 4)
        sideproj += 1
        if (side == 1) {
            side1()
        }
        if (side == 2) {
            side2()
        }
        if (side == 3) {
            deide3()
        }
        if (side == 4) {
            side4()
        }
        if (sideproj >= 5) {
            radiat2 += 1
            sideproj = 0
            The_Entity.setPosition(150, character.y)
            SIDE_SHOOT = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 . . 2 . . . . . 
                . . . . . 2 . 2 2 2 2 . 2 2 . . 
                . . . . 2 2 2 2 . 2 2 . . 2 2 . 
                . . . . . 2 . 2 2 2 2 2 2 . . . 
                . . . . . 2 . 2 2 . 2 2 . . . . 
                . . . . . . 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, The_Entity, -65, 0)
        }
        if (radiat2 >= 2) {
            radiat2 = 0
            radi_at1()
        }
    }
}
function Laz1 () {
    LazAt1 = sprites.create(img`
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        ....................................................................................................................................................................................
        `, SpriteKind.None)
    LazAt1.setPosition(75, randint(5, 115))
    pause(500)
    LazAt1.destroy()
    Lazat2 = sprites.create(img`
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
        `, SpriteKind.Enemy)
    Lazat2.setPosition(75, LazAt1.y)
    Lazat2.lifespan = 500
}
function aT3 () {
    controller.moveSprite(character, 50, 50)
    SideProj1()
}
function LAZL () {
    LazL = sprites.create(img`
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        33aaa333333aaa33
        `, SpriteKind.Enemy)
    LazL.setPosition(9, 60)
}
function aT2 () {
    controller.moveSprite(character, 70, 70)
    LAZL()
    LAZR()
    for (let index = 0; index < 30; index++) {
        pause(100)
        side = randint(1, 2)
        if (side == 1) {
            Laz1()
        }
        if (side == 2) {
            Laz2()
        }
    }
    LazR.destroy()
    LazL.destroy()
    aT3()
}
function side4 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(160, randint(5, 155))
    sideatack_1.setVelocity(0 - velocity, 0)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function aT4 () {
    sideproj = 0
    for (let index = 0; index < 150; index++) {
        pause(100)
        side = randint(1, 4)
        sideproj += 1
        if (side == 1) {
            side1()
        }
        if (side == 2) {
            side2()
        }
        if (side == 3) {
            deide3()
        }
        if (side == 4) {
            side4()
        }
        if (sideproj >= 5) {
            sideproj = 0
            The_Entity.setPosition(150, character.y)
            SIDE_SHOOT = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 . . 2 . . . . . 
                . . . . . 2 . 2 2 2 2 . 2 2 . . 
                . . . . 2 2 2 2 . 2 2 . . 2 2 . 
                . . . . . 2 . 2 2 2 2 2 2 . . . 
                . . . . . 2 . 2 2 . 2 2 . . . . 
                . . . . . . 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, The_Entity, -65, 0)
        }
    }
    pause(5000)
    The_Entity.setPosition(80, 60)
    aT5()
}
sprites.onOverlap(SpriteKind.shoo, SpriteKind.Entit, function (sprite, otherSprite) {
    Entit_health += -1
    sprite.destroy()
})
function side2 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(randint(5, 155), 0)
    sideatack_1.setVelocity(0, velocity)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function side1 () {
    sideatack_1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 . 3 . 3 . . . . . 
        . . . . . . 3 . 3 . 3 . . . . . 
        . . . . . 3 3 . 3 . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    sideatack_1.setPosition(0, randint(5, 155))
    sideatack_1.setVelocity(velocity, 0)
    sideatack_1.setFlag(SpriteFlag.AutoDestroy, true)
    side = 0
}
function SideProj1 () {
    for (let index = 0; index < 50; index++) {
        The_Entity.setPosition(150, character.y)
        SIDE_SHOOT = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 . . 3 . . . . . 
            . . . . . 3 . 3 3 3 3 . 3 3 . . 
            . . . . 3 3 3 3 . 3 3 . . 3 3 . 
            . . . . . 3 . 3 3 3 3 3 3 . . . 
            . . . . . 3 . 3 3 . 3 3 . . . . 
            . . . . . . 3 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, The_Entity, -50, 0)
        pause(500)
    }
    aT4()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffff5fffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffff5ffffffffffffffffff5fffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffff5fffffffffffffffff5ffffffffffffffffffff5ff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffff5ffffffffffffffff5fffffffffffffffffff5ffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffff5fffffffffffffff5fffffffffffffffffff5ffffff5fffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffff5ffffffffffffff5fffffffffffffffffff5fffffff5ffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffff5fffffffffffff5fffffffffffffffffff5fffffffff5fffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffff5ffffffffffff5fffffffffffffffffff5ffffffffff55ffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffff5fffffffffff5ffffffffffffffffff5fffffffffffff5fffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffff5fffffffff5fffffffffffffffffff5ffffffffffffff5ffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffff5fffffff5ffffffffffffffffffff5ffffffffffffff5ffffff5fffffffffffffffffffffff55fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffff5fffffff5ffffffffffffffffffff5fffffffffffffff5fffff5fffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffff5ffffff5ffffffffffffffffffff5ffffffffffffffff5ffff5fffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffff55fff5fffffffffffffffffffff5ffffffffffffffff5fffff5ffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffff55ff5fffffffffffffffffffff5ffffffffffffffff5fffff5fffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffff55f5fffffffffffffffffffff5ffffffffffffffff5fffff5fffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffff55ffffffffffffffffffffff5ffffffffffffffff5ffffff5ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffff5fffffffffffffffffffffff5fffffffffffffffff5fffff5ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffff5fffffffffffffffffffffff5fffffffffffffffff5fffff5ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffff5fffffffffffffffffffffff5fffffffffffffffff5fffff5ffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffff5ffffffffffffffffffffffff5ffffffffffffffff5fffffff5fffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffff5ffffffffffffffffffffffff5ffffffffffffffff5fffffff5fffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffff5fffffffffffffffffffffffff5ffffffffffffffff5fffffff5fffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffff5fffffffffffffffffffffffff5ffffffffffffffff5fffffff5fffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffff5ffffffffffffffffffffffffff5ffffffffffffffff5ffffffff5ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffff5fffffffffffffffffffffffffff5ffffffffffffffff5ffffffff5ffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffff5ffffffffffffffffffffffffffff5ffffffffffffff5ffffffffff5ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffff5fffffffffffffffffffffffffffff5ffffffffffffff5ffffffffff5ffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffff5fffffffffffffffffffffffffffffff5ffffffffffff5ffffffffffff5fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffff5fffffffffffffffffffffffffffffff5ffffffffffff5ffffffffffff5fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffff5fffffffffffffffffffffffffffffffff5fffffffffff5ffffffffffff5fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffff5ffffffffffffffffffffffffffffffffff5fffffffff5ffffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffff5fffffffffffffffffffffffffffffffffff55fffffff5ffffffffffffff5ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffff55ffffffffffffffffffffffffffffffffffffff5ffffff5ffffffffffffff5fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffff5fffff5fffffffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffff55fffffffffffffffff2fffffffffffffffffffffff5fff5ffffffffffffffff5ffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffff5555f2222fff2ffffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffff22fffff2222fffffff5fffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffff22ffffffffff2ffffffff5ffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2fffffffffffffffffffffff22fffffffffffff2fffffff5ffffff2222ffff5ffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffffff2fffffffffffffff2ffffffff5ffff2fff2ffff5fffffff222fff2fffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2fffffffffffffffffffff2ffffffffffffffff2fffffffff5ff2fffffffff5fffff22fffffff22fffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2ffffffffffffffffff2fffffffff5f2fffffffff5fff22ffffffffff2fffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2ffffffffffffffffff2ffffffffff52fffffffff5ff2ffffffffffff2fffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2ffffffffffffffffff2fffffffffff2ffffffff5fff22fffffffffff2fffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2fffffffffffffffffff2ffffffffff25fffffff5fff2f222fffffff22fffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2ffffffffffffffffffff2fffffffffffffffffff2fffffffffff25ffffff5fff2ffff2222222fffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff2fffffffffffffffffffff2ffffffffffffffffff2ffffffffffff25fffff5fff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffff22fffffffffff22ffffffff2fffffffffffffffff2ffffffffffff2f55ff5fffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffff222222222222fffffffffff2fffffffffffffff22fffffffffffff2ff555ffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffff2ffffffffffffff22ffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222fffffffff2fffffffffffffff2ffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222fffffffffff22222fffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffff.
        .ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffff.
        ............................................................................................................2...2...............................................
        .............................................................................................................2..2...............................................
        ..............................................................................................................22................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.Player)
    pause(100)
    game.reset()
})
let mySprite: Sprite = null
let LazL: Sprite = null
let Lazat2: Sprite = null
let LazAt1: Sprite = null
let SIDE_SHOOT: Sprite = null
let sideproj = 0
let radiat2 = 0
let LazR: Sprite = null
let Lazat4: Sprite = null
let Lazat3: Sprite = null
let Radi_at: Sprite = null
let Radi_at_02 = 0
let Radi_at_0 = 0
let shooty2: Sprite = null
let sideatack_1: Sprite = null
let side = 0
let velocity = 0
let character: Sprite = null
let The_Entity: Sprite = null
The_Entity = sprites.create(assets.image`The Entity`, SpriteKind.Entit)
scene.setBackgroundColor(12)
character = sprites.create(img`
    . . . . 
    . 7 7 . 
    . 7 7 . 
    . . . . 
    `, SpriteKind.Player)
controller.moveSprite(character, 50, 50)
character.setStayInScreen(true)
velocity = 50
let Entit_health = 10
info.setScore(Entit_health)
aT1()
game.onUpdateInterval(100, function () {
    info.setScore(Entit_health)
})
game.onUpdateInterval(100, function () {
    if (!(Entit_health > 0)) {
        game.over(true, effects.confetti)
        game.reset()
    }
})
