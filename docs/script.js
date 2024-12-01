const API_URL = 'https://dialogflow.cloud.google.com/#/editAgent/newagent-jfce/'; 
const API_KEY = 'AIzaSyBL9AONfGo4oqDbOhIZ2-rd0FdIfdB9ezk';  // Sustituye por tu clave de API

// Función para enviar una solicitud de texto a Dialogflow
async function sendToDialogflow(queryText) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${AIzaSyBL9AONfGo4oqDbOhIZ2-rd0FdIfdB9ezk}`, // Autenticación con la clave de API
    },
    body: JSON.stringify({
      queryInput: {
        text: {
          text: queryText,  // El texto que el usuario ingresa
          languageCode: 'es',  // Idioma, por ejemplo 'es' para español
        },
      },
    }),
  });

  // Procesamos la respuesta de Dialogflow
  const data = await response.json();
  return data.queryResult.fulfillmentText;  // Devuelve el texto de respuesta de Dialogflow
}

// Función para manejar la interacción con el usuario
async function interact() {
  const userInput = document.getElementById('text-input').value;  // Captura la entrada del usuario
  const botResponse = await sendToDialogflow(userInput);  // Envía la entrada a Dialogflow y obtiene la respuesta
  document.getElementById('chat-window').innerHTML += `<div class="text-gray-300"><strong>Broki:</strong> ${botResponse}</div>`;  // Muestra la respuesta del bot
}

// Evento para manejar el clic en el botón de envío
document.getElementById('keyboard-button').addEventListener('click', interact);

// Manejo de entrada por teclado (cuando se presiona "Enter")
document.getElementById('text-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const userInput = document.getElementById('text-input').value.trim();
    if (userInput) {
      interact();
    }
  }
});
