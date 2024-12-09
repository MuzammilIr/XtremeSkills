// src/components/ChatBox.jsx
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000"); // Backend server URL

const ChatBox = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("message", { username, message });
    setMessages((prev) => [...prev, { username, message }]);
    setMessage("");
  };

  return (
    <div className="chat-box">
      <h1>Chat with Clients/Workers</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
