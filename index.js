const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("min");
const secondsEl=document.getElementById("seconds");
const ampmEl=document.getElementById("ampm");

function updateClock(){
    let date= new Date();
let hour=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let amorpm="AM";

if(hour>=12){
    amorpm="PM";
}

hour = hour < 10 ? "0" + hour: hour;
minutes = minutes < 10 ? "0" + minutes: minutes;
seconds = seconds < 10 ? "0" + seconds: seconds;

hourEl.innerText=hour;
minuteEl.innerText=minutes;
secondsEl.innerText=seconds;
ampmEl.innerText=amorpm;
setTimeout(()=>{
    updateClock();
},1000);

}

updateClock();