"use client";

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

export default function ChatPage() {
  const { user, isSignedIn } = useUser();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Cargar los mensajes desde la base de datos
  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch('/api/chat');
      const data = await res.json();
      if (res.ok) {
        setMessages(data.messages);
      } else {
        console.error(data.error);
      }
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { userId: user.id, username: user.firstName, message },
      ]);
      setMessage('');
    } else {
      console.error(data.error);
    }
  };

  if (!isSignedIn) return <p>Debes iniciar sesión para ver el chat.</p>;

  return (
    <div>
      <h1>Chat Global</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
