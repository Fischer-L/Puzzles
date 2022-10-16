
You've decided to make an advanced version of a variant of the game Mahjong, incorporating runs.

Players have a number of tiles, each marked 0-9. The tiles can be grouped into pairs or triples of the same tile or runs.

A run is a series of three consecutive tiles, like 123, 678, or 456. 0 counts as the lowest tile, so 012 is a valid run, but 890 is not.

A complete hand consists of exactly one pair, and any number (including zero) of triples and/or three-tile runs. Each tile is used in exactly one triple, pair, or run.

Write a function that returns true or false depending on whether or not the collection represents a complete hand under these rules.
```
hand1 = "11123"          # true. 11 123
hand2 = "12131"          # true. Also 11 123. Tiles are not necessarily sorted.
hand3 = "11123455"       # true. 111 234 55
hand4 = "11122334"       # true. 11 123 234
hand5 = "11234"          # true. 11 234
hand6 = "123456"         # false. Needs a pair
hand7 = "11133355577"    # true. 111 333 555 77
hand8 = "11223344556677" # true. 11 234 234 567 567 among others
hand9 = "12233444556677" # true. 123 234 44 567 567
hand10 = "11234567899"   # false.
hand11 = "00123457"      # false.
hand12 = "0012345"       # false. A run is only three tiles
hand13 = "11890"         # false. 890 is not a valid run
hand14 = "99"            # true.
hand15 = "111223344"     # false.
```

Complexity Variable: N - Number of tiles in the input string
