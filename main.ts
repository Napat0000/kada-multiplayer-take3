namespace SpriteKind {
    export const Playerhitbox = SpriteKind.create()
    export const Item = SpriteKind.create()
}
function Create_player (Paper: Image, Player: number, Dir: number) {
    Playersprite = sprites.create(Paper, SpriteKind.Player)
    sprites.setDataBoolean(Playersprite, "St", false)
    sprites.setDataNumber(Playersprite, "Player", Player)
    sprites.setDataNumber(Playersprite, "P#", Player)
    sprites.setDataNumber(Playersprite, "Dir", Dir)
    sprites.setDataNumber(Playersprite, "E", 0)
    sprites.setDataNumber(Playersprite, "H", 5)
    sprites.setDataNumber(Playersprite, "A", 1)
    Player_rotation.push(scaling.createRotations(Playersprite.image, 4))
    Playersprite.setImage(Player_rotation[Player][Dir - 1])
    return Playersprite
}
spriteutils.createRenderable(10, function (screen2) {
    if (!(Start)) {
        screen2.fillRect(0, 0, 160, 120, 15)
        if (select_maximum) {
            images.printCenter(screen2, "you have player?", 8, 1)
            images.printCenter(screen2, "^", 60, 1)
            images.printCenter(screen2, "<#>", 64, 1)
            images.printCenter(screen2, "2 players        4 players", 64, 1)
            images.printCenter(screen2, "3 players", 30, 1)
            spriteutils.drawTransparentImage(img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 . . . . . . . . . . 1 . . . . . . . . . . 1 
                1 . e e e e e e e e . 1 . 8 8 8 8 8 8 8 8 . 1 
                1 . e 2 2 2 2 2 2 e . 1 . 8 6 6 6 6 6 6 8 . 1 
                1 . e 2 2 2 2 2 2 e . 1 . 8 6 6 6 6 6 6 8 . 1 
                1 . e 2 2 2 2 1 1 e . 1 . 8 6 6 6 6 1 1 8 . 1 
                1 . e 2 2 2 2 1 1 e . 1 . 8 6 6 6 6 1 1 8 . 1 
                1 . e 2 2 2 2 2 2 e . 1 . 8 6 6 6 6 6 6 8 . 1 
                1 . e 2 2 2 2 2 2 e . 1 . 8 6 6 6 6 6 6 8 . 1 
                1 . e e e e e e e e . 1 . 8 8 8 8 8 8 8 8 . 1 
                1 . . . . . . . . . . 1 . . . . . . . . . . 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
                `, screen2, 15, 75)
            spriteutils.drawTransparentImage(img`
                1111111111111111111111111111111111
                1..........1..........1..........1
                1.eeeeeeee.1.88888888.1.44444444.1
                1.e222222e.1.86666668.1.45555554.1
                1.e222222e.1.86666668.1.45555554.1
                1.e222211e.1.86666118.1.45555114.1
                1.e222211e.1.86666118.1.45555114.1
                1.e222222e.1.86666668.1.45555554.1
                1.e222222e.1.86666668.1.45555554.1
                1.eeeeeeee.1.88888888.1.44444444.1
                1..........1..........1..........1
                1111111111111111111111111111111111
                `, screen2, 64, 40)
            spriteutils.drawTransparentImage(img`
                111111111111111111111111111111111111111111111
                1..........1..........1..........1..........1
                1.eeeeeeee.1.88888888.1.44444444.1.66666666.1
                1.e222222e.1.86666668.1.45555554.1.67777776.1
                1.e222222e.1.86666668.1.45555554.1.67777776.1
                1.e222211e.1.86666118.1.45555114.1.67777116.1
                1.e222211e.1.86666118.1.45555114.1.67777116.1
                1.e222222e.1.86666668.1.45555554.1.67777776.1
                1.e222222e.1.86666668.1.45555554.1.67777776.1
                1.eeeeeeee.1.88888888.1.44444444.1.66666666.1
                1..........1..........1..........1..........1
                111111111111111111111111111111111111111111111
                `, screen2, 110, 75)
            images.printCenter(screen2, "P1 Choose it when you have?", 110, 1)
        } else {
            images.printCenter(screen2, "Loading...", 56, 1)
        }
    }
})
function Check_overlap_in_setup () {
    Item_location = Item_sprite.tilemapLocation()
    while (!(Get_item_on_tile(Item_location.column, Item_location.row) || Get_player_on_tile(Item_location.column, Item_location.row))) {
        tiles.placeOnRandomTile(Item_sprite, assets.tile`myTile0`)
        Item_location = Item_sprite.tilemapLocation()
    }
}
spriteutils.createRenderable(0, function (screen2) {
    if (Start) {
        screen2.fillRect(0, 0, 72, 120, 15)
        for (let value of sprites.allOfKind(SpriteKind.Player)) {
            if (sprites.readDataNumber(value, "P#") == 0) {
                Colour = 2
            } else if (sprites.readDataNumber(value, "P#") == 1) {
                Colour = 8
            } else if (sprites.readDataNumber(value, "P#") == 2) {
                Colour = 5
            } else if (sprites.readDataNumber(value, "P#") == 3) {
                Colour = 7
            }
            if (Trun == sprites.readDataNumber(value, "Player")) {
                images.print(screen2, "Player" + convertToText(sprites.readDataNumber(value, "P#") + 1) + " !", 0, 16 * (sprites.readDataNumber(value, "Player") + 2), Colour)
            } else {
                images.print(screen2, "Player" + convertToText(sprites.readDataNumber(value, "P#") + 1), 0, 16 * (sprites.readDataNumber(value, "Player") + 2), Colour)
            }
            images.print(screen2, "H:" + convertToText(sprites.readDataNumber(value, "H")) + " D:" + convertToText(sprites.readDataNumber(value, "A")) + " E:" + convertToText(sprites.readDataNumber(value, "E")), 0, 8 + 16 * (sprites.readDataNumber(value, "Player") + 2), Colour)
        }
    }
})
function Ready (Player: Sprite) {
    if (Player.vx == 0 && Player.vy == 0) {
        return true
    }
    return false
}
function Get_Player_upgraded () {
    if (sprites.readDataString(Item_sprite, "Name") == "H") {
        sprites.changeDataNumberBy(My_player, "H", sprites.readDataNumber(Item_sprite, "Val"))
    } else if (sprites.readDataString(Item_sprite, "Name") == "E") {
        sprites.changeDataNumberBy(My_player, "E", sprites.readDataNumber(Item_sprite, "Val"))
    } else if (sprites.readDataString(Item_sprite, "Name") == "A") {
        sprites.changeDataNumberBy(My_player, "A", sprites.readDataNumber(Item_sprite, "Val"))
    }
    sprites.destroy(Item_sprite, effects.spray, 500)
}
function Setup_asset () {
    Map_asset = [
    assets.tile`myTile31`,
    assets.tile`myTile32`,
    assets.tile`myTile33`,
    assets.tile`myTile34`,
    assets.tile`myTile35`,
    assets.tile`myTile36`,
    assets.tile`myTile37`,
    assets.tile`myTile38`,
    assets.tile`myTile39`,
    assets.tile`myTile40`,
    assets.tile`myTile41`,
    assets.tile`myTile42`,
    assets.tile`myTile43`,
    assets.tile`myTile44`,
    assets.tile`myTile45`,
    assets.tile`myTile46`
    ]
    MapRecipe = [
    "0000",
    "0110",
    "0111",
    "0011",
    "0010",
    "1110",
    "1111",
    "1011",
    "1010",
    "1100",
    "1101",
    "1001",
    "1000",
    "0100",
    "0101",
    "0001"
    ]
    MapGroup = []
    for (let index2 = 0; index2 < Map_asset.length; index2++) {
        MapGroup.push(1)
    }
}
function FixTileAt (Idx: number) {
    Tile = TileGrid[Idx]
    if (Tile < 0) {
        return
    }
    TileGP = MapGroup[Tile]
    if (TileGP <= 0) {
        return
    }
    Recipe = ""
    Build_Recipe(Idx - MapCol)
    Build_Recipe(Idx + 1)
    Build_Recipe(Idx + MapCol)
    Build_Recipe(Idx - 1)
    for (let index = 0; index <= MapGroup.length - 1; index++) {
        if (MapGroup[index] == TileGP) {
            if (MapRecipe[index] == Recipe) {
                TileGrid[Idx] = index
                return
            }
        }
    }
}
function Get_player_on_trun (Trun: number) {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (Trun == sprites.readDataNumber(value, "Player")) {
            return value
        }
    }
    return spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
}
function Get_touching_on (Player: Sprite) {
    Player_location = Player.tilemapLocation()
    if (sprites.readDataNumber(Player, "Dir") == 1) {
        return Get_player_on_tile(Player_location.column + 1, Player_location.row)
    } else if (sprites.readDataNumber(Player, "Dir") == 2) {
        return Get_player_on_tile(Player_location.column, Player_location.row + 1)
    } else if (sprites.readDataNumber(Player, "Dir") == 3) {
        return Get_player_on_tile(Player_location.column - 1, Player_location.row)
    } else {
        return Get_player_on_tile(Player_location.column, Player_location.row - 1)
    }
    return spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
}
function New_trun (Trun: number) {
    Playersprite = Get_player_on_trun(Trun)
    sprites.changeDataNumberBy(Playersprite, "E", randint(1, 6))
    Max_energy = sprites.readDataNumber(Playersprite, "E")
    return Playersprite
}
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    if (Start) {
        if (mp.getPlayerSprite(player2) == My_player) {
            if (Ready(My_player)) {
                if (sprites.readDataNumber(My_player, "Dir") != 4) {
                    sprites.setDataNumber(My_player, "Dir", 2)
                    if (Can_i_move_here(My_player)) {
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), true)
                        My_player.sayText(convertToText(sprites.readDataNumber(My_player, "E")), 500, false)
                    }
                } else {
                    if (Can_i_Utrun_here(My_player)) {
                        sprites.setDataNumber(My_player, "Dir", 2)
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), false)
                    }
                }
            }
        }
    }
})
function Build_Recipe (EdgeIdx: number) {
    EdgeTile = TileGrid[EdgeIdx]
    if (TileGP == MapGroup[EdgeTile]) {
        Recipe = "" + Recipe + "1"
    } else {
        Recipe = "" + Recipe + "0"
    }
}
function Get_item_on_tile (Col: number, Row: number) {
    for (let value of sprites.allOfKind(SpriteKind.Item)) {
        if (Col == value.tilemapLocation().column && Row == value.tilemapLocation().row) {
            return value
        }
    }
    return spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
}
function Get_player_acttacked (Dir: number, Touching: boolean, Damage: number, Player: Sprite) {
    if (Get_touching_on(My_player)) {
        if (Dir == 1) {
            Player.fx = 30
            Player.vx = Math.sqrt(2 * (Playersprite.fx * 8))
        } else if (Dir == 2) {
            Player.fy = 30
            Player.vy = Math.sqrt(2 * (Playersprite.fy * 8))
        } else if (Dir == 3) {
            Player.fx = 30
            Player.vx = 0 - Math.sqrt(2 * (Playersprite.fx * 8))
        } else {
            Player.fy = 30
            Player.vy = 0 - Math.sqrt(2 * (Playersprite.fy * 8))
        }
        sprites.changeDataNumberBy(Player, "H", 0 - Damage)
        mp.changePlayerStateBy(mp.getPlayerBySprite(My_player), MultiplayerState.score, 1)
    }
}
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    if (Start) {
        if (mp.getPlayerSprite(player2) == My_player) {
            if (Ready(My_player)) {
                if (sprites.readDataNumber(My_player, "Dir") != 1) {
                    sprites.setDataNumber(My_player, "Dir", 3)
                    if (Can_i_move_here(My_player)) {
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), true)
                        My_player.sayText(convertToText(sprites.readDataNumber(My_player, "E")), 500, false)
                    }
                } else {
                    if (Can_i_Utrun_here(My_player)) {
                        sprites.setDataNumber(My_player, "Dir", 3)
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), false)
                    }
                }
            }
        }
    }
})
function TimeToFixTile (Idx: number) {
    FixTileAt(Idx)
    FixTileAt(Idx + 1)
    FixTileAt(Idx + MapCol)
    FixTileAt(Idx - 1)
    FixTileAt(Idx - MapCol)
}
function Walk_in_direction (Dir: number, Walk: boolean) {
    if (!(Walk)) {
        sprites.setDataNumber(My_player, "E", 0)
    } else {
        if (Dir == 1) {
            My_player.fx = 30
            My_player.vx = Math.sqrt(2 * (My_player.fx * 8))
        } else if (Dir == 2) {
            My_player.fy = 30
            My_player.vy = Math.sqrt(2 * (My_player.fy * 8))
        } else if (Dir == 3) {
            My_player.fx = 30
            My_player.vx = 0 - Math.sqrt(2 * (My_player.fx * 8))
        } else {
            My_player.fy = 30
            My_player.vy = 0 - Math.sqrt(2 * (My_player.fy * 8))
        }
        sprites.changeDataNumberBy(My_player, "E", -1)
    }
}
function RenderTile () {
    for (let index = 0; index <= MapCol * MapRow - 1; index++) {
        if (TileGrid[index] >= 0) {
            TimeToFixTile(index)
            tiles.setTileAt(tiles.getTileLocation(OffCol + index % MapCol, OffRow + Math.floor(index / MapCol)), Map_asset[TileGrid[index]])
        } else {
            tiles.setTileAt(tiles.getTileLocation(OffCol + index % MapCol, OffRow + Math.floor(index / MapCol)), assets.tile`myTile`)
        }
    }
}
function Create_item (Image2: Image, Name: string, Value: number) {
    Item_sprite = sprites.create(Image2, SpriteKind.Item)
    sprites.setDataString(Item_sprite, "Name", Name)
    sprites.setDataNumber(Item_sprite, "Val", Value)
    return Item_sprite
}
function Can_i_move_here (Asker: Sprite) {
    Player_location = Asker.tilemapLocation()
    if (sprites.readDataNumber(Asker, "Dir") == 1 && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`)) {
        return false
    }
    if (sprites.readDataNumber(Asker, "Dir") == 2 && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`)) {
        return false
    }
    if (sprites.readDataNumber(Asker, "Dir") == 3 && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile`)) {
        return false
    }
    if (sprites.readDataNumber(Asker, "Dir") == 4 && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile`)) {
        return false
    }
    return true
}
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    if (Start) {
        if (mp.getPlayerSprite(player2) == My_player) {
            if (Ready(My_player)) {
                if (sprites.readDataNumber(My_player, "Dir") != 3) {
                    sprites.setDataNumber(My_player, "Dir", 1)
                    if (Can_i_move_here(My_player)) {
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), true)
                        My_player.sayText(convertToText(sprites.readDataNumber(My_player, "E")), 500, false)
                    }
                } else {
                    if (Can_i_Utrun_here(My_player)) {
                        sprites.setDataNumber(My_player, "Dir", 1)
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), false)
                    }
                }
            }
        }
    }
})
function Get_stucked (Asker: Sprite) {
    Player_location = Asker.tilemapLocation()
    if (sprites.readDataNumber(Asker, "Dir") == 1) {
        if (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`) && (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile`) && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`))) {
            return true
        }
    }
    if (sprites.readDataNumber(Asker, "Dir") == 2) {
        if (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`) && (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile`) && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`))) {
            return true
        }
    }
    if (sprites.readDataNumber(Asker, "Dir") == 3) {
        if (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile`) && (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile`) && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile`))) {
            return true
        }
    }
    if (sprites.readDataNumber(Asker, "Dir") == 4) {
        if (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile`) && (tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile`) && tiles.tileAtLocationEquals(Player_location.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile`))) {
            return true
        }
    }
    return false
}
function Get_overlaps (Player: Sprite) {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (Player.overlapsWith(value)) {
            return value
        }
    }
    return spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
}
function Generate_new_map (Width: number, Hight: number, OffsetCol: number, OffsetRow: number, Count: number, Max: number) {
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`myTile0`)) {
        if (Math.percentChance(randint(50, 90))) {
            Tile_gen = randint(0, 3)
            if (Tile_gen == 0) {
                if (value2.column < OffsetCol + Width) {
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile1`)
                }
            } else if (Tile_gen == 1) {
                if (value2.row < OffsetRow + Hight) {
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile1`)
                }
            } else if (Tile_gen == 2) {
                if (value2.column > OffsetCol) {
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile1`)
                }
            } else {
                if (value2.row > OffsetRow) {
                    tiles.setTileAt(value2.getNeighboringLocation(CollisionDirection.Top), assets.tile`myTile1`)
                }
            }
        }
    }
    if (Count > Max) {
        for (let value3 of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.setTileAt(value3, assets.tile`myTile0`)
        }
        OffCol = OffsetCol - 1
        OffRow = OffsetRow
        MapCol = Width + 3
        MapRow = Hight + 1
        return
    }
    Generate_new_map(Width, Hight, OffsetCol, OffsetRow, Count + 1, Max)
}
function Get_player_on_tile (Col: number, Row: number) {
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        if (Col == value.tilemapLocation().column && Row == value.tilemapLocation().row) {
            return value
        }
    }
    return spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
}
function Ground_setup () {
    Setup_asset()
    for (let value3 of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setTileAt(value3, assets.tile`myTile31`)
    }
    TileGrid = []
    for (let I = 0; I <= MapRow - 1; I++) {
        TileGrid.push(-1)
        for (let J = 0; J <= MapCol - 3; J++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(OffCol + 1 + J, OffRow + I), assets.tile`myTile31`)) {
                TileGrid.push(0)
            } else {
                TileGrid.push(-1)
            }
        }
        TileGrid.push(-1)
    }
    RenderTile()
}
function Setup_item () {
    for (let index2 = 0; index2 < randint(2, 5); index2++) {
        tiles.placeOnRandomTile(Create_item(img`
            . . . . . . 9 9 
            . . . . . 9 9 9 
            . . . . 9 9 9 . 
            8 8 . 9 9 9 . . 
            8 6 6 9 9 . . . 
            . d 6 6 . . . . 
            d d d 6 8 . . . 
            d d . 8 8 . . . 
            `, "A", 1), assets.tile`myTile0`)
        Check_overlap_in_setup()
    }
    for (let index2 = 0; index2 < randint(2, 5); index2++) {
        tiles.placeOnRandomTile(Create_item(img`
            . e e e e e e . 
            . e e e e e e . 
            . e e e e e e . 
            . e e e e e e . 
            . . e e e e . . 
            . . . 1 1 . . . 
            . . 1 1 1 1 . . 
            . . 1 1 1 1 . . 
            `, "H", 1), assets.tile`myTile0`)
        Check_overlap_in_setup()
    }
    for (let index2 = 0; index2 < randint(2, 5); index2++) {
        tiles.placeOnRandomTile(Create_item(img`
            . . e e e e . . 
            . . . e e . . . 
            . . 1 . . 1 . . 
            . 1 9 9 9 9 1 . 
            . 1 9 9 9 9 1 . 
            . 1 9 9 9 9 1 . 
            . 1 9 9 9 9 1 . 
            . . 1 1 1 1 . . 
            `, "E", 2), assets.tile`myTile0`)
        Check_overlap_in_setup()
    }
}
function Can_i_Utrun_here (Asker: Sprite) {
    if (sprites.readDataNumber(Asker, "E") == Max_energy) {
        return true
    }
    return false
}
function Get_re_player_ID () {
    index = 0
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        sprites.setDataNumber(value, "Player", index)
        sprites.setDataNumber(sprites.readDataSprite(value, "Hitbox"), "Player", index)
        index += 1
    }
    Max_player += -1
    Trun = Trun % Max_player
    My_player = New_trun(Trun)
}
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (Start) {
        if (mp.getPlayerSprite(player2) == My_player) {
            if (Ready(My_player)) {
                if (sprites.readDataNumber(My_player, "Dir") != 2) {
                    sprites.setDataNumber(My_player, "Dir", 4)
                    if (Can_i_move_here(My_player)) {
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), true)
                        My_player.sayText(convertToText(sprites.readDataNumber(My_player, "E")), 500, false)
                    }
                } else {
                    if (Can_i_Utrun_here(My_player)) {
                        sprites.setDataNumber(My_player, "Dir", 4)
                        Walk_in_direction(sprites.readDataNumber(My_player, "Dir"), false)
                    }
                }
            }
        }
    }
})
let index = 0
let Tile_gen = 0
let OffRow = 0
let OffCol = 0
let MapRow = 0
let EdgeTile = 0
let Max_energy = 0
let Player_location: tiles.Location = null
let MapCol = 0
let Recipe = ""
let TileGP = 0
let TileGrid: number[] = []
let Tile = 0
let MapGroup: number[] = []
let MapRecipe: string[] = []
let Map_asset: Image[] = []
let Colour = 0
let Item_sprite: Sprite = null
let Item_location: tiles.Location = null
let Start = false
let My_player: Sprite = null
let Trun = 0
let Playersprite: Sprite = null
let Player_rotation: Image[][] = []
let Max_player = 0
let select_maximum = false
let dir_frame = 0
select_maximum = true
pauseUntil(() => controller.anyButton.isPressed() && !(controller.down.isPressed() || (controller.A.isPressed() || controller.B.isPressed())))
select_maximum = false
if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
    Max_player = 3
} else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
    Max_player = 2
} else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
    Max_player = 4
}
tiles.loadMap(tiles.createSmallMap(tilemap`level4`))
Generate_new_map(5, 9, 11, 2, 1, randint(15, 20))
let Action = false
Player_rotation = []
let Hitbox_rotation: number[] = []
Setup_item()
for (let index = 0; index <= Max_player - 1; index++) {
    if (index == 0) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), Create_player(img`
            e e e e e e e e 
            e 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 e 
            e 2 2 2 2 1 1 e 
            e 2 2 2 2 1 1 e 
            e 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 e 
            e e e e e e e e 
            `, index, randint(1, 4)))
    } else if (index == 1) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), Create_player(img`
            8 8 8 8 8 8 8 8 
            8 6 6 6 6 6 6 8 
            8 6 6 6 6 6 6 8 
            8 6 6 6 6 1 1 8 
            8 6 6 6 6 1 1 8 
            8 6 6 6 6 6 6 8 
            8 6 6 6 6 6 6 8 
            8 8 8 8 8 8 8 8 
            `, index, randint(1, 4)))
    } else if (index == 2) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), Create_player(img`
            4 4 4 4 4 4 4 4 
            4 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 4 
            4 5 5 5 5 1 1 4 
            4 5 5 5 5 1 1 4 
            4 5 5 5 5 5 5 4 
            4 5 5 5 5 5 5 4 
            4 4 4 4 4 4 4 4 
            `, index, randint(1, 4)))
    } else {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), Create_player(img`
            6 6 6 6 6 6 6 6 
            6 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 6 
            6 7 7 7 7 1 1 6 
            6 7 7 7 7 1 1 6 
            6 7 7 7 7 7 7 6 
            6 7 7 7 7 7 7 6 
            6 6 6 6 6 6 6 6 
            `, index, randint(1, 4)))
    }
    mp.setPlayerState(mp.getPlayerByIndex(index), MultiplayerState.score, 0)
    tiles.placeOnRandomTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), assets.tile`myTile0`)
    while (Get_item_on_tile(Playersprite.tilemapLocation().column, Playersprite.tilemapLocation().row) || !(Get_player_on_tile(Playersprite.tilemapLocation().column, Playersprite.tilemapLocation().row))) {
        tiles.placeOnRandomTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), assets.tile`myTile0`)
    }
}
Ground_setup()
Trun = randint(0, Max_player - 1)
My_player = New_trun(Trun)
My_player.sayText(convertToText(sprites.readDataNumber(My_player, "E")), 500, false)
Playersprite = spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
Start = true
game.onUpdate(function () {
    if (My_player) {
        My_player.setImage(Player_rotation[sprites.readDataNumber(My_player, "P#")][sprites.readDataNumber(My_player, "Dir") - 1])
        if (Ready(My_player)) {
            tiles.placeOnTile(My_player, My_player.tilemapLocation())
            if (!(sprites.readDataBoolean(My_player, "St")) && Get_stucked(My_player)) {
                sprites.setDataNumber(My_player, "E", 0)
                sprites.setDataBoolean(My_player, "St", true)
            }
            if (sprites.readDataNumber(My_player, "E") <= 0) {
                Item_sprite = Get_item_on_tile(My_player.tilemapLocation().column, My_player.tilemapLocation().row)
                if (Item_sprite) {
                    Get_Player_upgraded()
                }
                if (!(Playersprite)) {
                    Playersprite = Get_touching_on(My_player)
                    if (!(Playersprite)) {
                        Trun = (Trun + 1) % Max_player
                        My_player = New_trun(Trun)
                        My_player.sayText(convertToText(sprites.readDataNumber(My_player, "E")), 500, false)
                    }
                }
            }
        } else {
            sprites.setDataBoolean(My_player, "St", false)
        }
    }
})
game.onUpdate(function () {
    if (sprites.allOfKind(SpriteKind.Player).length <= 1) {
        Trun = sprites.allOfKind(SpriteKind.Player).length - 1
        My_player = Get_player_on_trun(Trun)
        mp.gameOverPlayerWin(mp.getPlayerBySprite(My_player))
    }
})
game.onUpdate(function () {
    if (Playersprite == My_player) {
        Playersprite = spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
    }
    if (Playersprite) {
        if (!(Action)) {
            Get_player_acttacked(sprites.readDataNumber(My_player, "Dir"), true, sprites.readDataNumber(My_player, "A"), Playersprite)
            Action = true
        }
        if (Ready(Playersprite)) {
            tiles.placeOnTile(Playersprite, Playersprite.tilemapLocation())
            if (sprites.readDataNumber(Playersprite, "H") <= 0 || Playersprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
                mp.changePlayerStateBy(mp.getPlayerBySprite(My_player), MultiplayerState.score, 2)
                sprites.destroy(Playersprite, effects.fire, 500)
                sprites.destroy(sprites.readDataSprite(Playersprite, "Hitbox"))
                Get_re_player_ID()
            }
            Action = false
            Playersprite = spriteutils.nullConsts(spriteutils.NullConsts.Undefined)
        }
    }
})
