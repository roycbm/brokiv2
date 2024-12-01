<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Broki - Aprende Inglés</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <div class="container mx-auto p-4">
        <div class="bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <div class="bg-blue-600 text-white p-4">
                <h1 class="text-2xl font-bold">Broki - Aprende Inglés</h1>
            </div>
            <div class="p-4">
                <div id="chat-window" class="h-96 overflow-y-scroll border border-gray-700 p-2 mb-4 bg-gray-700">
                    <!-- Aquí se van a mostrar los mensajes -->
                </div>
                <div class="flex justify-center space-x-4 mb-4">
                    <button id="voice-button" class="bg-blue-500 text-white p-2 rounded-full" aria-label="Activar micrófono">
                        <i id="voice-icon" class="fas fa-microphone"></i>
                    </button>
                    <button id="keyboard-button" class="bg-blue-500 text-white p-2 rounded-full" aria-label="Abrir teclado">
                        <i class="fas fa-keyboard"></i>
                    </button>
                </div>
                <div>
                    <input id="text-input" type="text" class="w-full p-2 rounded bg-gray-800 text-white border border-gray-700" placeholder="Escribe tu mensaje...">
                </div>
            </div>
        </div>
    </div>

    <script src="//code.tidio.co/kkosnybeqsimkd8ow5dcncotpjy89n11.js" async></script>
</body>
</html>
