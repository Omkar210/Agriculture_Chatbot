$(document).ready(function() {
  $('#login-form').submit(function(event) {
      event.preventDefault();
      
      var username = $('#username').val();
      var password = $('#password').val();

      $.ajax({
          type: 'POST',
          url: '/login',
          contentType: 'application/json',
          data: JSON.stringify({username: username, password: password}),
          success: function(response) {
              $('#response').text(response.message);
              if (response.success) {
                  window.location.href = '/chat';
              }
          },
          error: function(xhr, status, error) {
              $('#response').text('An error occurred while processing your request.');
          }
      });
  });
});
