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
  // Functions to repopulate list
  var showIncomplete = function() {
    for (var i = 0; i<incompleteItems.length; i++){
      $('ul').append("<li class='listItem'><label><input type='checkbox'>" + incompleteItems[i].itemName + "</label></li>");
    }
  }

  var showComplete = function() {
    for (var i = 0; i<completeItems.length; i++){
      $('ul').append("<li class='listItem'><label><input type='checkbox' checked>" + completeItems[i].itemName + "</label></li>");
    }
  }

  // Submit Button
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("#userInput").val();

    var newItem = new Item(userInput, false);


    $("#checklist").append("<li class='listItem'><label><input type='checkbox'>" + newItem.itemName + "</label></li>");

    $("#userInput").val("");
  });

  // List Update Buttons
  $("#removeChecked").click(function(){
    $(".listItem").each(function() {
      if ($(this).find(':nth-child(1)').is(":checked")) {
        text = $(this).text();
        removeCheckedItems();
      }
      $('ul').empty();
      showIncomplete();
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
      showComplete();
    });
    $("#removeChecked").hide();
  });

  // Toggle List Buttons
  $("#incompleteButton").click(function() {
    $('ul').empty();
    showIncomplete();
    $("#removeChecked").show();
    $("#removeUnchecked").hide();
  });

  $("#completeButton").click(function() {
    $('ul').empty();
    showComplete();
    $("#removeChecked").hide();
    $("#removeUnchecked").show();
  });

  $("#allButton").click(function() {
    $('ul').empty();
    showIncomplete();
    showComplete();
    $("#removeChecked").show();
    $("#removeUnchecked").show();
  });
});
