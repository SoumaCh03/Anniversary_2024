const messagesContainer = document.getElementById('chatbot-messages');
const inputField = document.getElementById('chatbot-input');
const sendButton = document.getElementById('chatbot-send');

sendButton.addEventListener('click', () => {
  const userMessage = inputField.value.trim();
  if (userMessage) {
    addMessage(userMessage, 'user');
    handleUserMessage(userMessage);
    inputField.value = '';
  }
});

function addMessage(text, type) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', message-${type});
  messageElement.textContent = text;
  messagesContainer.appendChild(messageElement);
}

function handleUserMessage(message) {
  // Replace this with your actual logic to process user messages
  // You can define different responses based on keywords or patterns
  const botResponse = "Thank you! Wishing you many more happy years together.";
  addMessage(botResponse, 'bot');
}