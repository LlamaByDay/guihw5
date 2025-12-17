Github Pages URL: 
https://llamabyday.github.io/guihw5/hw5.html

Repository URL: 
https://github.com/LlamaByDay/guihw5

Citations:
refresh.svg and right-arrow.svg are from iconoir.com

Complete features:
Tiles propagate from a letter storage class that utilizes a map to track how many of each tile there are
Tiles can be dragged and dropped from the hand to spaces on the board, and back to the hand
Spaces can only hold one tile
The game can be reset with the reset button, removing all tiles and dealing a new hand
When one or more tiles are placed on the board sequentially, the play button scores the hand and updates the score
Scoring checks both the tile score, stored in the tile's html element, and the space type, stored in the space's 
    html element
When the play button is pressed when no tiles are on the board, or when tiles are not all sequential, an error 
    message is displayed and the score is not processed

Missing features:
The page cannot be resized. Initially I was just putting this off, but now I would at the very least have to replace
    the provided board image so I don't have to manually match the unevenly sized spaces.
No dictionary. I wanted to do this one, I just ran out of time
Blank tiles are scored properly but currently aren't built to "commit" as a tile when you play them

Partially implemented:
I'm going to be honest, I have no idea whether this counts as partially or fully implemented. Tiles revert to their
    original position when dropped, rather than always returning to the hand. If dropped from the hand they'll return
    to the hand, and if dropped from a board space they will return to that board space.
I did not read the scoring instructions until finished, which is why tiles can be placed out of sequence and the game
    doesn't yell at you until you try to submit it. *Personally* I find this to be a cleaner play experience than
    bouncing when not placed sequentially, but I may be biased as it is far too late for me to change this