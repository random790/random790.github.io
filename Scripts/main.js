var submit = document.getElementById("submit");
submit.addEventListener("click", displaydetail);

var row = 1;

function displaydetail(){
    var weight = document.getElementById("weight").value;
    var date = document.getElementById("date").value;
    var datstr=date.toString();

        if(!weight){
        alert("Please fill all the boxes");
        return;
    }


var we = document.getElementById("we");

var newRow = we.insertRow (row);

var cell0 = newRow.insertCell(0);
var cell1 = newRow.insertCell(1);

cell0.innerHTML = date;
cell1.innerHTML = weight;

row++;
}