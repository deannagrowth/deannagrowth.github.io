window.onload = function(){ 
    //define the time
    var start = new Date().getTime();
    //set up function
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
        return color;
}
    function makeShapeAppear(){
        var top = Math.random() * 400; 
        var left = Math.random() * 400; 
        var width = Math.random() * 300;
        //set variable first, then get element 
        if(Math.random()> 0.5){
            document.getElementById("shape").style.borderRadius = "50%"
        } else {
            document.getElementById("shape").style.borderRadius = "0";
        }
        document.getElementById("shape").style.backgroundColor = getRandomColor();
        document.getElementById("shape").style.width = width + "px" 
        document.getElementById("shape").style.height = width + "px"
        document.getElementById("shape").style.top = top + "px" 
        document.getElementById("shape").style.left = left + "px"
        document.getElementById("shape").style.display = 'block';
        //this helps the shape appear
        start = new Date().getTime();
        //you can use this because start is defined outside
        
    } 
    
    function appearAfterDelay() {
    //make shape appear after a few seconds
    setTimeout(makeShapeAppear, Math.random() * 2000);
    }
    
    appearAfterDelay();
    document.getElementById("shape").onclick = function(){
        document.getElementById("shape").style.display = 'none';
        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000; //to get time in seconds
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";
        //makeShapeAppear(); 
        //after everything this will make this shape
        //appear again
        //but this make it appear immediately
        //put setTimeout inside own function, is better than putting the code twice in program
        appearAfterDelay();
        
}
                          }