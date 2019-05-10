window.onload = function(){
var score;
score = 0;
var q1;
var counter = 0; 
var quiz;
    var quiz = document.getElementById("quiz").querySelectorAll("div")
    console.log(quiz);
    for(i=1; i <quiz.length; i++){
        quiz[i].classList.add('disabled');
    
    }
q1= document.getElementById("button").onclick = function(){ console.log(quiz[counter].querySelector('select').value);

    if(quiz[counter].querySelector('select').value == 
       quiz[counter].getAttribute('correctAnswer')){
       score++;
        document.getElementById("score").innerHTML = score 
        quiz[counter].classList.add('disabled')
        //disable current question
        //[] index
         counter++;
        //disable current question
        if(counter>=quiz.length){
            window.location.href = "index.html"
        } else {
    
        quiz[counter].classList.remove('disabled')
        }
       }
    
    

    }
 }
