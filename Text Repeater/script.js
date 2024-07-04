function Repeat(){
    const text = document.getElementById("textArea").value;
    const repeat = document.getElementById("repeat").value;

    const out = document.getElementById("h1")
    for(let i=1;i<=repeat;i++){
    out.innerText+=`${text}\n`;
    }
    
 }