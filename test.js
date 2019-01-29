
const express = require('express');
const Stopwatch= require('node-stopwatch').Stopwatch;




const app = express();
let PORT = 5000;


let lecture={
    isInSession:function(session){
        if(session==true){
            var stopwatch= Stopwatch.create();
                stopwatch.start();
               console.log("ticks: " + stopwatch.elapsedTicks);
               console.log("milliseconds: " + stopwatch.elapsedMilliseconds);
            //    while (stopwatch) {
                   
                   
                       
            //    }
                console.log("seconds: " + stopwatch.elapsed.seconds);
                console.log("minutes: " + stopwatch.elapsed.minutes);
                console.log("hours: " + stopwatch.elapsed.hours);
 
                
            }else{
            console.log("No class")
        }
         //stop it now
                stopwatch.stop();
    }
}
lecture.isInSession(session = true); 




app.listen(PORT, function(){
    console.log('listening to port' + PORT);
});