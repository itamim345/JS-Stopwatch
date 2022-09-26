let min = 0;
let sec = 0;
let msec = 0;
let interVal;
let getMin = document.getElementById('min');
let getSec = document.getElementById('sec');
let getMsec = document.getElementById('m-sec');
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// Start with Event Listener
startBtn.addEventListener('click', ()=>{
   interVal = setInterval(timerStart,10);    
})

// Stop with Event Listener
stopBtn.addEventListener('click', ()=>{
    interVal = clearInterval(interVal);
})

// Reset with Event Listener
resetBtn.addEventListener('click', ()=>{
    interVal = clearInterval(interVal);
    min = '00';
    sec = '00';
    msec = '00';
    getMin.innerHTML = min;
    getSec.innerHTML =sec;
    getMsec.innerHTML = msec;
})

function timerStart(){
    //For Msec
    msec++;
    if(msec <= 9){
        getMsec.innerHTML = '0' + msec;
    }
    if(msec > 9){
        getMsec.innerHTML = msec;
    }
    //For Sec
    if(msec >= 60){
        sec ++;
        getSec.innerHTML = '0' + sec;
        msec = 0;
        getMsec.innerHTML = '0' + msec;
    }
    if(sec > 9){
        getSec.innerHTML = sec;
    }
    //For Min
    if(sec >= 60){
        min ++;
        getMin.innerHTML = '0' + min;
        sec = 0;
        getSec.innerHTML = '0' + sec;
    }
    if(min > 9){
        getMin.innerHTML = min;
    }
}

