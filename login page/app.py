from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Endpoint for rendering the login page
@app.route('/')
def index():
    return render_template('index.html')

# Endpoint for handling login requests
@app.route('/login', methods=['POST'])
def login():
    data = json.loads(request.data)
    username = data['username']
    password = data['password']
    # Add your authentication logic here
    # For simplicity, let's assume username is 'admin' and password is 'password'
    if username == 'admin' and password == 'password':
        response = {'success': True, 'message': 'Login successful.'}
    else:
        response = {'success': False, 'message': 'Invalid username or password.'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
