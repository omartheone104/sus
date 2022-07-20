input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (player.get(LedSpriteProperty.Y) == 4 && !enemy.isTouching(player)) {
        player.set(LedSpriteProperty.Y, 0)
    } else {
        player.change(LedSpriteProperty.Y, 1)
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    if (player.get(LedSpriteProperty.X) == 4 && !enemy.isTouching(player)) {
        player.set(LedSpriteProperty.X, 0)
    } else {
        player.change(LedSpriteProperty.X, 1)
    }
    
})
let enemy : game.LedSprite = null
let player : game.LedSprite = null
basic.showString("PACMAN")
let pacman = images.createBigImage(`
    . # # # . . . # # .
        # . . . # . # . . #
        # . . . # . # . # .
        # # . # # . # . . #
        # . # . # . . # # .
`)
pacman.scrollImage(1, 200)
player = game.createSprite(2, 4)
enemy = game.createSprite(2, 2)
let food = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
basic.forever(function on_forever() {
    basic.pause(200)
    enemy.change(LedSpriteProperty.X, randint(-1, 1))
    enemy.change(LedSpriteProperty.Y, randint(-1, 1))
    if (player.isTouching(food)) {
        game.addScore(1)
        food.change(LedSpriteProperty.X, randint(-4, 4))
        food.change(LedSpriteProperty.Y, randint(-4, 4))
    }
    
    if (player.isTouching(enemy)) {
        game.gameOver()
        basic.showNumber(game.score())
    }
    
})
