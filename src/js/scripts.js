function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newTask").value;
    var task = document.createTextNode(inputValue);
    li.appendChild(task);
    document.getElementById("tasksList").appendChild(li);
}

