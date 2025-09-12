import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hello! I'm your personal wellness assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            }
        };
        const { data } = await axios.post('http://localhost:5001/api/chatbot/message', { message: input }, config);
        
        const botMessage = { from: 'bot', text: data.reply };
        setMessages(prev => [...prev, botMessage]);

    } catch (error) {
        const errorMessage = { from: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." };
        setMessages(prev => [...prev, errorMessage]);
        console.error("Chatbot error:", error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 flex flex-col h-[70vh]
                    bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-white/30">
      
      <div className="p-4 border-b border-white/30">
        <h2 className="text-xl font-semibold text-center text-gray-800">MindWell Assistant</h2>
      </div>

      <div className="flex-grow p-4 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end animate-fade-in-up ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
              <div className={`px-4 py-2 rounded-2xl max-w-xs md:max-w-md shadow ${
                msg.from === 'bot' 
                  ? 'bg-gray-100 text-gray-800 rounded-bl-none' 
                  : 'bg-purple-600 text-white rounded-br-none'
              }`}>
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-end justify-start animate-fade-in-up">
              <div className="px-4 py-2 rounded-2xl max-w-xs shadow bg-gray-100 text-gray-800 rounded-bl-none">
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 bg-purple-300 rounded-full animate-bounce delay-0"></span>
                  <span className="h-2 w-2 bg-purple-300 rounded-full animate-bounce delay-150"></span>
                  <span className="h-2 w-2 bg-purple-300 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <form onSubmit={sendMessage} className="p-4 border-t border-white/30">
        <div className="flex items-center bg-white/50 rounded-xl shadow-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-4 py-3 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
          />
          <button type="submit" className="p-3 text-purple-600 hover:text-purple-800 transition-colors duration-200
                                          disabled:opacity-50 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;