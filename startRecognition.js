const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const status = document.getElementById("status"),
  output = document.getElementById("result");

startRecognition = () => {
  if (SpeechRecognition !== undefined) {
    let recognition = new SpeechRecognition();

    recognition.onstart = () => {
      status.innerHTML = `Starting listening, speak in the microphone please 🦻`;
      output.classList.add("hide");
    };

    recognition.onspeechend = () => {
      status.innerHTML = `I stopped listening `;
      recognition.stop();
    };

    recognition.onresult = (result) => {
      output.classList.remove("hide");
      output.innerHTML = `<b>${result.results[0][0].transcript}</b>`;
    };

    recognition.start();
  } else {
    status.innerHTML = "sorry not supported 😭";
  }
};
