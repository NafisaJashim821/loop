let clock=()=>{
    let d = new Date();
    let h =d.getHours()
    let m = d.getMinutes()
    let s= d.getSeconds()
    let ampm = ""
    if(h>12){
        ampm = "PM"
    }
    if(h<12){
        ampm = "AM"
    }
   
    if(h<10){
        h = '0'+h
    }
    if(m<10){
        h = '0'+m
    }
    if(h<10){
        h = '0'+s
    }
    document.getElementById('hour').innerHTML = h +":";
    document.getElementById('min').innerHTML = m +":"
    document.getElementById('sec').innerHTML = s +":"
    document.getElementById('ampm').innerHTML = ampm +":"
    document.getElementById()

}

setInterval(()=>{
clock()
},1000)