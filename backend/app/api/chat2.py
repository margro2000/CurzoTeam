import openai

openai.api_key = "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" # supply your API key however you choose

message = {"role":"user", "content": input("This is the beginning of your chat with AI. [To exit, send \"###\".]\n\nYou:")};

conversation = [{"role": "system", "content": "You are an AI assistant that generates course content for users looking to learn about a new subject with a set of modules given by the user. Add resources for each output. Have output in JSON format for each response."}]

while(message["content"]!="###"):
    conversation.append(message)
    completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=conversation) 
    message["content"] = input(f"Assistant: {completion.choices[0].message.content} \nYou:")
    print()
    conversation.append(completion.choices[0].message)