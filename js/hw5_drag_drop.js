$(".tile").draggable({
    revert: "invalid"
});
$(".boardDrop").droppable({
    tolerance: "pointer",
    drop: function( event, ui ) {
        var oldContainer = ui.draggable.parent();
        $(this).append(ui.draggable);
        ui.draggable.position({ //if you append without resetting the position, the draggable position relative to the old container will become relative to the new container
            my: "center",
            at: "center",
            of: $(this)
        });
        $(this).droppable("option", "disabled", true); //If you don't disable on entry tiles can stack
        if (!oldContainer.hasClass("boardDrop")) {
            oldContainer.remove();
        } else {
            oldContainer.droppable("option", "disabled", false); //make sure to re-enable it on the way out
        }
    }
});
$("#handContainerTiles").droppable({
    tolerance: "pointer",
    drop: function( event, ui ) {
        var oldContainer = ui.draggable.parent();
        var newContainer = $(`<div class="handSingleTileDiv"></div>`);
        newContainer.append(ui.draggable);
        $(this).append(newContainer);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: newContainer
        });
        if (!oldContainer.hasClass("boardDrop")) {
            oldContainer.remove();
        } else {
            oldContainer.droppable("option", "disabled", false);
        }
    }
});