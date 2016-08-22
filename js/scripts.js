// Back End
var incompleteItems = [];
var completeItems = [];
var text;

function Item(name, done) {
  this.itemName = name;
  this.done = done;
  incompleteItems.push(this);
}

var removeChecked = function() {
  for (var i = 0; i<incompleteItems.length; i++){
    if (incompleteItems[i].itemName == text) {
      incompleteItems[i].done = true;
      completeItems.push(incompleteItems[i]);
      incompleteItems.splice(i, 1);
    }
  }
}

// Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();

    var newItem = new Item(userInput, false);


    $("#checklist").append("<li class='listItem'><label><input type='checkbox'>" + newItem.itemName + "</label></li>");

    $("#userInput").val("");
  });

  $("#saveButton").click(function(){
    $(".listItem").each(function() {
      if ($(this).find(':nth-child(1)').is(":checked")) {
        text = $(this).text();
        removeChecked();
      }
      $('ul').empty();
      for (var i = 0; i<incompleteItems.length; i++){
        $('ul').append(("<li class='listItem'><label><input type='checkbox'>" + incompleteItems[i].itemName + "</label></li>"))
      }
    });
  });
});
