// This makes sure the document exists before your code tries to manipulate it.
$(document).ready(function () {
	// Store references to elements to target
	var inputBox = $('#inputBox');
	var toDoList = $('#toDoList');
	var addNewItemBtn = $('#btn');

	// Bind an event handler to the "click" JavaScript event on our button
	addNewItemBtn.on("click", function () {
		// invoke function to add new item
		addNewItem();
	});

	// add functionality for 'enter' key, Bind an event handler to the "keypress" JavaScript event
	inputBox.on( "keypress", function(e) {	
		// returns which keyboard key or mouse button was pressed for the event
	  var key = e.which || e.keyCode;
	  if (key === 13) { // 13 is enter
	  	// invoke function to add new item
	    addNewItem();
	  } else {
	  	// do nothing
	  }
	});

	toDoList.on("click", function () {
		// store reference to item that is clicked
	  var itemRemove = $(event.target);
	  // store reference to parent of item that is clicked
	  var itemParent = itemRemove.parent();

	  // change the styling of the item that is clicked
	  itemRemove.css('textDecoration', 'line-through');

	  // check that the parent is not the entire list
	  if (itemParent.is('ul')) {
	  	// create a timer that wait 1 sec before removing the list item
			setTimeout(function(){ 
				itemRemove.remove();
			}, 1000); 
	  } else {
	  	// if item clicked is anchor tag, remove list item
			setTimeout(function(){ 
				itemParent.remove();
			}, 1000); 	
	  }
	});

	// function to add new item to the list
	function addNewItem() {
		if (inputBox.val() === '' || inputBox.val() === inputBox.prop("defaultValue")) {
			// notify user that value is empty
			alert('Please add a new item.');	
		} else {
			// create new element
			var newItem = $('<li></li>')
			// create element, add element to new element containing input value 
		  newItem.html('<a href="#">' + inputBox.val() +'</a>');
		  // add created item to entire list
		  toDoList.append(newItem);
		  // clear input value from input element
		  inputBox.val("");	
		}
	}
});

















