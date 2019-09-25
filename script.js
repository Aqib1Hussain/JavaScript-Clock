const secondBox=document.querySelector(".seconds")
const minuteBox=document.querySelector(".minutes")
const hourBox=document.querySelector(".hours")

function hello(){
    setTimeout(hello,1000)
    let date=new Date;
    let seconds =date.getSeconds();
    let minutes =date.getMinutes();
    let hours =date.getHours();

    

    const display1=document.createElement("h1");
    const display2=document.createElement("h1");
    const display3=document.createElement("h1");
    
    display1.innerText=seconds;
    display2.innerText=minutes;
    display3.innerText=hours;


    secondBox.innerText="";
    minuteBox.innerText="";
    hourBox.innerText="";

    secondBox.appendChild(display1)
    minuteBox.appendChild(display2)
    hourBox.appendChild(display3)
    

    
    
}
hello()