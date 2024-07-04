function convert(){
    const text = document.getElementById("text-input").value
    const speech = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(speech)
}