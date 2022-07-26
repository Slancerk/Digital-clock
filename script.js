const hourel= document.getElementById("hour");
const minuteel= document.getElementById("minute");
const secondel= document.getElementById("second");
const ampmel= document.getElementById("ampm");



function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="Am";

if(h>12){
    h=h-12;
    ampm="PM";
}
h=h<10 ? "0" + h :h;
m=m<10 ? "0" + m :m;
s=s<10 ? "0" + s :s;



hourel.innerText=h;
minuteel.innerText=m;
secondel.innerText=s;
ampmel.innerText=ampm;



setTimeout(() => {
    updateclock();
}, 1000);
}

updateclock();

