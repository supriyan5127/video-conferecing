// script.js

// Selecting elements
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const messageInput = document.getElementById('messageInput');
const messages = document.getElementById('messages');
const sendButton = document.getElementById('sendButton');

// Configuring user media
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    localVideo.srcObject = stream;
    // Connect to video conferencing server and share the stream (implementation details depend on the server you're using)
  })
  .catch(error => {
    console.error('Error accessing media devices:', error);
  });

// Add event listener for sending messages
sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() === '') return;

  // Send message to other participants via video conferencing server (implementation details depend on the server you're using)
  displayMessage('You: ' + message);

  // Clear input field
  messageInput.value = '';
});

// Helper function to display messages in the chat
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;
}