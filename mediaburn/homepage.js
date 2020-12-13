var i = 0;
var txt = 'Welcome to cyberspace ... :)';
var speed = 100;
var date = new Date();




function typeWriter() {
  if (i < txt.length) {
    document.getElementById("draw").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }  
}

function myFunction() {
    
  document.getElementById("dosomething").style.color = "#FF0000";
    
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("demo").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo").innerHTML = "The p element was dropped";
}
