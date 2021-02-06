function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("newTask").value;
    let task = document.createTextNode(inputValue);
    li.appendChild(task);
    document.getElementById("tasksList").appendChild(li);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode(" \u00D7");
    span.className = "clear";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

let close = document.getElementsByClassName("clear");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}