var i = 0;
var txt = 'Welcome to my growth ... :)';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("draw").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }  
}
function myFunction() {
    
  document.getElementById("dosomething").style.color = "#2813d1";
    
}