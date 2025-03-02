import React, { useState, useEffect, useRef } from 'react';
import { Input, Button } from 'antd';
import { SendOutlined, SmileOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../styles/Dashboard.css'; // Pastikan path ini benar

const ChatSession = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null); // 🔹 Tambahkan useRef untuk elemen chat-box

  useEffect(() => {
    const cachedMessages = sessionStorage.getItem('chatMessages');
    if (cachedMessages) {
      setMessages(JSON.parse(cachedMessages));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('chatMessages', JSON.stringify(messages));

    // 🔹 Scroll otomatis ke bawah saat pesan baru ditambahkan
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      try {
        const response = await axios.post('https://kubiks.lpp.co.id/chatbot', { message: input });
        const botReply = response.data.response;
        setMessages([...newMessages, { text: botReply, sender: 'bot' }]);
      } catch (error) {
        console.error('Error fetching response:', error);
      }
    }
  };

  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <div className="card no-print">
      <h2 style={{ textAlign: 'center' }}>Chat With My Virtual Assistant</h2>
      <div className="chat-container">
        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              {msg.sender === 'bot' ? (
                <span className="bubble"><div dangerouslySetInnerHTML={createMarkup(msg.text)} /></span>
              ) : (
                <span className="bubble">{msg.text}</span>
              )}
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <Input 
            value={input} 
            className="chat-input"
            onChange={(e) => setInput(e.target.value)} 
            onPressEnter={handleSendMessage}
            placeholder="Ketik pesan..." 
          />
          <Button type="primary" shape="circle" icon={<SendOutlined />} onClick={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatSession;
