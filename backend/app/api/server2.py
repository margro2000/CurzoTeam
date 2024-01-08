from chat import chatbot
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
@app.route('/chat')
def chat():
    user_input=request.args.get('input')
    response = chatbot(user_input=user_input)  # Call the chatbot function from chat.py
    return response



if __name__ == "__main__":
    app.run(debug=True)
    
