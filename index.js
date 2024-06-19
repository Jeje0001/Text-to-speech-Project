
let speech= new SpeechSynthesisUtterance()
let spat=window.speechSynthesis

let voices=[];

let voiceselect= document.querySelector("select")

console.log(spat.getVoices())

spat.onvoiceschanged=()=>{
    voices=spat.getVoices()
    speech.voice=voices[0]
    voices.forEach((voice,i)=>
    (voiceselect.options[i] =new Option(voice.name,i)))

}

voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value]
})
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    spat.speak(speech)
    console.log(speech)
   
})

document.querySelector("#bb").addEventListener("click",()=>{
    spat.pause(); // Stop the speech
    
    console.log("jeje")
})

document.querySelector("#cc").addEventListener("click",()=>{
    spat.resume()
})