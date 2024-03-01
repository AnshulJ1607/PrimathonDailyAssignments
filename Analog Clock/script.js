/*
//hours
12 hour = 360deg
1 hour=360/12 =30
h hours=30h +m/2

60min=30
1min=30/60 =1/2
m min =(1/2)m

//minutes
60min=360deg
1min=360/60=6deg
m min=6m 

//seconds
60sec=360deg
1 sec=360/60 =6deg
s sec=6s */

let hr= document.getElementById('hour');
let min= document.getElementById('min');
let sec= document.getElementById('sec');

function displayTime(){
    let date =new Date();

    // Getting hour,min.secs from data
    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform =`rotate(${hRotation}deg)`;
    min.style.transform =`rotate(${mRotation}deg)`;
    sec.style.transform =`rotate(${sRotation}deg)`;
}

setInterval(displayTime,1000);
