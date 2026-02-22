/// QUESTION NO 01
 function greet() {
  var msg = "HELLO WORLD🎇";
  alert(msg)
}
function price() {
  var msg = "SORRY! THE PRODUCT SOLD OUT ";
  alert(msg)
}
function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.remove();
}
function onmousepic(e){
    e.src="https://i.pinimg.com/originals/48/b5/4b/48b54be2f4add52b8ec9a778293fa3fa.gif"

}
function mouseoutpic(e){
    e.src="https://i.pinimg.com/736x/db/4f/5a/db4f5a8505f48bcb175b41a9366bf297.jpg"

}
// Counter variable
var counter = 0;

// Function to increase counter using increment operator
function increase() {
  counter++; // same as counter = counter + 1
  document.getElementById("counter").innerHTML = counter;
}

// Function to decrease counter using decrement operator
function decrease() {
  counter--; // same as counter = counter - 1
  document.getElementById("counter").innerHTML = counter;
}