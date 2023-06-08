import React, { useState } from 'react';
import '../assets/css/stylesheet.css';

interface ChatProps {
  conversationId: string | null;
}

interface Conversation {
  id: string;
  name: string;
  messages: Message[];
}

interface Message {
  id: string;
  sender: string;
  content: string;
}

const Chat: React.FC<ChatProps> = ({ conversationId }) => {
  const [inputValue, setInputValue] = useState('');

  const handleMessageSend = () => {
    if (inputValue.trim() === '') {
      return;
    }

    // Logic to send the message

    setInputValue('');
  };

  const generateMessageId = () => {
    // Generate a unique ID for the message
    // You can use a library like uuid or implement your own logic
    return Math.random().toString(36).substr(2, 9);
  };

  const conversation: Conversation = {
    id: '1',
    name: 'Friend 1',
    messages: [
      { id: '1', sender: 'User', content: 'Hello' },
      { id: '2', sender: 'Friend 1', content: 'Hi' },
      // Add more messages as needed
    ]
  };

  if (!conversationId || conversationId !== conversation.id) {
    return null;
  }

  return (
    <div className="chat">
      <div className="chat-header">
        <h3>{conversation.name}</h3>
      </div>
      <div className="chat-messages">
        {conversation.messages.map(message => (
          <div className="message" key={message.id}>
            <div className="message-sender">{message.sender}</div>
            <div className="message-content">{message.content}</div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;