var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); // This runs when the speech recognition service starts 
recognition.onstart = function() { 
console.log("We are listening. Try speaking into the microphone."); 
}; 
recognition.onspeechend = function() { 
recognition.stop();
}
 recognition.onresult = function(event) { 
var transcript = event.results[0][0].transcript; 
var confidence = event.results[0][0].confidence;
document.getElementById("you").textContent = transcript; 
recognition.start();
}; // start recognition 
recognition.start();
