def on_button_pressed_a():
    if player.get(LedSpriteProperty.Y) == 4 and not (enemy.is_touching(player)):
        player.set(LedSpriteProperty.Y, 0)
    else:
        player.change(LedSpriteProperty.Y, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    if player.get(LedSpriteProperty.X) == 4 and not (enemy.is_touching(player)):
        player.set(LedSpriteProperty.X, 0)
    else:
        player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

enemy: game.LedSprite = None
player: game.LedSprite = None
basic.show_string("PACMAN")
pacman = images.create_big_image("""
    . # # # . . . # # .
        # . . . # . # . . #
        # . . . # . # . # .
        # # . # # . # . . #
        # . # . # . . # # .
""")
pacman.scroll_image(1, 200)
player = game.create_sprite(2, 4)
enemy = game.create_sprite(2, 2)
food = game.create_sprite(randint(0, 4), randint(0, 4))
game.set_score(0)

def on_forever():
    basic.pause(200)
    enemy.change(LedSpriteProperty.X, randint(-1, 1))
    enemy.change(LedSpriteProperty.Y, randint(-1, 1))
    if player.is_touching(food):
        game.add_score(1)
        food.change(LedSpriteProperty.X, randint(-4, 4))
        food.change(LedSpriteProperty.Y, randint(-4, 4))
    if player.is_touching(enemy):
        game.game_over()
        basic.show_number(game.score())
basic.forever(on_forever)
