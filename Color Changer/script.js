const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalID;
const start= function(){
    const changeBg = function(){
        document.body.style.backgroundColor = randomColor()
    }
    if(!intervalID){
        intervalID = setInterval(changeBg,500)

    }
    document.body.style.backgroundColor = randomColor()
}
const stop= function(){
clearInterval(intervalID);
intervalID = null;
}
document.getElementById('start').addEventListener('click',start)
document.getElementById('stop').addEventListener('click',stop)