function sendMessage() {
  var userInput = document.getElementById("user-input").value;
  var chatBox = document.getElementById("chat-box");

  // Display user's message in the chat box
  var userMessage = '<div class="user-message">' + userInput + '</div>';
  chatBox.innerHTML += userMessage;

  // Make a request to the server with the user's query
  // You can implement this part using AJAX or Fetch API
  // After receiving the response, display it in the chat box
}
