//your code here
$(function() {
	$( "#parent" ).sortable({
      revert: true
    });
  $(".draggable").draggable({
	  // connectToSortable: "#sortable",
   //  revert: "invalid",
   //  zIndex: 100
	 connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
  });

  $(".droppable").droppable({
    drop: function(event, ui) {
      var draggableId = ui.draggable.attr("id");
      var droppableId = $(this).attr("id");
      var draggableBg = ui.draggable.css("background-image");
      var droppableBg = $(this).css("background-image");
      
      ui.draggable.css("background-image", droppableBg);
      $(this).css("background-image", draggableBg);
    }
  });
});
