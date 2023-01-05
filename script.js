let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let textarea = document.getElementById("textarea");
    let speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.lang = "en";
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
})