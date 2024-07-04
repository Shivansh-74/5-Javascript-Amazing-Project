const clock = document.getElementById("clock")
function Time(){
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    // const msec = now.getMilliseconds();

    const time = `
    <span>${hour}</span>
    <span>:</span>
    <span>${min}</span>
    <span>:</span>
    <span>${sec}</span>    
    `
    clock.innerHTML = time
}
setInterval(Time,1000)
