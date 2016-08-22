var incompleteItems = [];
var completeItems = [];

function Item(name, done) {
  this.itemName = name;
  this.done = done;
  incompleteItems.push(this);
}

Item.prototype.check

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
        var text = $(this).text();
        for (var i = 0; i<incompleteItems.length; i++){
          if (incompleteItems[i].itemName == text) {
            incompleteItems[i].done = true;
            completeItems.push(incompleteItems[i]);
            incompleteItems.splice(i, 1);
          }
        }
      }
    });

    // for (var i = 0; i<incompleteItems.length; i++) {
    //   if (incompleteItems[i].done === true) {
    //
    //   }
    // }
  });
});


// For after lunch: Add button to remove chekced (i.e finished) items  Button will be connected to function that will reread the values in the original array to identify which done values equal true. it will then remove those items from the incompleteItems array and put them in a completeItem array.  Later project will be to disply complete, incomplete, or all items.

// Add id numbers to Item object for retrieving from array
