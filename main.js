Screen_width = 0;
screen_height = 0;
apple="";
speak_data="";
to_number="";
x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
draw_apple="";
function preload()
{
    apple=loadImage("apple image.png");

}
 var SpeechRecognition = window.webkitSpeechRecognition;

 var recognition = new SpeechRecognition();

 function start()
 {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
    

 }

 recognition.onresult  = function(event)
 {
    console.log(event);

     content = event.results[0][0].transcript;
    to_number=Number(content);
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    if(Number.isInteger(to_number))
    {
            
        document.getElementById("status").innerHTML="Started drawing apple";
         draw_apple="set";
    }
    else
    {
        document.getElementById("status").innerHTML = "The speech has not recognized a number ";
    }

    }
    
    
    
    
function setup()
{
    
    Screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(Screen_width,screen_height-150);
   canvas.position(0,150);
}

function draw()
{
    if(draw_apple == "set")
    {
        for(var i =1; i<=to_number; i++)
        {
            x=Math.floor(Math.random()*700);
            y=Math.floor(Math.random()*400);
            image(apple,X,y,50,50);
            
        }


        
        document.getElementById("status").innerHTML =  to_number + "  Apple is drawn. ";

        draw_apple = "";
        speak_data=to_number + "Apple is drawn";
        speak();       
    }
}

function speak()
{
    var synth = window.speechSynthesis;
     var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis); 
      speak_data = "";
}
