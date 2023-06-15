//Obtenemos la barra de búsqueda y el botón de reconocimiento de voz
const searchBar = document.getElementById("search-bar");
const voiceButton = document.getElementById("voice-button");

// Agregamos un evento click al botón de reconocimiento de voz
searchBar.addEventListener("click", () => {
  // Creamos un objeto de reconocimiento de voz
  const recognition = new webkitSpeechRecognition();

  // Establecemos el idioma de reconocimiento de voz en el idioma del usuario
  recognition.lang = window.navigator.language;

  // Comenzamos a escuchar la voz del usuario
  recognition.start();

  // Cuando se detecta una pausa en la voz del usuario, detenemos el reconocimiento de voz
  recognition.onresult = (event) => {
    const searchTerm = event.results[0][0].transcript;
    searchBar.value = searchTerm;
  };
});
