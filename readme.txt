Github Pages URL: 
https://llamabyday.github.io/guihw5/hw5.html

Repository URL: 
https://github.com/LlamaByDay/guihw5

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