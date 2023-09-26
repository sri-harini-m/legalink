import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => { //displays when opened
    setMessages(previousMessages => [
      {
        _id: 1,
        text: 'Welcome to the Legalite Chatbot! How may I help you?',
        createdAt: new Date(),
        system: true
      },
      ...previousMessages
    ]);
  }, []);

  const onSend = async newMessages => {//function to send messages
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages)); //appends message

    const userInput = newMessages[0].text;//messages in string obviously lol
    const response = await getChatbotResponse(userInput);//runs response function

    setMessages(previousMessages => GiftedChat.append(previousMessages, response));
  };

  const getChatbotResponse = async userInput => { //said response function lol
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',//idk chat gpt said i have to add this to use apis 
        {
          prompt: `User: ${userInput}\n`,
          max_tokens: 150,
          n: 1
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' // said api do not copy this is secret lmao
          }
        }
      );

      return [ /*gives an id to each response tried making it serial but didnt work so some dude said to do this*/
        {
          _id: Math.round(Math.random() * 1000000),
          text:  `Legal Bot: ${response.data.choices[0].text.trim()}`,
          createdAt: new Date()
        }
      ];
    } catch (error) {//error handling that some guy on yt said to add cause ai can cause errors *[acts shocked]*
      console.error(error)//some random shit cause f errors
      return [];
    }
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1
      }}
    />
  );
};

export default ChatBot;
