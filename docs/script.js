const API_URL = 'https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent'; // Sustituye con tu URL de API
const API_KEY = 'AIzaSyBL9AONfGo4oqDbOhIZ2-rd0FdIfdB9ezk';  // Sustituye por tu clave de API

// Función para enviar una solicitud de texto a Dialogflow
async function sendToDialogflow(queryText) {
  const sessionId = '123456'; // Puedes usar un ID único para cada sesión
  const response = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      session: `projects/YOUR_PROJECT_ID/agent/sessions/${sessionId}`,
      queryInput: {
        text: {
          text: queryText,  // El texto que el usuario ingresa
          languageCode: 'es',  // Idioma, por ejemplo 'es' para español
        },
      },
    }),
  });

  // Procesamos la respuesta de Dialogflow
  if (!response.ok) {
    throw new Error('Error en la solicitud a Dialogflow');
  }
  
  const data = await response.json();
  return data.queryResult.fulfillmentText;  // Devuelve el texto de respuesta de Dialogflow
}

// Función para manejar la interacción con el usuario
async function interact() {
  const userInput = document.getElementById('text-input').value.trim();  // Captura la entrada del usuario
  if (!userInput) return; // No hacer nada si la entrada está vacía

  // Muestra la entrada del usuario en el chat
  document.getElementById('chat-window').innerHTML += `<div class="text-gray-300"><strong>Tú:</strong> ${userInput}</div>`;
  document.getElementById('text-input').value = ''; // Limpia el campo de entrada

  try {
    const botResponse = await sendToDialogflow(userInput);  // Envía la entrada a Dialogflow y obtiene la respuesta
    document.getElementById('chat-window').innerHTML += `<div class="text-gray-300"><strong>Broki:</strong> ${botResponse}</div>`;  // Muestra la respuesta del bot
  } catch (error) {
    console.error(error);
    document.getElementById('chat-window').innerHTML += `<div class="text-red-500"><strong>Error:</strong> No se pudo obtener respuesta del bot.</div>`;
  }
}

// Evento para manejar el clic en el botón de envío
document.getElementById('keyboard-button').addEventListener('click', interact);

// Manejo de entrada por teclado (cuando se presiona "Enter")
document.getElementById('text-input').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    interact();
  }
});
