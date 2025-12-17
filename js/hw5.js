//github.com/llamabyday

var handContainerTiles = $("#handContainerTiles");
var boardContainerDroppables = $("#boardContainerDroppables");
var scoreCounter = $("#scoreCounter");
var topScoreCounter = $("#topScoreCounter");
var errorDiv = $("#errorDiv");

var scrabbleBag;
var globalScore = 0;
var topScore = 0;

$(document).ready(function() {
    scrabbleBag = new letterStorage();
    fillHand();
});

function fillHand() {
    var currentSize = handContainerTiles.children().length;
    //console.log(currentSize);
    for (let i = 0; i < (7-currentSize); i++) {
        var newLetter = scrabbleBag.pull(); // grab letter randomly from bag
        if (newLetter == null) {
            return;
        }
        // in the format [letterString, letterData], where letterString is the letter and letterData has properties .count and .value. yes I know this is ugly I'm sorry
        var newContainer = $(`<div class="handSingleTileDiv"></div>`); // Make new div to hold tile image
        var newTile = $(`<img src="images/Scrabble_Tiles/Scrabble_Tile_${newLetter[0]}.jpg" class="tile">`); // Make new tile img
        newTile.attr("data-letter", newLetter[0]); // Make the tile img able to remember its letter
        newTile.attr("data-score", newLetter[1].value); //Make the tile img able to remember its score
        newTile.draggable({revert: "invalid"});
        newContainer.append(newTile);
        handContainerTiles.append(newContainer);
    }
}

function playHand() {
    var stringSubmission = ""; // construct a string out of the current board state, then regex it for viability
    boardContainerDroppables.children(".boardDrop").each(function(index, element) { // god bless whoever made .each always go in dom order
        if ($(this).children().length > 0) {
            stringSubmission += $(this).children("img").attr("data-letter");
        } else {
            stringSubmission += "-";
        }
    });
    const sequentialTiles = /^-*[A-Z~]+-*$/; // are there any gaps between placed tiles?
    if (sequentialTiles.test(stringSubmission)) { 
        //I'm leaving this mess here because I think it's entertaining. it did technically work
        /*let firstMatch = stringSubmission.search(/[A-Z]/);
        let matchedLength = /[A-Z]+/.exec(stringSubmission)[0].length;
        var spaceArray = $("#boardContainerDroppables").children();
        for (let i = 0; i < matchedLength; i++) {
            console.log($(spaceArray[i+firstMatch]).children().attr("data-letter"));
        }*/
       //Anyway then I realized I could do this in one line
       //I do think the messier one might technically be faster though, no dom searching involved
        var fullDouble = false;
        var totalScore = 0;
        var singleDouble;
        var tileType;
        boardContainerDroppables.find(".tile").each(function(index, element) {
            tileType = $(this).parent().attr("data-type"); // tile score modifiers
            singleDouble = false;
            if (tileType == "fullDouble") {
                fullDouble = true;
            } else if (tileType == "singleDouble") {
                singleDouble = true;
            }
            totalScore += $(this).attr("data-score") * (singleDouble ? 2 : 1);
            destroyTile($(this));
        });
        totalScore *= (fullDouble ? 2 : 1);
        globalScore += totalScore;
        scoreCounter.text(globalScore);
        if (topScore < globalScore) {
            topScore = globalScore;
            topScoreCounter.text(topScore);
        }
        var playedWord = /[A-Z~]+/.exec(stringSubmission)[0];
        fillHand();
        errorDiv.html("");
    } else if (/^-*$/.test(stringSubmission)) {
        errorDiv.html(`<p class="error">Please place tiles from your hand onto the board.</p>`);
    } else {
        errorDiv.html(`<p class="error">Please place tiles on the board sequentially, with no gaps.</p>`);
    }
}

function resetBoard() {
    handContainerTiles.find(".tile").each(function(index, element) {destroyTile(element)}); //pretty sure .find() in the relevant locations speeds up the dom search vs just $(".tile").each()
    boardContainerDroppables.find(".tile").each(function(index, element) {destroyTile(element)});
    fillHand();
    globalScore = 0;
    scoreCounter.text(globalScore);
}

function destroyTile(element) {
    let parent = $(element).parent();
    if (!parent.hasClass("boardDrop")) { //destroy singular temp hand containers
        parent.remove();
    } else {
        parent.droppable("option", "disabled", false); //re-enable filled board spaces
    }
    $(element).remove();
}