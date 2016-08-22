// Back End
var incompleteItems = [];
var completeItems = [];
var text;

function Item(name, done) {
  this.itemName = name;
  this.done = done;
  incompleteItems.push(this);
}

var removeCheckedItems = function() {
  for (var i = 0; i<incompleteItems.length; i++){
    if (incompleteItems[i].itemName == text) {
      incompleteItems[i].done = true;
      completeItems.push(incompleteItems[i]);
      incompleteItems.splice(i, 1);
    }
  }
}

var removeUncheckedItems = function() {
  for (var i = 0; i<completeItems.length; i++){
    if (completeItems[i].itemName == text) {
      completeItems[i].done = false;
      incompleteItems.push(completeItems[i]);
      completeItems.splice(i, 1);
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

  $("#removeChecked").click(function(){
    $(".listItem").each(function() {
      if ($(this).find(':nth-child(1)').is(":checked")) {
        text = $(this).text();
        removeCheckedItems();
      }
      $('ul').empty();
      for (var i = 0; i<incompleteItems.length; i++){
        $('ul').append("<li class='listItem'><label><input type='checkbox'>" + incompleteItems[i].itemName + "</label></li>");
      }
    });
    $("#removeUnchecked").hide();
  });

  $("#removeUnchecked").click(function(){
    $(".listItem").each(function() {
      if (!$(this).find(':nth-child(1)').is(":checked")) {
        text = $(this).text();
        removeUncheckedItems();
      }
      $('ul').empty();
      for (var i = 0; i<completeItems.length; i++){
        $('ul').append("<li class='listItem'><label><input type='checkbox' checked>" + completeItems[i].itemName + "</label></li>");
      }
    });
    $("#removeChecked").hide();
  });



  $("#incompleteButton").click(function() {
    $('ul').empty();
    for (var i = 0; i<incompleteItems.length; i++){
      $('ul').append("<li class='listItem'><label><input type='checkbox'>" + incompleteItems[i].itemName + "</label></li>");
    }
    $("#removeChecked").show();
    $("#removeUnchecked").hide();
  });

  $("#completeButton").click(function() {
    $('ul').empty();
    for (var i = 0; i<completeItems.length; i++){
      $('ul').append("<li class='listItem'><label><input type='checkbox' checked>" + completeItems[i].itemName + "</label></li>");
    }
    $("#removeChecked").hide();
    $("#removeUnchecked").show();
  });

  $("#allButton").click(function() {
    $('ul').empty();
    for (var i = 0; i<incompleteItems.length; i++){
      $('ul').append("<li class='listItem'><label><input type='checkbox'>" + incompleteItems[i].itemName + "</label></li>");
    }
    for (var i = 0; i<completeItems.length; i++){
      $('ul').append("<li class='listItem'><label><input type='checkbox' checked>" + completeItems[i].itemName + "</label></li>");
    }
    $("#removeChecked").show();
    $("#removeUnchecked").show();
  });
});
