import openai
import os
 

# Load your API key from an environment variable or secret management service
openai.api_key = "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"

def chatbot(user_input):
  
  # Create a list to store all the messages for context
  messages = [
    {"role": "system", "content": "You are an AI course generator that generates course content for users looking to learn about a new subject. Based on user input, output everything the user needs to learn and resources for each output and module in JSON format, label Title, content, and reources. Have a detailed description of each module and the learning content within it."},
  ]

  # Keep repeating the following
  while True:
    # Prompt user for input
    message = user_input

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

    return chat_message

if __name__ == "__main__":
  print("Start chatting with the bot (type 'quit' to stop)!")
  chatbot()