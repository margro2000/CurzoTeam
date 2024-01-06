import openai
import os

# Load your API key from an environment variable or secret management service
openai.api_key = "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"

def chatbot():
  # Create a list to store all the messages for context
  messages = [
    {"role": "system", "content": "You are an AI assistant that generates course content for users looking to learn about a new subject with a set of modules given by the user. Add resources for each output. Have output in JSON format for each response."},
  ]

  # Keep repeating the following
  while True:
    # Prompt user for input
    message = input("User: ")

    # Exit program if user inputs "quit"
    if message.lower() == "quit":
      break

    # Add each new message to the list
    messages.append({"role": "user", "content": message})

    # Request gpt-3.5-turbo for chat completion
    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=messages
    )

    # Print the response and add it to the messages list
    chat_message = response['choices'][0]['message']['content']
    print(f"Bot: {chat_message}")
    messages.append({"role": "assistant", "content": chat_message})

if __name__ == "__main__":
  print("Start chatting with the bot (type 'quit' to stop)!")
  chatbot()