var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition; 
var recognition = new SpeechRecognition(); // This runs when the speech recognition service starts 
recognition.onstart = function() { 
console.log("We are listening. Try speaking into the microphone."); 
}; 

recognition.onend = function() { 
recognition.start();
}

 recognition.onresult = function(event) { 
var transcript = event.results[0][0].transcript; 
var confidence = event.results[0][0].confidence;
document.getElementById("you").textContent = transcript; 
//ecognition.start();
}; // start recognition 
recognition.start();
