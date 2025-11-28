import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Bonjour ! Je suis Ti'Punch, votre concierge virtuel 🍹. Je peux vous aider à trouver la villa de vos rêves ou une excursion inoubliable. Dites-moi ce qui vous ferait plaisir ?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-turquoise-600 hover:bg-turquoise-700 hover:-translate-y-1'
        }`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageCircle className="text-white w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-100 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-turquoise-600 p-4 flex items-center text-white">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold">Ti'Punch Assistant</h3>
              <p className="text-xs text-turquoise-100 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                En ligne
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-turquoise-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-turquoise-600 animate-spin" />
                  <span className="text-xs text-gray-500">Ti'Punch réfléchit...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:ring-2 focus-within:ring-turquoise-500 focus-within:border-transparent transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Posez une question..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none text-gray-700"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="ml-2 text-turquoise-600 hover:text-turquoise-800 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;