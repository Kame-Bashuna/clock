const hourhand=document.querySelector('.Hour-Hand')
const minutehand=document.querySelector('.Minute-Hand')
const clockface=document.querySelector('Clock-face')
const scondhand=document.querySelector('Second-Hand')


function setClock(){
    const now=newDate();
    const hours=now.getHours()%12;
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();

    const hourAngle=(hours*30)+(minutes/2)
    const minutesAngle=(minutes*6)+(seconds/10)
    const secondAngle=seconds*6
}