export default class Speech {
  static synth = window.speechSynthesis;
  static SpeechRecognition = window.SpeechRecognition ||
  window.webkitSpeechRecognition;

  static speak(input, female = true) {
    console.log(input);
    const utterThis = new window.SpeechSynthesisUtterance(input);
    const voices = this.synth.getVoices();
    const doSpeak = () => {
      const voice = voices.find(v => v.name === (female ? "Fiona" : "Alex"));

      // Set voice params
      utterThis.voice = voice;

      // Speak
      this.synth.speak(utterThis);
    };

    if (voices.length) {
      doSpeak();
    } else {
      // http://stackoverflow.com/questions/21513706/getting-the-list-of-voices-in-speechsynthesis-of-chrome-web-speech-api
      window.speechSynthesis.onvoiceschanged = doSpeak;
    }
  }

  static recognize(cb) {
    return new Promise((resolve, reject) => {
      const recognition = new this.SpeechRecognition();

      recognition.lang = "en-US";
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;
      recognition.onresult = event => cb(event.results[0]);
      recognition.onerror = error => reject(error);

      recognition.start();
    });
  }
}
