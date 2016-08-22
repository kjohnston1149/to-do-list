function Item(name, done) {
  this.itemName = name;
  this.done = done;
}

// Front End
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#listItem").val();
    var doneValue = false;

    var newItem = new Item(userInput, doneValue);

    $("#checklist").append("<li><label><input type='checkbox'> " + newItem.itemName + "</label></li>");

    $("#listItem").val("");
  });
});
