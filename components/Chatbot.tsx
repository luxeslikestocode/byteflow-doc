import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { PaperAirplaneIcon, ChatBubbleBottomCenterTextIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { CHATBOT_SYSTEM_INSTRUCTION } from '../constants';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const chatHistoryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initChat = () => {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: CHATBOT_SYSTEM_INSTRUCTION,
                    },
                });
                setChat(newChat);
                setMessages([{ role: 'model', text: "Hello! I'm the Byteflow assistant. How can I help you navigate our knowledge base today?" }]);
            } catch (error) {
                console.error("Error initializing chatbot:", error);
                setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting. Please check the API key configuration." }]);
            }
        };
        initChat();
    }, []);

    useEffect(() => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: input });
            const modelMessage: Message = { role: 'model', text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: Message = { role: 'model', text: "I encountered an error. Please try again." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-[#0F69F9] text-white p-4 rounded-full shadow-2xl shadow-blue-500/30 hover:bg-[#0d5ad1] transition-all duration-300 transform hover:scale-110 z-50"
                aria-label="Toggle Chatbot"
            >
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />
            </button>

            <div className={`fixed bottom-24 right-6 w-[90vw] max-w-md h-[70vh] max-h-[600px] flex flex-col bg-gray-900/50 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 transition-all duration-500 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white">Byteflow Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                <div ref={chatHistoryRef} className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-[#0F69F9] text-white rounded-br-none' : 'bg-white/10 text-white/90 rounded-bl-none'}`}>
                                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex justify-start">
                            <div className="max-w-[80%] px-4 py-2 rounded-2xl bg-white/10 text-white/90 rounded-bl-none">
                                <div className="flex items-center space-x-2">
                                    <div className="h-2 w-2 bg-white/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="h-2 w-2 bg-white/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="h-2 w-2 bg-white/50 rounded-full animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about our services..."
                            className="w-full pl-4 pr-12 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F69F9]/50 transition-colors text-white"
                        />
                        <button type="submit" disabled={isLoading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0F69F9] text-white disabled:bg-gray-500 transition-colors">
                            <PaperAirplaneIcon className="h-5 w-5" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Chatbot;