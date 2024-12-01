<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Broki - Aprende Inglés</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body class="bg-gray-900 text-white">
  <div class="container mx-auto p-4">
    <div class="bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div class="bg-red-600 text-white p-4">
        <h1 class="text-2xl font-bold">Broki - Aprende Inglés</h1>
      </div>
      <div class="p-4">
        <div id="chat" class="h-96 overflow-y-scroll border border-gray-700 p-2 mb-4 bg-gray-700">
          <!-- Conversaciones se agregarán aquí -->
        </div>
        <div class="flex justify-center space-x-4">
          <input id="userInput" type="text" class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" placeholder="Escribe tu mensaje...">
          <button id="sendBtn" class="bg-red-500 text-white p-2 rounded-full">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <script>
    const API_URL = 'https://dialogflow.googleapis.com/v2/projects/your-project-id/agent/sessions/your-session-id:detectIntent'; 
    const API_KEY = 'AIzaSyBL9AONfGo4oqDbOhIZ2-rd0FdIfdB9ezk'; // Sustituye por tu clave de API (mueve esto al backend en un entorno real)

    // Función para enviar la solicitud de texto a Dialogflow
    async function sendToDialogflow(queryText) {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,  // Autenticación con la clave de API
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
      const userInput = document.getElementById('userInput').value.trim();  // Captura la entrada del usuario
      if (userInput) {
        // Agregar el mensaje del usuario al chat
        document.getElementById('chat').innerHTML += `<div class="user-response text-gray-300"><strong>Usuario:</strong> ${userInput}</div>`;
        
        // Enviar la entrada a Dialogflow y obtener la respuesta
        const botResponse = await sendToDialogflow(userInput);

        // Mostrar la respuesta del bot
        document.getElementById('chat').innerHTML += `<div class="bot-response text-gray-300"><strong>Broki:</strong> ${botResponse}</div>`;
        document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;  // Desplazar al fondo
      }
    }

    // Evento para manejar el clic en el botón de envío
    document.getElementById('sendBtn').addEventListener('click', interact);

    // Evento para manejar la tecla Enter
    document.getElementById('userInput').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        interact();
      }
    });
  </script>
</body>
</html>
