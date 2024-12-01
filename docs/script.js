// Esperar a que el documento esté listo
document.addEventListener("DOMContentLoaded", function() {
    // Escuchar el evento de mensaje de Tidio
    window.tidioChatApi.on('message', function(message) {
        // Verifica si el mensaje es de Tidio
        if (message.sender === 'bot') {
            // Agregar el mensaje al textarea
            const textInput = document.getElementById('text-input');
            textInput.value += `\nBot: ${message.text}`; // Agrega el texto del mensaje
            textInput.scrollTop = textInput.scrollHeight; // Desplazar hacia abajo
        }
    });
    
    // También puedes escuchar el evento de mensajes enviados
    window.tidioChatApi.on('send', function(message) {
        const textInput = document.getElementById('text-input');
        textInput.value += `\nTú: ${message.text}`; // Agrega el texto del usuario
        textInput.scrollTop = textInput.scrollHeight; // Desplazar hacia abajo
    });
});
