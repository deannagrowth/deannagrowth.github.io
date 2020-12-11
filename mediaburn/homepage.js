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
    
  document.getElementById("dosomething").style.color = "#2813d1";
    
}
