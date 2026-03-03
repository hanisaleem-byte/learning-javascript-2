/* ========== 1. SIGNUP FORM ========== */
document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  document.getElementById("output").innerHTML =
    "Name: " + name + "<br>Email: " + email + "<br>Password: " + pass;
});

/* ========== 2. READ MORE ========== */
document.getElementById("readBtn").addEventListener("click", function(){
  var text = document.getElementById("moreText");

  if(text.style.display === "none"){
    text.style.display = "inline";
    this.innerHTML = "Read Less";
  } else {
    text.style.display = "none";
    this.innerHTML = "Read More";
  }
});

/* ========== 3. STUDENT TABLE ========== */
var selectedRow = null;

document.getElementById("studentForm").addEventListener("submit", function(e){
  e.preventDefault();

  var name = document.getElementById("sname").value;
  var cls = document.getElementById("sclass").value;
  var age = document.getElementById("sage").value;

  var table = document.getElementById("table");
  var row = table.insertRow();

  row.insertCell(0).innerHTML = name;
  row.insertCell(1).innerHTML = cls;
  row.insertCell(2).innerHTML = age;
  row.insertCell(3).innerHTML =
    "<button onclick='editRow(this)'>Edit</button> " +
    "<button onclick='deleteRow(this)'>Delete</button>";
});

function deleteRow(btn){
  var row = btn.parentNode.parentNode;
  row.remove();
}

function editRow(btn){
  selectedRow = btn.parentNode.parentNode;

  document.getElementById("editName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("editClass").value = selectedRow.cells[1].innerHTML;
  document.getElementById("editAge").value = selectedRow.cells[2].innerHTML;

  document.getElementById("editForm").style.display = "block";
}

document.getElementById("updateBtn").addEventListener("click", function(){
  selectedRow.cells[0].innerHTML = document.getElementById("editName").value;
  selectedRow.cells[1].innerHTML = document.getElementById("editClass").value;
  selectedRow.cells[2].innerHTML = document.getElementById("editAge").value;

  document.getElementById("editForm").style.display = "none";
});