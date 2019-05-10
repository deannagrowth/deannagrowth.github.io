window.onload = function(){ 
document.getElementById("myClick").onclick = function() {
    document.getElementById("mainHead").innerHTML = "&#9829;" + document.getElementById("mainHead").innerHTML + "&#9829;";
}






//global variables
var oneButton = document.getElementById('calc-one');
var twoButton = document.getElementById('calc-two');
var threeButton = document.getElementById('calc-three');
var fourButton = document.getElementById('calc-four');
var fiveButton = document.getElementById('calc-five');
var sixButton = document.getElementById('calc-six');
var sevenButton = document.getElementById('calc-seven');
var eightButton = document.getElementById('calc-eight');
var nineButton = document.getElementById('calc-nine');
var zeroButton = document.getElementById('calc-zero');
    
var decimalButton = document.getElementById('calc-decimal');
var backspaceButton = document.getElementById('backspace');
var clearButton = document.getElementById('clear');
    
var backspaceButton = document.getElementById('backspace');
var displayValElement = document.getElementById('backspace');
   
    
    
    
    
    
//function that adds two numbers together
function addMe(){
    //sum is local to the function
    var sum = Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
    console.log(sum);
}

function addMeToo(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = Number(n1) + Number(n2);
    console.log(sum);
}



}