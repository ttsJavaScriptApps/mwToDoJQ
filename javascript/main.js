

// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.
// get value of the text input
var inputBox = document.getElementById('inputBox');
var toDoList = document.querySelector('ul');
var addNewItemBtn = document.querySelector('#btn');

addNewItemBtn.addEventListener('click', addNewItem);
// add functionality for 'enter' key
inputBox.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    addNewItem();
  } else {
  	// do nothing
  }
});

toDoList.addEventListener('click', function(event){
  var itemRemove = event.target;
  var itemParent = event.target.parentElement;
  // console.log(itemParent.nodeName);
  itemRemove.style["text-decoration"] = 'line-through';
  if (itemParent.nodeName != 'UL') {
		setTimeout(function(){ 
			itemParent.remove();
		}, 1000);
  } else {
		setTimeout(function(){ 
			itemRemove.remove();
		}, 1000);  	
  }

})

function addNewItem() {
	if (inputBox.value === '' || inputBox.value === inputBox.defaultValue) {
		alert('Please add a new item.');	
	} else {
		var newItem = document.createElement("li")
	  newItem.innerHTML = '<a href="#">' + inputBox.value +'</a>'
	  toDoList.appendChild(newItem);
	  inputBox.value = "";	
	}
}